import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../../ComplexTypes/Inlinereqreq";

const type = new Inlinereqreq();

/**
 * The element concept is is an inline element to identify a
 * text fragment introducing or referring to a concept in
 * the ontology
 */
export class Concept extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'concept'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
