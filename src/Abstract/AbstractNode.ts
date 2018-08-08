import { NodeType } from '../enums';
import { Attributes } from '../Interfaces/Attributes';
import { HasChildrenMap } from '../Interfaces/HasChildrenMap';
import { NodeRules } from '../Interfaces/NodeRules';
import { Rule } from '../Interfaces/Rule';
import { AbstractAttribute } from './AbstractAttribute';

export abstract class AbstractNode implements HasChildrenMap {

  /**
   * Type of node. Defaults to element node.
   */
  nodeType: NodeType = NodeType.ELEMENT_NODE;

  /**
   * Abbreviation of the node.
   */
  abstract abbreviation: string;

  /**
   * Name of the node. Used also in constructing the xml.
   */
  abstract nodeName: string;

  /**
   * Computed list of nodes that are allowed to be children
   * of the current node.
   */
  private allowedChildren: string[] = [];

  /**
   * Indices of the child nodes that are required
   */
  private requiredIndices: number[] = [];

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
   * List of attributes to be added to the node
   */
  protected attributes: Attributes = {};

  /**
   * List of children in the current node.
   */
  private children: AbstractNode[] = [];

  /**
   * List of the order in which the children
   * are placed in the node.
   */
  protected childrenOrder: string[] = [];

  /**
   * Content to be used in the node. The node that
   * requires to set the content should create a method
   * "setContent" and also override the "toXML" method.
   */
  protected content ?: string;


  /**
   * Extract the nodes from the nested CHILDREN_MAP object.
   *
   * @param rules NodeRules
   */
  private extractNodeNames(rules: NodeRules): string[] {
    const keys = Object.keys(rules);

    let children = [
      ...keys.filter(e => e !== 'choice')
    ];

    if (keys.indexOf('choice') !== -1) {
      children = children.concat(this.extractNodeNames(rules.choice.options));
    }

    if (keys.indexOf('sequence') !== -1) {
      children = children.concat(this.extractNodeNames(rules.sequence.options));
    }

    return children;
  }

  /**
   * Setup the required validation parameters.
   */
  protected setupValidationParams(): void {
    this.allowedChildren = this.extractNodeNames(this.CHILDREN_MAP);
    this.SEQUENCE.forEach((e, index) => {
      if (e.indexOf('?') === -1) {
        this.requiredIndices.push(index);
      }
    });
  }

  /**
   * Get the available children.
   *
   * @returns AbstractNode[]
   */
  getChildren(): AbstractNode[] {
    return this.children;
  }

  /**
   * Append a child to the node.
   *
   * @param node AbstractNode
   *
   * @returns AbstractNode
   */
  appendChild(node: AbstractNode): AbstractNode {
    if (this.allowedChildren.length < 1) {
      this.setupValidationParams();
    }

    this.validateChild(node);

    this.children.push(node);
    this.childrenOrder.push(node.nodeName);

    return this;
  }

  /**
   * Set the attributes of the nodes.
   *
   * @param attribute: AbstractAttribute
   */
  setAttribute(attribute: AbstractAttribute): void {
    this.attributes[attribute.getName()] = attribute;
  }

  /**
   * Validate the child being added.
   *
   * @param node AbstractNode
   */
  validateChild(node: AbstractNode): void {
    /** Check if the node is allowed as a child. We also validate for any that matches AnyOtherType complexType */
    if (this.allowedChildren.indexOf('any') === -1 && this.allowedChildren.indexOf(node.nodeName) === -1) {
      throw new Error(`Node ${node.nodeName} is not allowed as a child.`);
    }

    const rule = this.extractRule(node, this.CHILDREN_MAP);
    this.validateNode(node, rule);
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
  private extractRule(node: AbstractNode, rules: NodeRules, isChoice = false, choiceMinOccur ?: number, choiceMaxOccur ?: number): Rule {
    /** Extract the keys from the rule */
    const keys = Object.keys(rules);

    /** Check if the node is present as a key */
    if (keys.indexOf(node.nodeName) !== -1) {
      return {
        ...rules[node.nodeName],
        isChoice,
        choiceMinOccur,
        choiceMaxOccur,
      };
    }

    /** Since the node is not present as a key, get the options */
    if (keys.indexOf('choice') !== -1) {
      return this.extractRule(
        node,
        rules['choice'].options,
        true,
        rules['choice'].minOccur,
        rules['choice'].maxOccur
      );
    }

    if (keys.indexOf('sequence') !== -1) {
      return this.extractRule(
        node,
        rules['sequence'].options,
        true,
        rules['sequence'].minOccur,
        rules['sequence'].maxOccur
      );
    }

    /** Lastly, lets check if there is any present */
    if (keys.indexOf('any') !== -1) {
      return {
        ...rules.any,
        isChoice,
        choiceMinOccur,
        choiceMaxOccur,
      };
    }

    throw new Error(`Node ${node.nodeName} is not allowed as a child.`);
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
    /** The node we are attempting to add exists */
    const exists = this.childrenOrder.indexOf(node.nodeName) !== -1;

    /** The node already exists and can only exist once as a child. */
    if (exists && rule.maxOccur === 1 && rule.isChoice === false) {
      throw new Error(`The child node ${node.nodeName} should only appear once`);
    }

    /** The node exists but as a choice with a max occurrence of one. */
    if (exists && rule.isChoice === true && rule.choiceMaxOccur === 1) {
      throw new Error(`The child node ${node.nodeName} should only appear once`);
    }

    /** If the current node has a predefined sequence. */
    if (this.SEQUENCE && this.SEQUENCE.length > 0) {
      let expected = null;

      /** Get the last child node */
      /** Remove the modifiers to the node names */
      const cleanSequence = this.SEQUENCE.map(e => e.split(':')[0]);

      /** The last child node if any */
      const lastNode = this.childrenOrder.length > 0 ? this.childrenOrder[this.childrenOrder.length - 1] : null;

      /** The index of the last child node or -1 if none exists */
      const lastNodeSequenceIndex = lastNode ? cleanSequence.indexOf(lastNode) : -1;

      /** The index of the current node */
      const nodeIndex = cleanSequence.indexOf(node.nodeName);

      /**
       * if the node we are attempting to add appears before the last child node in the sequence,
       * then we cannot add it and can only add anything that comes after the last child.
       */
      if (lastNodeSequenceIndex > nodeIndex) {
        expected = cleanSequence.slice(lastNodeSequenceIndex + 1);
        expected = expected.length > 1 ? 'one of ' + expected.join(', ') : expected.join(', ');

        throw new Error(`The child node ${node.nodeName} is expected before the current last child(${lastNode}). Expected is ${expected}`);
      }

      cleanSequence
        .some((seqNode, index) => {
          /** if the current sequence node is required */
          const isRequired = this.requiredIndices.indexOf(index) !== -1;

          /** if the current sequence node is already a child */
          const isPresent = this.childrenOrder.indexOf(seqNode) !== -1;

          /** if the current sequence node is the node we are attempting to add */
          const isNode = node.nodeName === seqNode;

          /**
           * if the node appears before the last child but a required node is missing,
           * then we can only add the required node or anything before the node we
           * are attempting to add.
           */
          if (isRequired && !isPresent && !isNode) {
            expected = cleanSequence.slice(lastNodeSequenceIndex + 1, index + 1);
            expected = expected.length > 1 ? 'one of ' + expected.join(', ') : expected.join(', ');

            throw new Error(`The child node ${node.nodeName} is unexpected. Expected is ${expected}`);
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

  /**
   * Get the regex version of the node.
   *
   * @returns string
   */
  toRegex(): string {
    return `<${this.nodeName}>`;
  }

  /**
   * Serialize the node.
   *
   * @param doc Document
   * @returns HTMLElement
   */
  toXml(doc: Document): HTMLElement {
    const node = doc.createElement(this.nodeName);

    Object.keys(this.attributes).forEach((attr: string) => {
      node.setAttribute(attr, this.attributes[attr].getValue().toString());
    });

    this.children.forEach((child: AbstractNode) => {
      node.appendChild(child.toXml(doc));
    });

    return node;
  }
}