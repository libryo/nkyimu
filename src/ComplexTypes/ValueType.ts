import { Corereq } from "../AttributeGroups/Corereq";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { Metaopt } from "./Metaopt";
import { Value } from "../AttributeGroups/Value";
import { Refers } from "../AttributeGroups/Refers";
import { ShowOpt } from "../AttributeGroups/ShowOpt";

const type = new Metaopt();
/**
 * The type valueType specifies a value attribute to FRBR elements.
 */
export class ValueType implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP,
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Value()).items,
    ...(new Refers()).items,
    ...(new ShowOpt()).items,
  ];
}
