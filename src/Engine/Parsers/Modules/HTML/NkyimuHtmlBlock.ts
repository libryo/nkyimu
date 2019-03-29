import { AbstractHtmlNode } from './AbstractHtmlNode';
import { AbstractNode } from '../../../../Abstracts';
import { NodeType } from '../../../../common/enums';
import NkyimuHtmlInline from './NkyimuHtmlInline';
import { inlines } from '../../Types';

export default class NkyimuHtmlBlock extends AbstractHtmlNode {

  /**
   * The parsed html element
   */
  protected wrapper: HTMLElement = <HTMLElement>document.createElement('p');

  /**
   * The parsed children
   */
  protected children: AbstractHtmlNode[] = [];

  /**
   * The array of Elements to be returned to the parser
   */
  public output: HTMLElement[] = this.processNode();

  /**
   * Create a parsed Nkyimu HTML Inline node
   * 
   * @constructor
   * 
   * @param {AbstractNode} node - The nkyimu node to be parsed
   * @param {number} level - The depth of the node relative to the base node
   * @param {number} indentation - The indentation (in px) used by the html editor to denote hierarchy
   */
  constructor(node: AbstractNode, level: number = 0, indentation: number = 30) {
    super(node, level, indentation);
  }

  /**
   * Applies the name of the node to the wrapper element
   */
  protected setElementName(): void {}
  
  /**
   * Function to process and parse the nkyimu node and
   * it's children
   * 
   * @returns {HTMLElement[]}
   */
  private processNode(): HTMLElement[] {
    this.applyLevel();
    this.appendNodeChildren();

    this.nodeArray.push(this.wrapper);
    return this.nodeArray;
  }

  /**
   * Loop through the parsed children and determine how to append them
   * 
   * @returns {void}
   */
  private appendNodeChildren(): void {
    this.node.children.forEach((child) => {
      if (child.getNodeType() === NodeType.TEXT_NODE) {
        this.wrapper.innerHTML += child.getNode().textContent;
      } else if (inlines.includes(child.getNodeName())) {
        const inline = new NkyimuHtmlInline(child, this.level, this.indentation);
        inline.output.forEach((item) => {
          this.wrapper.innerHTML += item.outerHTML;
        }) 
      }
    });
  }
}
