import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { CoreProperties } from "../ComplexTypes/CoreProperties";
import { ExprProperties } from "../Groups/ExprProperties";

const type = new CoreProperties();
/**
 * The element FRBRExpression is the metadata container of identifying properties
 * related to the Expression level according to the FRBR hierarchy
 */
export class FRBRExpression extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'FRBRExpression'; }

  readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP,
    sequence: {
      minOccur: 1,
      maxOccur: 1,
      options: {
        ...(new ExprProperties()).CHILDREN_MAP,
      }
    }
  };

  readonly SEQUENCE: string[] = [
    ...type.SEQUENCE,
    ...(new ExprProperties()).SEQUENCE
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}