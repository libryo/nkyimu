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
   * 
   * @returns {void}
   */
  protected setElementName(): void {
    const name = this.node.getNodeName();

    this.wrapper.setAttribute('data-element', name);
  }

  /**
   * Function to process and parse the nkyimu node and it's children
   * 
   * @returns {HTMLElement[]}
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
   * 
   * @returns {void}
   */
  private appendNodeChildren(): void {
    this.children.forEach((child: AbstractHtmlNode) => {
      if (child instanceof NkyimuHtmlInline) {
        this.handleAppendInline(child);
      } else if (child instanceof NkyimuHtmlNode) {
        const childNodes: HTMLElement[] = child.output;

        this.nodeArray = [...this.nodeArray, ...childNodes];
      } else if (child instanceof NkyimuHtmlContainer) {
        const containerChildren: HTMLElement[] = child.getContainerChildrenArray();

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
   * @param {NkyimuHtmlInline} node The inline node to be appended
   * 
   * @returns {void}
   */
  private handleAppendInline(node: NkyimuHtmlInline): void {
    node.output.forEach((item: HTMLElement) => {
      const name: string|null = item.getAttribute('data-inline');
      
      switch (name) {
        case 'num':
          this.appendInlineToWrapperHTML(item, ' ');
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
   * @param {string} spacing The spacing to come after the appended inline element
   * 
   * @returns {void}
   */
  private appendInlineToWrapperHTML(node: HTMLElement, spacing: string = ''): void {
    this.wrapper.innerHTML += <string>(node.outerHTML + spacing);
  }

  /**
   * Parse each child of the nkyimu node
   * 
   * @returns {AbstractHtmlNode[]}
   */
  private processChildren(): AbstractHtmlNode[] {
    const children: AbstractHtmlNode[] = [];

    this.node.children.forEach((child: AbstractNode) => {
      const type: string = this.getNodeType(child);

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
