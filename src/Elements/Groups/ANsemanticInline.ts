import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group ANsemanticInline lists additional elements that are
 * inline, and are specific to the Akoma Ntoso vocabulary
 */
export class ANsemanticInline implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      minOccur: 1,
      options: {
        date: { maxOccur: 1, options: {} },
        time: { maxOccur: 1, options: {} },
        person: { maxOccur: 1, options: {} },
        organization: { maxOccur: 1, options: {} },
        concept: { maxOccur: 1, options: {} },
        object: { maxOccur: 1, options: {} },
        event: { maxOccur: 1, options: {} },
        location: { maxOccur: 1, options: {} },
        process: { maxOccur: 1, options: {} },
        role: { maxOccur: 1, options: {} },
        term: { maxOccur: 1, options: {} },
        quantity: { maxOccur: 1, options: {} },
        def: { maxOccur: 1, options: {} },
        entity: { maxOccur: 1, options: {} },
      },
    },
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
