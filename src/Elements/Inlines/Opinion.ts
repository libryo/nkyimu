import { AbstractNode } from "../../Abstract/AbstractNode";
import { OpinionType } from "../../AttributeGroups/OpinionType";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

const type = new Inline();

/**
 * The element opinion is an inline element to identify where
 * the document defines the opinion of an actor
 */
export class Opinion extends AbstractNode {
  abbreviation = '';

  nodeName = 'opinion';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new OpinionType()).items,
  ];
}
