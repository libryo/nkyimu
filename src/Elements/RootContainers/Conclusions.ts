import { AbstractNode } from "../../Abstract/AbstractNode";
import { Basicopt } from "../ComplexTypes/Basicopt";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The element conclusion is used as a container of all concluding
 * material (e.g. dates, signatures, formulas, etc.)
 */
export class Conclusions extends AbstractNode {
  abbreviation = '';

  nodeName = 'conclusions';

  protected nodeRx: RegExp = Basicopt.getRegExp();

  readonly CHILDREN_MAP: NodeRules = (new Basicopt()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

}