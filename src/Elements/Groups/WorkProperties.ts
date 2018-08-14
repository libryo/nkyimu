import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group workProperties lists the properties that are characteristics of the FRBR Work level.
 */
export class WorkProperties implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    FRBRcountry: { minOccur:1, maxOccur: 1, options: {} },
    FRBRsubtype: { minOccur:0, maxOccur: 1, options: {} },
    FRBRnumber: { minOccur:0, options: {} },
    FRBRname: { minOccur:0, options: {} },
    FRBRprescriptive: { minOccur:0, maxOccur: 1, options: {} },
    FRBRauthoritative: { minOccur:0, maxOccur: 1, options: {} },
  };

  readonly SEQUENCE: string[] = [
    'FRBRcountry',
    'FRBRsubtype:?',
    'FRBRnumber:?',
    'FRBRname:?',
    'FRBRprescriptive:?',
    'FRBRauthoritative:?',
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
