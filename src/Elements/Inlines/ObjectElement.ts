import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../../ComplexTypes/Inlinereqreq";

const type = new Inlinereqreq();


/**
 * The element object is is an inline element to identify a
 * text fragment introducing or referring to an object in
 * the ontology
 */
export class ObjectElement extends AbstractNode {
  abbreviation = 'object';

  getNodeName(): string { return 'object'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
