import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inline } from "../../ComplexTypes/Inline";

const type = new Inline();

/**
 * The element signature is an inline element within conclusions to
 * identify where the document defines one of the signatures
 */
export class Signature extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'signature'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}
