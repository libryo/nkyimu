import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group ANheaderInline lists the elements that are inline, are
 * specific to the Akoma Ntoso vocabulary, and should only be used
 * within the header element
 */
export class ANheaderInline implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    anHeadInChoice: {
      maxOccur: 1,
      minOccur: 1,
      choice: true,
      options: {
        courtType: { minOccur: 1, maxOccur: 1, options: {} },
        neutralCitation: { minOccur: 1, maxOccur: 1, options: {} },
        party: { minOccur: 1, maxOccur: 1, options: {} },
        judge: { minOccur: 1, maxOccur: 1, options: {} },
        lawyer: { minOccur: 1, maxOccur: 1, options: {} },
        signature: { minOccur: 1, maxOccur: 1, options: {} },
        argument: { minOccur: 1, maxOccur: 1, options: {} },
      },
    },
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
