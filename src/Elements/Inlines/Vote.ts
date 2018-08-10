import { AbstractNode } from "../../Abstract/AbstractNode";
import { VoteAtts } from "../../AttributeGroups/VoteAtts";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

const type = new Inline();

/**
 * The element vote is an inline that wraps either the name
 * of the voter (when organized by choice) or the vote
 * (when organized by name) in a voting report.
 */
export class Vote extends AbstractNode {
  abbreviation = '';

  nodeName = 'vote';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new VoteAtts()).items,
  ];
}
