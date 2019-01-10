import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group ANsemanticInline lists additional elements that are
 * inline, and are specific to the Akoma Ntoso vocabulary
 */
export class ANsemanticInline implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    anSemInlineChoice: {
      choice: true,
      maxOccur: 1,
      minOccur: 1,
      options: {
        date: { minOccur: 1, maxOccur: 1, options: {} },
        time: { minOccur: 1, maxOccur: 1, options: {} },
        person: { minOccur: 1, maxOccur: 1, options: {} },
        organization: { minOccur: 1, maxOccur: 1, options: {} },
        concept: { minOccur: 1, maxOccur: 1, options: {} },
        object: { minOccur: 1, maxOccur: 1, options: {} },
        event: { minOccur: 1, maxOccur: 1, options: {} },
        location: { minOccur: 1, maxOccur: 1, options: {} },
        process: { minOccur: 1, maxOccur: 1, options: {} },
        role: { minOccur: 1, maxOccur: 1, options: {} },
        term: { minOccur: 1, maxOccur: 1, options: {} },
        quantity: { minOccur: 1, maxOccur: 1, options: {} },
        def: { minOccur: 1, maxOccur: 1, options: {} },
        entity: { minOccur: 1, maxOccur: 1, options: {} },
      },
    },
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
