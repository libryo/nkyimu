import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { TLCs } from "../ElementGroups/TLCs";
import { DocRefs } from "../ElementGroups/DocRefs";
import { Source } from "../AttributeGroups";

/**
 * The complex type refItems is a list of types of references
 * used in the references section.
 */
export class RefItems implements HasChildrenMap {
  readonly CHILDREN_MAP: NodeRules = {
    refItemsChoices: {
      choice: true,
      minOccur: 1,
      options: {
        tlcsGroup: {
          choice: true,
          minOccur: 1,
          maxOccur: 1,
          options: { ...(new TLCs()).CHILDREN_MAP }
        },
        docrefGroup: {
          choice: true,
          minOccur: 1,
          maxOccur: 1,
          options: { ...(new DocRefs()).CHILDREN_MAP }
        }
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Source()).items
  ];
}
