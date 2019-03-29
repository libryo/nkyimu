import { AbstractHtmlNode } from './AbstractHtmlNode';
import { AbstractNode } from '../../../../Abstracts';
import NkyimuHtmlBlock from './NkyimuHtmlBlock';


export default class NkyimuHtmlContainer extends AbstractHtmlNode {

  /**
   * The parsed html element
   */
  protected wrapper: HTMLElement = <HTMLElement>document.createElement('p');

  /**
   * The parsed children
   */
  protected children: AbstractHtmlNode[] = this.processChildren();

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
   */
  private processNode(): HTMLElement[] {
    this.applyLevel();
    this.appendNodeChildren();

    this.nodeArray.push(this.wrapper);
    return this.nodeArray;
  }

  /**
   * Parse each child of the nkyimu node
   */
  private processChildren(): AbstractHtmlNode[] {
    const children: AbstractHtmlNode[] = [];

    this.node.children.forEach((child: AbstractNode) => {
      const type = this.getNodeType(child);

      switch (type) {
        case 'block':
          children.push(
            new NkyimuHtmlBlock(child, this.level, this.indentation)
          );
          break;
        default:
          break;
      }
    });

    return children;
  }

   /**
   * Loop through the parsed children and determine how to append them
   */
  private appendNodeChildren(): void {
    this.children.forEach((child: AbstractHtmlNode) => {
      if (child instanceof NkyimuHtmlBlock) {
        child.output.forEach((item: HTMLElement) => {
          this.wrapper.appendChild(item);
        });
      }
    });
  }

  /**
   * Gets all the container children as an array of nodes
   */
  public getContainerChildrenArray(): HTMLParagraphElement[] {
    const children: HTMLParagraphElement[] = [];
    
    Array.prototype.forEach.call(this.wrapper.children, (child: HTMLParagraphElement) => { 
      children.push(child);
    });

    return children;
  }
}
