import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import {
  EIdAttribute,
  ShowAsAttribute,
  HrefAttribute,
  ShortFormAttribute,
  GUIDAttribute,
  WIdAttribute
} from "../Attributes";

/**
 * The group TLCs is a list of types of Top Level classes of
 * the Akoma Ntoso ontology.
 */
export class TLCs implements HasChildrenMap {
  public readonly CHILDREN_MAP: NodeRules = {
    TLCChoices: {
      choice: true,
      maxOccur: 1,
      minOccur: 1,
      options: {
        TLCPerson: { minOccur: 1, maxOccur: 1, options: {} },
        TLCOrganization: { minOccur: 1, maxOccur: 1, options: {} },
        TLCConcept: { minOccur: 1, maxOccur: 1, options: {} },
        TLCObject: { minOccur: 1, maxOccur: 1, options: {} },
        TLCEvent: { minOccur: 1, maxOccur: 1, options: {} },
        TLCLocation: { minOccur: 1, maxOccur: 1, options: {} },
        TLCProcess: { minOccur: 1, maxOccur: 1, options: {} },
        TLCRole: { minOccur: 1, maxOccur: 1, options: {} },
        TLCTerm: { minOccur: 1, maxOccur: 1, options: {} },
        TLCReference: { minOccur: 1, maxOccur: 1, options: {} }
      }
    }
  };

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [];
}
