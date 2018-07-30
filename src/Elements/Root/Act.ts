import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeType } from "../../enums";
import { HierarchicalStructure } from "../ComplexTypes/HierarchicalStructure";
import { NodeRules } from "../../Interfaces/NodeRules";

const type = new HierarchicalStructure();

/**
 * Element act is used for describing the structure and content of an act
 */
export class Act extends AbstractNode {
  abbreviation = '';

  nodeName = 'act';
  
  readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP
  };
  
  readonly SEQUENCE: string[] = [
    ...type.SEQUENCE,
  ];

  protected nodeRx: RegExp = HierarchicalStructure.getRegExp();
}
