import { AbstractNode } from '../../../../Abstracts';
import { inlines, hContainers, containers, blocks } from '../../Types';

export abstract class AbstractHtmlNode {

  /**
   * The nkyimu node to be parsed
   */
  protected node: AbstractNode;

  /**
   * The depth of the node relative to the base node
   */
  protected level: number;

  /**
   * The indentation (in px) used by the html editor to denote hierarchy
   */
  protected indentation: number;
  
  /**
   * The parsed html element
   */
  protected abstract wrapper: HTMLElement;

  /**
   * The array of parsed elements for
   * the node and it's children
   */
  protected nodeArray: HTMLElement[];

  /**
   * The parsed children
   */
  protected abstract children: AbstractHtmlNode[];

  /**
   * The html output of the parsed node
   */
  public abstract output: HTMLElement[];

  /**
   * Abstract class for creating parsed nkyimu nodes
   * 
   * @constructor
   * 
   * @param {AbstractNode} node - The nkyimu node to be parsed
   * @param {number} level - The depth of the node relative to the base node
   * @param {number} indentation - The indentation (in px) used by the html editor to denote hierarchy
   */
  constructor(node: AbstractNode, level: number, indentation: number) {
    this.node = node;
    this.level = level;
    this.indentation = indentation;
    this.nodeArray = [];
  }

   /**
   * Set the name of the element
   */
  protected abstract setElementName(): void;

  /**
   * Applies margin to the html element
   * based on node level
   * 
   * @returns {void}
   */
  protected applyLevel(): void {
    if (this.level > 0) {
      const indentation: string = (this.indentation * this.level).toString()
      this.wrapper.style.marginLeft = `${indentation}px`;
    }
  }

  /**
   * Classifies the node based on it's name
   * 
   * @param {AbstractNode} node The node whose type is being retrieved
   * 
   * @returns {string}
   */
  protected getNodeType(node: AbstractNode): string {
    const name: string = node.getNodeName();

    if (inlines.includes(name)) {
      return 'inline';
    } else if (hContainers.includes(name)) {
      return 'hcontainer';
    } else if (containers.includes(name)) {
      return 'container';
    } else if (blocks.includes(name)) {
      return 'block';
    }

    return 'unknown';
  }
}
