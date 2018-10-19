import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../../ComplexTypes/Inlinereqreq";

const type = new Inlinereqreq();


/**
 * The element process is an inline element to identify a text
 * fragment introducing or referring to a process in the ontology
 */
export class Process extends AbstractNode {
  abbreviation = 'process';

  getNodeName(): string { return 'process'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
