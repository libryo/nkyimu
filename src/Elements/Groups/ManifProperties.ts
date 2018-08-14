import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group manifProperties lists the properties that are characteristics of the FRBR Manifestation level.
 */
export class ManifProperties implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    FRBRportion: { minOccur:0, maxOccur: 1, options: {} },
    FRBRformat: { minOccur:0, maxOccur: 1, options: {} },
  };

  readonly SEQUENCE: string[] = [
    'FRBRportion:?',
    'FRBRformat:?',
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
