import { ANhier } from './ANhier';
import { NodeRules } from '../../Interfaces/NodeRules';
import { HasChildrenMap } from '../../Interfaces/HasChildrenMap';

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
  
  static getRegExp():RegExp {
    const base = ANhier.getRegExp().source;

    return new RegExp(`(${base}|<hcontainer>)`);
  }
}
