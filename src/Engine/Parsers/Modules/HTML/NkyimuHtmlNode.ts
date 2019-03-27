import { AbstractNode } from '../../../../Abstracts';
import AbstractHtmlNode from './AbstractHtmlNode';

export default class NkyimuHtmlNode extends AbstractHtmlNode {
  constructor(node: AbstractNode, level: number = 0, indentation: number = 30) {
    super(node, level, indentation);
  }
}
