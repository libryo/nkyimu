import { AbstractNode } from "../../Abstract/AbstractNode";
import { Date as DateGroup } from '../../AttributeGroups/Date';
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

const type = new Inline();

/**
 * the element date is an inline element to identify a date
 * expressed in the text and to propose a normalized
 * representation in the date attribute.
 */
export class Date extends AbstractNode {
  abbreviation = '';

  nodeName = 'date';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new DateGroup()).items,
  ];
}
