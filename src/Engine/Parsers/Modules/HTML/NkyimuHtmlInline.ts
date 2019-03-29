import { AbstractHtmlNode } from './AbstractHtmlNode';
import { AbstractNode } from '../../../../Abstracts';
import * as styles from './styles';
import { NodeType } from '../../../../common/enums';
import { inlines } from '../../Types';

export default class NkyimuHtmlInline extends AbstractHtmlNode {

  /**
   * The parsed html element
   */
  protected wrapper: HTMLElement = this.createWrapper();

  /**
   * The parsed children
   */
  protected children: AbstractHtmlNode[] = [];

  /**
   * The array of Elements to be returned to the parser
   */
  public output: HTMLElement[] = this.processNode();

  /**
   * Should classify with data attribute
   */
  private identify: boolean = false;

  /**
   * Inlines that are indentified in the editor
   */
  static identifiers: Array<string> = [
    'num',
    'heading',
    'term',
  ];

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
   * Creates the html wrapper for the inline element
   * 
   * @returns {HTMLElement}
   */
  private createWrapper(): HTMLElement {
    const name = this.node.getNodeName();

    if (NkyimuHtmlInline.identifiers.includes(name)) {
      this.identify = true;
      return <HTMLElement>document.createElement('span');
    } else {
      return <HTMLElement>document.createElement(name);
    }
  }

  /**
   * Applies the name of the node to the wrapper element
   * 
   * @returns {void}
   */
  protected setElementName(): void {
    const name: string = this.node.getNodeName();
    this.wrapper.setAttribute('data-inline', name);
  }

  /**
   * Function to process and parse the nkyimu node and it's children
   * 
   * @returns {HTMLElement[]}
   */
  private processNode(): HTMLElement[] {
    if (this.identify) {
      this.setElementName();
      this.addElementStyling();
    }
    this.processChildren();

    this.nodeArray.push(this.wrapper);
    return this.nodeArray;
  }

  /**
   * Loop through the inline children and add their outpurs to the main node
   * 
   * @returns {void}
   */
  private processChildren(): void {
    this.node.children.forEach((child: AbstractNode) => {
      if (child.getNodeType() === NodeType.TEXT_NODE) {
        this.wrapper.innerHTML += child.getNode().textContent;
      } else if (inlines.includes(child.getNodeName())) {
        const inline = new NkyimuHtmlInline(child, this.level, this.indentation);
        inline.output.forEach((item: HTMLElement) => {
          this.wrapper.innerHTML += item.outerHTML;
        }) 
      }
    });
  }

  /**
   * Adds element styling for clarity
   * 
   * @returns {void}
   */
  private addElementStyling(): void {
    const name: string = this.node.getNodeName();
    const style: string = styles[name];

    if (style) {
      this.wrapper.setAttribute('style', style);
    }
  }
}
