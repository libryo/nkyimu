import { AbstractNode } from '../../Abstracts';
import NkyimuHtmlNode from './Modules/HTML/NkyimuHtmlNode';

export default class NkyimuNodeParser {
  
  /**
   * The level of indentation in px for the html output
   */
  private indentation: number = 30;

  /**
   * Function to convert an Nkyimu Node into
   * a html string of <p> elements to be used in the 
   * akn editor
   * 
   * @param {AbstractNode} node the nkyimu node to be parsed
   * 
   * @returns {Promise<string>}
   */
  public toHTMLString(node: AbstractNode): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        this.toHTMLElementArray(node).
          then((array: HTMLElement[]) => {
            resolve(this.nodeArrayToString(array));
          }).catch((err) => {
            reject(err);
          });
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Function to convert an Nkyimu Node into
   * an array of paragraph elements
   * 
   * @param {AbstractNode} node the nkyimu node to be parsed
   * 
   * @returns {Promise<HTMLElement[]>}
   */
  public toHTMLElementArray(node: AbstractNode): Promise<HTMLElement[]> {
    return new Promise<HTMLElement[]>((resolve, reject) => {
      try {
        resolve(this.nodeToHTMLArray(node));
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Function to parse an Nkyimu Node and 
   * extract an array of HTMLELements
   * 
   * @param {AbstractNode} node the nkyimu node to be parsed
   * 
   * @returns {HTMLElement[]}
   */
  private nodeToHTMLArray(node: AbstractNode): HTMLElement[] {
    const htmlNode = new NkyimuHtmlNode(node, 0, this.indentation);

    return htmlNode.output;
  }

  /**
   * Function to loop through an array
   * of HTMLELements and build a continuos html string
   * 
   * @param {HTMLElement[]} nodes the array of HTMLElements
   * 
   * @returns {string}
   */
  private nodeArrayToString(nodes: HTMLElement[]): string {
    let htmlString: string = '';

    for (let index = 0; index < nodes.length; index++) {
      const element: HTMLElement = nodes[index];
      if (element.outerHTML && element.outerHTML.length) {
        htmlString += element.outerHTML;
      }
    }

    return htmlString;
  }

  /**
   * Sets the level of indentation in px for the html output
   * 
   * @param {number} indentation The level of indentation
   * 
   * @returns void
   */
  public setHtmlIndentation(indentation: number): void {
    this.indentation = indentation;
  }

  /**
   * Gets the level of indentation in px for the html output
   * 
   * @returns {number}
   */
  public getHtmlIndentation(): number {
    return this.indentation;
  }

  /**
   * Gets the hierarchical level of the current html node
   * 
   * @param {HTMLElement} node The node whose level is being determined
   * 
   * @returns {number}
   */
  public getLevelFromMargin(node: HTMLElement): number {
    const { marginLeft } = node.style;
    let match: RegExpMatchArray | string[] | null;
    if (marginLeft) {
      match = /([0-9]+)px/g.exec(marginLeft);
      if (match && match[1]) {
        return <number>(parseInt(match[1]) / this.indentation);
      }
    }

    return 0;
  }

  /**
   * Static function to return the name of a html node from the data attribute
   * 
   * @param {HTMLElement} node The node whose name is being retrieved
   * 
   * @returns {string|null}
   */
  static getNameFromElement(node: HTMLElement): string|null {
    return <string|null>node.getAttribute('data-element');
  }
}
