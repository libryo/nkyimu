import { AbstractNode } from '../../../../Abstracts';
import { AbstractHtmlNode } from './AbstractHtmlNode';
import NkyimuHtmlInline from './NkyimuHtmlInline';
import NkyimuHtmlContainer from './NkyimuHtmlContainer';


export default class NkyimuHtmlNode extends AbstractHtmlNode {

  /**
   * The parsed html element
   */
  protected wrapper: HTMLElement = <HTMLElement>document.createElement('p');

  /**
   * The parsed children
   */
  protected children: AbstractHtmlNode[] = this.processChildren();

  /**
   * The array of Paragraph Elements to be returned to the parser
   */
  public output: HTMLElement[] = this.processNode();

  /**
   * Whether or not the node has a heading
   */
  private hasNodeContent: boolean = false;

  /**
   * Create a parsed Nkyimu HTML HContainer node
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
  protected setElementName(): void {
    const name = this.node.getNodeName();

    this.wrapper.setAttribute('data-element', name);
  }

  /**
   * Function to process and parse the nkyimu node and it's children
   */
  private processNode(): HTMLElement[] {
    this.applyLevel();
    this.setElementName();
    this.nodeArray.push(this.wrapper);

    this.appendNodeChildren();
    return this.nodeArray;
  }

  /**
   * Loop through the parsed children and determine how to append them
   */
  private appendNodeChildren(): void {
    this.children.forEach((child) => {
      if (child instanceof NkyimuHtmlInline) {
        this.handleAppendInline(child);
      } else if (child instanceof NkyimuHtmlNode) {
        const childNodes = child.output;

        this.nodeArray = [...this.nodeArray, ...childNodes];
      } else if (child instanceof NkyimuHtmlContainer) {
        const containerChildren = child.getContainerChildrenArray();

        if (!this.hasNodeContent) {
          containerChildren.forEach((item: HTMLElement, index: number) => {
            if (index === 0) {
              this.wrapper.innerHTML += item.innerHTML;
            } else {
              this.nodeArray.push(item);
            }
          }); 
          
        } else {
          this.nodeArray = [...this.nodeArray, ...containerChildren];
        }
      }
    });
  }

  /**
   * Handles appending the inline node to the main node
   * 
   * @param {NkyimuHtmlInline} node 
   */
  private handleAppendInline(node: NkyimuHtmlInline): void {
    node.output.forEach((item) => {
      const name = item.getAttribute('data-inline');
      
      switch (name) {
        case 'num':
          this.appendInlineToWrapperHTML(item);
          break;
        case 'heading':
          if (!this.hasNodeContent) this.hasNodeContent = true;
          this.appendInlineToWrapperHTML(item);
          break;
        default:
          break;
      }
    });
  }

  /**
   * Take the html content of a node and insert it into the wrapper element
   * 
   * @param {HTMLElement} node The inline html element
   */
  private appendInlineToWrapperHTML(node: HTMLElement): void {
    this.wrapper.innerHTML += `${node.outerHTML} `;
  }

  /**
   * Parse each child of the nkyimu node
   */
  private processChildren(): AbstractHtmlNode[] {
    const children: AbstractHtmlNode[] = [];

    this.node.children.forEach((child) => {
      const type = this.getNodeType(child);

      switch (type) {
        case 'inline':
          children.push(
            new NkyimuHtmlInline(child, this.level, this.indentation)
          );
          break;
        case 'hcontainer':
          children.push(
            new NkyimuHtmlNode(child, this.level + 1, this.indentation)
          );
          break;
        case 'container':
          children.push(
            new NkyimuHtmlContainer(child, this.level, this.indentation)
          );
          break;
        default:
          break;
      }
    });

    return children;
  }
}
