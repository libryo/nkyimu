import { AbstractNode } from "../../Abstract/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../ComplexTypes/Inline";

const type = new Inline();

/**
 * The element docIntroducer is an inline element within
 * preface to identify the string used by the document
 * detailing the individual introducing of the document.
 */
export class DocIntroducer extends AbstractNode {
  abbreviation = '';

  nodeName = 'docIntroducer';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
