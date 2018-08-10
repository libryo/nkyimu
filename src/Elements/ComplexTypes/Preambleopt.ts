import { Coreopt } from "../../AttributeGroups/Coreopt";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { BlockElements } from "../Groups/BlockElements";
import { PreambleContainers } from "../Groups/PreambleContainers";

/**
 * The complex type preambleopt defines the content model and
 * attributes used by preambles. Here the eId attribute is optional.
 */
export class Preambleopt implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        ...(new BlockElements()).CHILDREN_MAP,
        ...(new PreambleContainers()).CHILDREN_MAP,
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Coreopt()).items,
  ];
}