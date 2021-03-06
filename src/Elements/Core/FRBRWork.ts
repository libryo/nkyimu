import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { CoreProperties } from '../../ComplexTypes/CoreProperties';
import { WorkProperties } from '../../ElementGroups/WorkProperties';

const type = new CoreProperties();
/**
 * The element FRBRWork is the metadata container of identifying
 * properties related to the Work level according to the FRBR
 * hierarchy
 */
export class FRBRWork extends AbstractNode {
  public abbreviation = 'frbrwork';

  public readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP,
    sequence: {
      minOccur: 1,
      maxOccur: 1,
      options: {
        ...(new WorkProperties()).CHILDREN_MAP,
      },
    },
  };

  public readonly SEQUENCE: string[] = [
    ...type.SEQUENCE,
    ...(new WorkProperties()).SEQUENCE,
  ];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];

  public getNodeName(): string {
    return 'FRBRWork';
  }
}
