import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { Metaopt } from "./Metaopt";
import { Booleanvalue } from "../AttributeGroups";

const type = new Metaopt();
/**
 * The type booleanValueType specifies a boolean value attribute to FRBR elements.
 */
export class BooleanValueType implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Booleanvalue()).items,
  ];
}
