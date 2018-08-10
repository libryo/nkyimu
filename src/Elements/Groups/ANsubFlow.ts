import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group ANsubFlow lists the elements that are subFlows and are
 * specific to the Akoma Ntoso vocabulary
 */
export class ANsubFlow implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    authorialNote: { maxOccur: 1, options: {} },
  };


  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
