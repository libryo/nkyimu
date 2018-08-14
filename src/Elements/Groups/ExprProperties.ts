import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The group exprProperties lists the properties that are characteristics of the FRBR Expression level.
 */
export class ExprProperties implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    FRBRversionNumber: { minOccur:0, maxOccur: 1, options: {} },
    FRBRauthoritative: { minOccur:0, maxOccur: 1, options: {} },
    FRBRmasterExpression: { minOccur:0, maxOccur: 1, options: {} },
    FRBRlanguage: { minOccur:1, options: {} },
    FRBRtranslation: { minOccur:0, options: {} },
  };

  readonly SEQUENCE: string[] = [
    'FRBRversionNumber:?',
    'FRBRauthoritative:?',
    'FRBRmasterExpression:?',
    'FRBRlanguage',
    'FRBRtranslation:?',
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
