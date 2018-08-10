import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Blocksreq } from "../ComplexTypes/Blocksreq";

const type = new Blocksreq();

/**
 * the element content is the final container in a hierarchy, and is
 * where the blocks of text of the content of the structure are finally
 * specified
 */
export class Content extends AbstractNode {
  abbreviation = '';

  nodeName = 'content';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
