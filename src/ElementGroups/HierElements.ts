import { AttributeGroupItem } from '../Interfaces/AttributeGroupItem';
import { HasChildrenMap } from '../Interfaces/HasChildrenMap';
import { NodeRules } from '../Interfaces/NodeRules';
import { ANhier } from './ANhier';

/**
 * The group hierElements lists all the elements that are hierarchical
 */
export class HierElements implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    hierElsChoice: {
      choice: true,
      minOccur: 1, maxOccur: 1,
      options: {
        anHierGroup: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new ANhier()).CHILDREN_MAP,
          }
        },
        hcontainer: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
