import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { BodyType } from "../../ComplexTypes/BodyType";

const type = new BodyType();

/**
 * The element body is the container of the main hierarchy of a hierarchical
 * document (e.g, an act or a bill)
 */
export class Body extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'body'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = type.SEQUENCE;

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}