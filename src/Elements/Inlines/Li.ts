import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { InlineCM } from '../../ElementGroups/InlineCM';
import { Optvalue, Coreopt } from '../../AttributeGroups';

/**
 * The element li is an HTML element and is used in Akoma Ntoso as in HTML,
 * for the generic list item (not a pattern)
 */
export class Li extends AbstractNode {
  public abbreviation = 'li';

  public readonly CHILDREN_MAP: NodeRules = {
    liChoice: {
      minOccur: 0,
      choice: true,
      options: {
        liChoiceGroup: {
          minOccur: 0,
          options: {
            ...(new InlineCM()).CHILDREN_MAP,
          },
        },
        ul: { minOccur: 0, options: {} },
        ol: { minOccur: 0, options: {} },
        p: { minOccur: 0, options: {} },
      },
    },
    '': { minOccur: 0, options: {} },
  };

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...(new Optvalue()).items,
    ...(new Coreopt()).items,
  ];

  public getNodeName(): string {
    return 'li';
  }
}
