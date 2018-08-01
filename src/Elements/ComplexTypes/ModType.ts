import { NodeRules } from "../../Interfaces/NodeRules";
import { InlineCM } from "../Groups/InlineCM";

/**
 * The complex type modType specifies the content that
 * is allowed within mod, mmod and rmod elements, i.e. it
 * adds quotedText and quotedStructure to the normal list
 * of inline elements. Attribute for is used to point
 * to the eId of the corresponding ref element.
 */
export class ModType {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      minOccur: 0,
      options: {
        ...(new InlineCM()).CHILDREN_MAP,
        quotedText: { minOccur: 1, options: {} },
        quotedStructure: { minOccur: 1, options: {} },
      }
    },
  };
}
