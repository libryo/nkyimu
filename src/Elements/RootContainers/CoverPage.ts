import { AbstractNode } from "../../Abstract/AbstractNode";
import { Basicopt } from "../ComplexTypes/Basicopt";
import { NodeRules } from "../../Interfaces/NodeRules";

/**
 * The element coverPage is used as a container of the text
 * that acts as a cover page
 */
export class CoverPage extends AbstractNode {
  abbreviation = '';

  nodeName = 'coverPage';

  protected nodeRx: RegExp = Basicopt.getRegExp();

  readonly CHILDREN_MAP: NodeRules = (new Basicopt()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

}