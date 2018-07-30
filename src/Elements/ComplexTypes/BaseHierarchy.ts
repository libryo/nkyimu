import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The complex type basehierarchy is not used by any element, but is
 * derived by other types to contain the basic structure of hierarchical
 * elements
 */
export class BaseHierarchy implements HasChildrenMap {
  
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      options: {
        num: { options: {} },
        heading: { options: {} },
        subheading: { options: {} },
      }
    }
  }; 

  static getRegExp():RegExp {
    return new RegExp(/((<num>)?(<heading>)?(<subheading>)?)*/);
  }
}
