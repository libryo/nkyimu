import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Metaopt } from "../../ComplexTypes";
import { Refers, ShowOpt, RangeOpt } from "../../AttributeGroups";

const type = new Metaopt();
/**
 * The element FRBRportion is the metadata property containing the eId
 * of the portion contained in a manifestation-level portion. If the
 * portion contains an interval of elements, the range attributes specifies the first and last one.
 */
export class FRBRportion extends AbstractNode {
  abbreviation = 'frbrportion';

  getNodeName(): string { return 'FRBRportion'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Refers()).items,
    ...(new ShowOpt()).items,
    ...(new RangeOpt()).items,
  ];
}