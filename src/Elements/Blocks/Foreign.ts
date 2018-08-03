import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { AnyOtherType } from "../ComplexTypes/AnyOtherType";

/**
 * the element foreign is a generic container for elements not belonging
 * to the Akoma Ntoso namespace (e.g., mathematical formulas). It is a
 * block element and thus can be placed in a container.
 */
export class Foreign extends AbstractNode {
  abbreviation = '';

  nodeName = 'foreign';

  readonly CHILDREN_MAP: NodeRules = (new AnyOtherType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
