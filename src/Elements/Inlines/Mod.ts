import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ModType } from "../ComplexTypes/ModType";

const type = new ModType();

/**
 * The element mod is an inline element containing the
 * specification of a modification on another document
 */
export class Mod extends AbstractNode {
  abbreviation = '';

  nodeName = 'mod';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
