import { AbstractNode } from '../../../../Abstracts';

export default class AbstractHtmlNode {
  private node: AbstractNode;
  private indentation: number;
  private level: number;
  private content: string[];
  private wrapper: HTMLParagraphElement;
  private nodeArray: HTMLParagraphElement[];
  public output: HTMLParagraphElement[];

  constructor(node: AbstractNode, level: number, indentation: number) {
    this.node = node;
    this.level = level;
    this.indentation = indentation;
    this.content = [
      'num',
      'heading',
      'content',
      'intro',
    ];
    this.wrapper = <HTMLParagraphElement>document.createElement('p');
    this.nodeArray = [];
    this.output = this.processNode();
  }

  private processNode() {
    this.applyLevel(this.wrapper);
    this.setElement(this.wrapper);
    this.nodeArray.push(this.wrapper);
    return this.nodeArray;
  }

  private applyLevel(node: HTMLParagraphElement): void {
    if (this.level > 0) {
      const indentation = (this.indentation * this.level).toString()
      node.style.marginLeft = `${indentation}px`;
    }
  }

  private setElement(node: HTMLParagraphElement): void {
    const name = this.node.getNodeName();
    node.setAttribute('data-element', name);
  }
}
