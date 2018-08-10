import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { HasChildrenMap } from '../../Interfaces/HasChildrenMap';
import { NodeRules } from '../../Interfaces/NodeRules';
import { ANhier } from './ANhier';

/**
 * The group hierElements lists all the elements that are hierarchical
 */
export class HierElements implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        ...(new ANhier()).CHILDREN_MAP,
        hcontainer: { maxOccur: 1, options: {} },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
