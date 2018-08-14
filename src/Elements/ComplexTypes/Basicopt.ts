import { Coreopt } from "../../AttributeGroups/Coreopt";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { BasicContainers } from "../Groups/BasicContainers";
import { BlockElements } from "../Groups/BlockElements";

/**
 * the complex type basicopt defines the content model and attributes
 * used by basic containers such as coverPage and conclusions.
 * Here the eId attribute is optional.
 */
export class Basicopt implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    bOpts: {
      choice: true,
      minOccur: 1,
      options: {
        bOptsBlkEls: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new BlockElements()).CHILDREN_MAP
          }
        },
        bOptsBscConts: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new BasicContainers()).CHILDREN_MAP,
          }
        },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Coreopt()).items
  ];
}
