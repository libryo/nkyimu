import { Corereq } from "../AttributeGroups/Corereq";
import { Name } from "../AttributeGroups/Name";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { BlockElements } from "../ElementGroups/BlockElements";

/**
 * The complex type containerType is the content model for the generic
 * element for a container. It can be placed in a container instead of
 * any of the other containers. The attribute name is required and gives
 * a name to the element.
 */
export class ContainerType implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    conTypes: {
      minOccur: 1,
      options: {
        conTypesGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new BlockElements()).CHILDREN_MAP
          }
        },
        container: { minOccur: 1, maxOccur: 1, options: {} }
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items,
    ...(new Name()).items,
  ];
}
