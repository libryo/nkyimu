import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { CoreProperties } from '../../ComplexTypes/CoreProperties';
import { ExprProperties } from '../../ElementGroups/ExprProperties';

const type = new CoreProperties();
/**
 * The element FRBRExpression is the metadata container of identifying properties
 * related to the Expression level according to the FRBR hierarchy
 */
export class FRBRExpression extends AbstractNode {
  public abbreviation = 'frbrexpression';

  public readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP,
    sequence: {
      minOccur: 1,
      maxOccur: 1,
      options: {
        ...(new ExprProperties()).CHILDREN_MAP,
      },
    },
  };

  public readonly SEQUENCE: string[] = [
    ...type.SEQUENCE,
    ...(new ExprProperties()).SEQUENCE,
  ];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'FRBRExpression';
  }
}
