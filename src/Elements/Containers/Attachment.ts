import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { DocContainerType } from "../ComplexTypes/DocContainerType";

/**
 * The element attachment is used as a container of individual
 * attachment elements
 */
export class Attachment extends AbstractNode {
  abbreviation = '';

  nodeName = 'attachment';

  readonly CHILDREN_MAP: NodeRules = (new DocContainerType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

}