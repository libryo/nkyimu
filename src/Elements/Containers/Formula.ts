import { AbstractNode } from "../../Abstracts/AbstractNode";
import { Name } from "../../AttributeGroups/Name";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Blocksreq } from "../../ComplexTypes/Blocksreq";

const type = new Blocksreq();

/**
 * The element formula is a section of the preface or preamble that
 * contains a formulaic expression that is systematically or frequently
 * present in a preface or a preamble and has e precise legal meaning
 * (e.g. an enacting formula). Use the refersTo attribute for the
 * specification of the actual type of formula.
 */
export class Formula extends AbstractNode {
  abbreviation = 'fo';

  getNodeName(): string { return 'formula'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Name()).items,
  ];
}
