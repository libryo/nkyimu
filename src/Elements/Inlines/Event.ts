import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

const type = new Inlinereqreq();

/**
 * The element event is an inline element to identify a text
 * fragment introducing or referring to an event in the ontology
 */
export class Event extends AbstractNode {
  abbreviation = '';

  nodeName = 'event';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
