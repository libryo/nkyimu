import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../../ComplexTypes/Inlinereqreq";

const type = new Inlinereqreq();

/**
 * The element organization is an inline element to identify a
 * text fragment introducing or referring to an organization
 * in the ontology
 */
export class Organization extends AbstractNode {
  abbreviation = 'organization';

  getNodeName(): string { return 'organization'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
