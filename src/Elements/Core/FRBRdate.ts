import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Name } from "../../AttributeGroups/Name";
import { Metaopt } from "../ComplexTypes/Metaopt";
import { Date as DateGroup } from "../../AttributeGroups/Date";

const type = new Metaopt();

/**
 * The element FRBRdate is the metadata property containing a relevant date
 * of the document in the respective level of the FRBR hierarchy. Attribute
 * name specifies which actual date is contained here.
 */
export class FRBRdate extends AbstractNode {
  abbreviation = '';

  nodeName = 'FRBRdate';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new DateGroup()).items,
    ...(new Name()).items,
  ];
}