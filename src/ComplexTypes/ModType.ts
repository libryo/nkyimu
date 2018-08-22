import { Corereq } from "../AttributeGroups/Corereq";
import { For } from "../AttributeGroups/For";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { InlineCM } from "../ElementGroups/InlineCM";

/**
 * The complex type modType specifies the content that
 * is allowed within mod, mmod and rmod elements, i.e. it
 * adds quotedText and quotedStructure to the normal list
 * of inline elements. Attribute for is used to point
 * to the eId of the corresponding ref element.
 */
export class ModType implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    modTypeChoice: {
      choice: true,
      minOccur: 0,
      options: {
        modTypeChoiceInCM: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new InlineCM()).CHILDREN_MAP,
          }
        },
        quotedText: { minOccur: 1, maxOccur: 1, options: {} },
        quotedStructure: { minOccur: 1, maxOccur: 1, options: {} },
      }
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Corereq()).items,
    ...(new For()).items,
  ];
}
