import { AbstractNode } from '../../../../Abstracts';
import { AbstractHtmlNode } from './AbstractHtmlNode';
import NkyimuHtmlInline from './NkyimuHtmlInline';
import { inlines, hContainers } from '../../Types';


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
   * Function to process and parse the nkyimu node and
   * it's children
   */
  private processNode(): HTMLElement[] {
    this.applyLevel();
    this.setElementName();
    // this.processNodeChildren();

    this.nodeArray.push(this.wrapper);
    return this.nodeArray;
  }

  /**
   * Applies margin to the html element
   * based on node level
   */
  private applyLevel(): void {
    if (this.level > 0) {
      const indentation = (this.indentation * this.level).toString()
      this.wrapper.style.marginLeft = `${indentation}px`;
    }
  }

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
            new NkyimuHtmlNode(child, this.level, this.indentation + 1)
          );
          break;
        default:
          break;
      }
    });

    return children;
  }

  /**
   * Classifies the node based on it's name
   */
  private getNodeType(node: AbstractNode): string {
    const name = node.getNodeName();

    if (inlines.includes(name)) {
      return 'inline'
    } else if (hContainers.includes(name)) {
      return 'hcontainer'
    }

    return 'unknown';
  }
}
