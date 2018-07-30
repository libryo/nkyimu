import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";

export class Attachments extends AbstractNode {
  abbreviation = '';

  nodeName = 'attachments';

  protected nodeRx: RegExp = new RegExp(/(<attachment>)+/);

  readonly CHILDREN_MAP: NodeRules = {
    attachment: { minOccur: 1, options: {} },
  };

  readonly SEQUENCE: string[] = [];
}