import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";
import { BodyType } from "../ComplexTypes/BodyType";
import { NodeRules } from "../../Interfaces/NodeRules";

const type = new BodyType();

/**
 * The element body is the container of the main hierarchy of a hierarchical
 * document (e.g, an act or a bill)
 */
export class Body extends AbstractNode {
  abbreviation = '';

  nodeName = 'body';

  protected nodeRx: RegExp = BodyType.getRegExp();

  readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP
  };

  readonly SEQUENCE: string[] = [
    ...type.SEQUENCE
  ];

}
