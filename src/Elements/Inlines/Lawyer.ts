import { AbstractNode } from "../../Abstract/AbstractNode";
import { LawyerAtts } from "../../AttributeGroups/LawyerAtts";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

const type = new Inlinereqreq();

/**
 * The element lawyer is an inline element within judgments to identify where
 * the document defines one of the lawyers, his/her role, which party it
 * represents, and the other lawyer, if any, this lawyer received the power
 * delegation of power in some role
 */
export class Lawyer extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'lawyer'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new LawyerAtts()).items,
  ];
}
