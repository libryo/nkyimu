import { AbstractNode } from "../../Abstracts/AbstractNode";
import { Range } from "../../AttributeGroups/Range";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ModType } from "../../ComplexTypes/ModType";

const type = new ModType();

/**
 * The element rmod is an inline element containing the
 * specification of a range of modifications on another document.
 */
export class Rmod extends AbstractNode {
  abbreviation = 'rmod';

  getNodeName(): string { return 'rmod'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Range()).items,
  ];
}
