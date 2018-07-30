import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";
import { NodeRules } from "../../Interfaces/NodeRules";

export class Components extends AbstractNode {
  abbreviation = '';

  nodeName = 'components';

  protected nodeRx: RegExp = new RegExp(/(<component>)+/);

  readonly CHILDREN_MAP: NodeRules = {
    component: { options: {} },
  };

  readonly SEQUENCE: string[] = [];
}