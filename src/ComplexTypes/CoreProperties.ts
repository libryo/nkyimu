import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The complexType coreProperties lists the identifying properties available at
 * any of the FRBR hierarchy levels.
 */
export class CoreProperties implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    FRBRthis: { minOccur: 1, maxOccur: 1, options: {} },
    FRBRuri: { minOccur: 1, options: {} },
    FRBRalias: { minOccur: 0, options: {} },
    FRBRdate: { minOccur: 1, options: {} },
    FRBRauthor: { minOccur: 1, options: {} },
    componentInfo: { minOccur: 0, options: {} },
    preservation: { minOccur: 0, options: {} },
  };

  readonly SEQUENCE: string[] = [
    'FRBRthis',
    'FRBRuri',
    'FRBRalias:?',
    'FRBRdate',
    'FRBRauthor',
    'componentInfo:?',
    'preservation:?',
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [];
}
