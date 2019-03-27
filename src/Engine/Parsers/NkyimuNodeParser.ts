import { AbstractNode } from '../../Abstracts';
import NkyimuHtmlNode from './Modules/HTML/NkyimuHtmlNode';

export default class NkyimuNodeParser {
  /**
   * function to convert an Nkyimu Node into
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
        this.toHTMLNodeArray(node).
          then((array) => {
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
   * function to convert an Nkyimu Node into
   * an array of paragraph elements
   * 
   * @param {AbstractNode} node the nkyimu node to be parsed
   * 
   * @returns {Promise<HTMLParagraphElement[]>}
   */
  public toHTMLNodeArray(node: AbstractNode): Promise<HTMLParagraphElement[]> {
    return new Promise<HTMLParagraphElement[]>((resolve, reject) => {
      try {
        resolve(this.nodeToHTMLArray(node));
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * function to parse an Nkyimu Node and 
   * extract an array of HTMLELements
   * 
   * @param {AbstractNode} node the nkyimu node to be parsed
   * 
   * @returns {HTMLParagraphElement[]}
   */
  private nodeToHTMLArray(node: AbstractNode): HTMLParagraphElement[] {
    const htmlNode = new NkyimuHtmlNode(node);

    return htmlNode.output;
  }

  /**
   * function to loop through an array
   * of HTMLELements and build a continuos html string
   * 
   * @param {HTMLParagraphElement[]} nodes the array of HTMLElements
   * 
   * @returns {string}
   */
  private nodeArrayToString(nodes: HTMLParagraphElement[]): string {
    let htmlString: string = '';

    for (let index = 0; index < nodes.length; index++) {
      const element = nodes[index];
      if (element.outerHTML && element.outerHTML.length) {
        htmlString += element.outerHTML;
      }
    }

    return htmlString;
  }
}
