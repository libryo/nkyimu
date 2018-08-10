import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ContainerType } from "../ComplexTypes/ContainerType";

const type = new ContainerType();

/**
 * The element container is a generic element for a container.
 */
export class Container extends AbstractNode {
  abbreviation = 'co';

  nodeName = 'container';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
