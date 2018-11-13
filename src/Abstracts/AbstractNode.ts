import {intersection} from 'lodash';
import { NodeType } from '../common/enums';
import { AttributeGroupItem } from '../Interfaces/AttributeGroupItem';
import { HasChildrenMap } from '../Interfaces/HasChildrenMap';
import { NodeRules } from '../Interfaces/NodeRules';
import { Rule } from '../Interfaces/Rule';
import { AbstractAttribute } from './AbstractAttribute';
import { EIdAttribute } from '../Attributes/EIdAttribute';
import { NkyimuComment } from '../Interfaces/NkyimuComment';
import { NkyimuElement } from '../Interfaces/NkyimuElement';
import { NkyimuText } from '../Interfaces/NkyimuText';

export abstract class AbstractNode implements HasChildrenMap {
  /**
   * Abbreviation of the node.
   */
  abstract abbreviation: string;

  /**
   * Computed list of nodes that are allowed to be children
   * of the current node.
   */
  protected _allowedChildren: string[] = [];

  /**
   * Indices of the child nodes that are required
   */
  private requiredIndices: number[] = [];

  /**
   * List of attributes that the current node has.
   */
  private currentAttributes: string[] = [];

  /**
   * Map of how the child nodes should be validated.
   * If a choice is required, the key for the NodeRule
   * should be "choice".
   */
  readonly abstract CHILDREN_MAP: NodeRules;

  /**
   * The predefined sequence of nodes if any. If no
   * predefined sequence is present, an empty array
   * should be set.
   */
  readonly abstract SEQUENCE: string[];

  /**
   * The attributes that are required in the node.
   */
  readonly abstract ATTRIBUTE_GROUPS: AttributeGroupItem[] = [];

  /**
   * List of the order in which the children
   * are placed in the node.
   */
  protected childrenOrder: string[] = [];

  /**
   * The generated document node.
   */
  private node: NkyimuComment|NkyimuElement|NkyimuText;

  /**
   * The unique ID for this node.
   */
  generatedId = '';

  /**
   * List of children with unique IDs;
   */
  private _children: AbstractNode[] = [];

  /**
   * The parent node.
   */
  protected _parent: AbstractNode|null = null;

  /**
   * Create a new node.
   */
  constructor(content = '') {
    switch (this.getNodeType()) {
      default:
      case NodeType.ELEMENT_NODE:
        this.node = Object.assign((new Document()).createElement(this.getNodeName()), { source: this });
        break;
      case NodeType.TEXT_NODE:
        this.node = Object.assign((new Document()).createTextNode(content), { source: this });
        break;
      case NodeType.COMMENT_NODE:
        this.node = Object.assign((new Document()).createComment(content), { source: this });
        break;
    }
  }

  /**
   * Parent accessor.
   */
  get allowedChildren(): string[] {
    return this._allowedChildren;
  }

  /**
   * Parent accessor.
   */
  get parent(): AbstractNode|null {
    return this._parent;
  }

  /**
   * Children accessor.
   */
  get children(): AbstractNode[] {
    return this._children;
  }

  /**
   * Get the node type.
   */
  getNodeType(): NodeType {
    return NodeType.ELEMENT_NODE;
  }

  /**
   * The name of the node.
   */
  abstract getNodeName(): string;

  /**
   * Get the generated document node.
   */
  getNode(): NkyimuComment|NkyimuElement|NkyimuText {
    return Object.assign(this.node, { source: this });
  }

  /**
   * Get the generated document node only if its an element.
   */
  getElement(): NkyimuElement {
    if (this.node instanceof Element) return this.node;

    throw new Error(`${this.getNodeName()} is not a node of type Element`);
  }

  /**
   * Get the first child.
   */
  firstChild(): AbstractNode {
    return this._children[0];
  }

  /**
   * Get the last child.
   */
  lastChild(): AbstractNode {
    return this._children[this._children.length - 1];
  }

  /**
   * Get the nth child.
   *
   *  @param nth number
   */
  nthChild(nth: number): AbstractNode {
    return this._children[nth -1];
  }

  /**
   * Set the text content of a node.
   *
   * @param str string
   */
  setTextContent(str: string) {
    if (this.getNodeType() !== NodeType.TEXT_NODE && this.getNodeType() !== NodeType.COMMENT_NODE) {
      throw new Error(`${this.getNodeName()} is a non-text node`);
    }

    this.node.textContent = str;
  }

  /**
   * Get the text content of a node.
   */
  getTextContent(): string|null {
    if (this.getNodeType() !== NodeType.TEXT_NODE && this.getNodeType() !== NodeType.COMMENT_NODE) {
      throw new Error(`${this.getNodeName()} is a non-text node`);
    }

    return this.node.textContent;
  }

  /**
   * Extract the nodes from the nested CHILDREN_MAP object.
   *
   * @param rules NodeRules
   */
  private extractNodeNames(rules: NodeRules): string[] {
    const keys = Object.keys(rules);
    let children: string[] = [];

    keys.forEach((key) => {
      if (Object.keys(rules[key].options).length > 0) {
        children = children.concat(this.extractNodeNames(rules[key].options));
        const nodes = [];

        Object.keys(rules[key].options)
          .forEach((e) => {
            // @ts-ignore
            nodes.push(this.flattenNode(rules[key].options[e].nodes).split(','));
          });

        rules[key].nodes = [nodes];
        return;
      }

      children.push(key);
      rules[key].nodes = [key];
    });

    return children;
  }

  private flattenNode(node: string|string[]) {
    if (!Array.isArray(node)) return node;

    return node.map((e) => this.flattenNode(e))
      .join(',');
  }

  /**
   * Setup the required validation parameters.
   */
  setupValidationParams(): void {
    this._allowedChildren = this.extractNodeNames(this.CHILDREN_MAP);
    this.SEQUENCE.forEach((e, index) => {
      if (e.indexOf('?') === -1) {
        this.requiredIndices.push(index);
      }
    });
  }

  /**
   * Append a child to the node.
   *
   * @param node AbstractNode
   *
   * @returns AbstractNode
   */
  appendChild(node: AbstractNode): AbstractNode {
    if (this.node instanceof Text || this.node instanceof Comment) {
      throw new Error('This node does not accepts any children.');
    }

    if (this._allowedChildren.length < 1) {
      this.setupValidationParams();
    }

    this.validateChild(node);

    this.childrenOrder.push(node.getNodeName());

    node._parent = this;

    this._children.push(node);

    this.node.appendChild(node.getNode());

    return this;
  }

  /**
   * Remove the given child from the tree.
   *
   * @param node AbstractNode
   */
  removeChild(node: AbstractNode): AbstractNode {
    const index: number = this._children.indexOf(node);

    if (index === -1) {
      throw new Error('The node to be removed is not a child of this node');
    }

    this._children.splice(index, 1);

    this.node.removeChild(node.getNode());

    return this;
  }

  replaceChild(replacement: AbstractNode, search: AbstractNode): AbstractNode {
    const index: number = this._children.indexOf(search);

    if (index === -1) {
      throw new Error('The node to be replaced is not a child of this node');
    }

    this._children.splice(index, 1, replacement);

    replacement._parent = this;

    this.node.replaceChild(replacement.getNode(), search.getNode());

    return this;
  }

  /**
   * Set the attributes of the nodes.
   *
   * @param attribute: AbstractAttribute
   */
  setAttribute(attribute: AbstractAttribute): void {
    if (this.node instanceof Text || this.node instanceof Comment) {
      throw new Error('This node does not accepts any attributes.');
    }

    this.node.setAttribute(attribute.getName(), attribute.getValue().toString());

    this.currentAttributes.push(attribute.className);
  }

  /**
   * Removes the given attribute.
   *
   * @param attribute: AbstractAttribute
   */
  removeAttribute(attribute: AbstractAttribute): void {
    if (this.node instanceof Text || this.node instanceof Comment) {
      throw new Error('This node does not accepts any attributes.');
    }

    const index = this.currentAttributes.indexOf(attribute.className);

    if (index === -1) return;

    this.currentAttributes.splice(index, 1);
    this.node.removeAttribute(attribute.getName());
  }

  /**
   * Validate the child being added.
   *
   * @param node AbstractNode
   */
  validateChild(node: AbstractNode): void {
    /** Check if the node is allowed as a child. We also validate for any that matches AnyOtherType complexType */
    if (this._allowedChildren.indexOf('any') === -1 && this._allowedChildren.indexOf(node.getNodeName()) === -1) {
      throw new Error(`Node ${node.getNodeName()} is not allowed as a child.`);
    }

    // const rule = this.optimiseRule(this.extractRule(node, this.CHILDREN_MAP));
    const rule = this.extractRule(node, this.CHILDREN_MAP);

    if (!rule) {
      throw new Error(`Node ${node.getNodeName()} is not allowed as a child.`);
    }

    this.validateNode(node, rule);

    /** let's finally check if the node has valid children and attributes */
    node.validate();
  }

  /**
   * Extract the node rules to be used to validate the children.
   *
   * @param node AbstractNode
   * @param rules NodeRules
   * @param isChoice boolean
   * @param choiceMinOccur number
   * @param choiceMaxOccur number
   *
   * @throws Error
   *
   * @returns Rule
   */
  private extractRule(node: AbstractNode, rules: NodeRules, parentRule?: Rule): Rule|null {
    /** Extract the keys from the rule */
    const keys = Object.keys(rules);

    /** Check if the node is present as a key */
    if (keys.indexOf(node.getNodeName()) !== -1) {
      return {
        ...rules[node.getNodeName()],
        parentRule: rules[node.getNodeName()].parentRule ? rules[node.getNodeName()].parentRule : parentRule,
      };
    }

    let rule;

    keys.some((key) => {
      if (Object.keys(rules[key].options).length > 0) {
        rules[key].parentRule = parentRule;

        rule = this.extractRule(node, rules[key].options, rules[key]);

        if (rule) return true;
      }

      return false;
    });

    if (rule) return rule;

    /** Lastly, lets check if there is any present */
    if (keys.indexOf('any') !== -1) {
      return {
        ...rules.any,
        parentRule,
      };
    }

    return null;
  }


  /**
   * Validate the child being added. If invalid throw Error Exception.
   *
   * @param node AbstractNode
   * @param rule Rule
   *
   * @throws Error
   */
  private validateNode(node: AbstractNode, rule: Rule) {
    this.validateNodeCounts(node, rule);

    if (this.SEQUENCE && this.SEQUENCE.length > 0) {
      let expected;

      /** Get the last child node */
      /** Remove the modifiers to the node names */
      const cleanSequence = this.SEQUENCE.map(e => e.split(':')[0]);

      /** The last child node if any */
      const lastNode = this.childrenOrder.length > 0 ? this.childrenOrder[this.childrenOrder.length - 1] : null;

      /** The index of the last child node or -1 if none exists */
      const lastNodeSequenceIndex = lastNode ? cleanSequence.indexOf(lastNode) : -1;

      /** The index of the current node */
      const nodeIndex = cleanSequence.indexOf(node.getNodeName());

      /**
       * if the node we are attempting to add appears before the last child node in the sequence,
       * then we cannot add it and can only add anything that comes after the last child.
       */
      if (lastNodeSequenceIndex > nodeIndex) {
        expected = cleanSequence.slice(lastNodeSequenceIndex + 1);
        expected = expected.length > 1 ? 'one of ' + expected.join(', ') : expected.join(', ');

        throw new Error(`The child node ${node.getNodeName()} is expected before the current last child(${lastNode}). Expected is ${expected}`);
      }

      cleanSequence
        .some((seqNode, index) => {
          /** if the current sequence node is required */
          const isRequired = this.requiredIndices.indexOf(index) !== -1;

          /** if the current sequence node is already a child */
          const isPresent = this.childrenOrder.indexOf(seqNode) !== -1;

          /** if the current sequence node is the node we are attempting to add */
          const isNode = node.getNodeName() === seqNode;

          /**
           * if the node appears before the last child but a required node is missing,
           * then we can only add the required node or anything before the node we
           * are attempting to add.
           */
          if (isRequired && !isPresent && !isNode) {
            expected = cleanSequence.slice(lastNodeSequenceIndex + 1, index + 1);
            expected = expected.length > 1 ? 'one of ' + expected.join(', ') : expected.join(', ');

            throw new Error(`The child node ${node.getNodeName()} is unexpected. Expected is ${expected}`);
          }

          /**
           * if nothing is required before the node and the node we are attempting to add
           * is the current node in the sequence, then we can add it.
           */
          if (isNode) {
            return true;
          }

          /** Carry on to the next sequence item */
          return false;
        });
    }
  }


  validateNodeCounts(node: AbstractNode, rule: Rule) {
    /** The node we are attempting to add exists */
    const exists = this.childrenOrder.indexOf(node.getNodeName()) !== -1;
    const name = node.getNodeName();

    if (!rule.parentRule) {
      if (exists && rule.maxOccur === 1) {
        throw new Error(`The child node ${name} should only appear once`);
      }

      this.validateExclusivity(node, rule);
      return;
    }

    let parentAllowsMore = false;
    let current = rule;

    while (current.parentRule) {
      if (current.maxOccur !== 1) {
        parentAllowsMore = true;
        break;
      }
      if (!current.parentRule) {
        break;
      }
      current = {...current.parentRule};
    }

    if (rule !== current && current.maxOccur !== 1) parentAllowsMore = true;

    if (exists && !parentAllowsMore) {
      throw new Error(`The child node ${name} should only appear once`);
    }

    // @ts-ignore
    current = parentAllowsMore ? current : {...rule.parentRule};

    this.validateExclusivity(node, current);

    while (current.parentRule) {
      this.validateExclusivity(node, current);

      current = {...current.parentRule};
    }

    this.validateExclusivity(node, current);
  }

  validateExclusivity(node: AbstractNode, rule: Rule) {
    const name = node.getNodeName();

    if (!rule.choice || rule.maxOccur !== 1) {
      return;
    }

    rule.nodes.forEach((ruleNode) => {
      if (!Array.isArray(ruleNode) && ruleNode !== name) {
        if (this.childrenOrder.indexOf(ruleNode) !== -1) {
          throw new Error(`The child node ${name} cannot be added when ${ruleNode} is present.`);
        }
      }

      ruleNode.forEach((e) => {
        if (!Array.isArray(e)) {
          if (e === name) return;
          if (this.childrenOrder.indexOf(e) !== -1) {
            throw new Error(`The child node ${name} cannot be added when ${e} is present.`);
          }
        }

        if (e.indexOf(name) !== -1) return;

        const inter = intersection(this.childrenOrder, e);

        if (inter.length > 0) {
          throw new Error(`The child node ${name} cannot be added when ${inter.join(', ')} exist.`);
        }
      });
    });
  }

  /**
   * Check whether the node is considered valid.
   */
  validate() {
    this.validateAttributes();
  }

  /**
   * Validate the required attributes.
   *
   * @throws Error
   */
  validateAttributes() {
    let required = this.ATTRIBUTE_GROUPS
      .filter(e => e.required === true)
      .map(e => e.attribute.getClassName());

    if (required.length === 0) return;

    if (this.currentAttributes.length === 0) {
      if (required.indexOf('EIdAttribute') !== -1) {
        this.setAttribute(new EIdAttribute(`${this.abbreviation}___replace__`));

        return;
      }
      throw new Error(`Element ${this.getNodeName()} is missing required attributes: ${required.join(', ')}`);
    }

    required = required.filter((item) => this.currentAttributes.indexOf(item) === -1);

    const index = required.indexOf('EIdAttribute');

    if (index !== -1) {
      this.setAttribute(new EIdAttribute(`${this.abbreviation}___replace__`));
      required.splice(index, 1);
    }

    if (required.length > 0) {
      throw new Error(`Element ${this.getNodeName()} is missing required attributes: ${required.join(', ')}`);
    }
  }

  updateGeneratedIds() {
    this.generateIds(this);
  }

  private generateIds(node: AbstractNode, prefix = '') {
    const nodeCount:{ [key:string]: number } = {};

    node.children.forEach((child: AbstractNode) => {
      const requiresEId = child.ATTRIBUTE_GROUPS
        .some(e => e.attribute.getName() === 'eId' && e.required === true);

      const currentEId = this.getElement().getAttribute('eId');

      if (!requiresEId || child.abbreviation.length < 1) {
        this.generateIds(child, prefix);

        return;
      }

      if (currentEId && currentEId.indexOf('__replace__') === -1) {
        this.generateIds(child, currentEId);

        return;
      }

      const childId = this.getCorrectNodeId(prefix, nodeCount, child);

      child.setElementId(childId);

      this.generateIds(child, `${child.generatedId}_`);
    });
  }

  private getCorrectNodeId(prefix: string, nodeCount: { [key:string]: number }, node: AbstractNode): string {
    const nodePrefix = `${prefix}${node.abbreviation}_`;

    const nodeNumber = this.getNodeNumberContent(node);

    if (nodeNumber) {
      return `${nodePrefix}${nodeNumber}`;
    }

    if (!nodeCount[node.getNodeName()]) {
      nodeCount[node.getNodeName()] = 0;
    }

    nodeCount[node.getNodeName()] += 1;

    return `${nodePrefix}${nodeCount[node.getNodeName()]}`;
  }

  private getNodeNumberContent(node: AbstractNode) {
    const numTag = node.children.filter((e) => e.getNodeName() === 'num');

    if (numTag.length < 1 || numTag[0].children.length < 1) return null;

    const text = numTag[0].children.filter((e) => e.getNodeName() === '');

    if (text.length < 1) return null;

    const content = text[0].getTextContent();

    if (!content) return null;

    const nodeRegx = new RegExp(node.getNodeName(), 'gi');

    return content
      .replace(nodeRegx, '')
      .replace(/[.()-]/gi, '')
      .trim()
      .replace(/\s/g, '_');
  }

  setElementId(id: string) {
    this.generatedId = id;

    if (this.getNodeType() !== NodeType.ELEMENT_NODE) {
      return;
    }

    const attr = this.getElement().getAttribute('eId');

    if (!attr) {
      this.setAttribute(new EIdAttribute(id));

      return;
    }

    if (attr.indexOf('__replace__') !== -1) {
      this.setAttribute(new EIdAttribute(id));
    }
  }

  getFirstDescendant(nodeName: string): AbstractNode|null {
    let match: AbstractNode|null = null;

    this.children.some((child) => {
      if (child.getNodeName() === nodeName) {
        match = child;
        return true;
      }

      return false;
    });

    if (match) return match;

    this.children.some((e) => {
      const childMatch = e.getFirstDescendant(nodeName);

      if (childMatch) {
        match = childMatch;
        return true;
      }

      return false;
    });

    return match;
  }
}