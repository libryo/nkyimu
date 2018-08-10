import { AbstractNode } from "../../Abstract/AbstractNode";
import { Date as DateGroup } from '../../AttributeGroups/Date';
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

const type = new Inline();

/**
 * the element docDate is an inline element within preface to
 * identify the string used by the document for its own
 * date(s). Documents with multiple dates may use multiple
 * docDate elements.
 */
export class DocDate extends AbstractNode {
  abbreviation = '';

  nodeName = 'docDate';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new DateGroup()).items,
  ];
}
