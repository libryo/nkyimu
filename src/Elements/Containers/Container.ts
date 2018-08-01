import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ContainerType } from "../ComplexTypes/ContainerType";

/**
 * The element container is a generic element for a container.
 */
export class Container extends AbstractNode {
  abbreviation = 'co';

  nodeName = 'container';

  readonly CHILDREN_MAP: NodeRules = (new ContainerType()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
