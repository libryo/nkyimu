import { BaseHierarchy } from "./BaseHierarchy";
import { HierElements } from "../Groups/HierElements";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The complex type hierarchy is used by most or all the hierarchical
 * elements of act-like documents.
 */
export class Hierarchy extends BaseHierarchy {

  readonly CHILDREN_MAP: NodeRules = {
    ...(new BaseHierarchy()).CHILDREN_MAP,
    choice: {
      maxOccur: 1,
      options: {
        sequence: {
          options: {
            intro: { minOccur: 1, options: {} },
            choice: {
              options: {
                componentRef: { minOccur: 1, options: {} },
                ...(new HierElements()).CHILDREN_MAP,
                crossHeading: { minOccur: 1, options: {} },
              }
            },
            wrapUp: { minOccur: 1, options: {} },
          },
        },
        content: { maxOccur: 1, options: {} },
      }
    },
  }; 


  static getRegExp(): RegExp {
    const base = BaseHierarchy.getRegExp().source;
    const hierElements = HierElements.getRegExp().source;
    const choice = `((<componentRef>)|(${hierElements})|(<crossHeading>))`;
    const reg = `(((<intro>)?(${choice})*(<wrapUp>)?)|<content>)`;

    return new RegExp(base + reg);
  }
}
