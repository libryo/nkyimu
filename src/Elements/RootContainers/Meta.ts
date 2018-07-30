import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";
import { NodeRules } from "../../Interfaces/NodeRules";

export class Meta extends AbstractNode {
  abbreviation = '';

  nodeName = 'meta';

  protected nodeRx: RegExp = new RegExp('<identification>(<publication>)?(<classification>)*(<lifecycle>)*(<workflow>)*(<analysis>)*(<temporalData>)*(<references>)*(<notes>)*(<proprietary>)*(<presentation>)*');

  readonly CHILDREN_MAP: NodeRules = {
    identification: { maxOccur: 1, minOccur: 1, options: {} },
    publication: { maxOccur: 1, options: {} },
    classification: { options: {} },
    lifecycle: { options: {} },
    workflow: { options: {} },
    analysis: { options: {} },
    temporalData: { options: {} },
    references: { options: {} },
    notes: { options: {} },
    proprietary: { options: {} },
    presentation: { options: {} },
  };

  readonly SEQUENCE: string[] = [
    'identification',
    'publication',
    'classification',
    'lifecycle',
    'workflow',
    'analysis',
    'temporalData',
    'references',
    'notes',
    'proprietary',
    'presentation',
  ];

}


