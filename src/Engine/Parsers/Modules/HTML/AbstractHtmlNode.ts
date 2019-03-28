import { AbstractNode } from '../../../../Abstracts';


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
}
