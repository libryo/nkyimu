import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { ReferenceType } from "../../ComplexTypes/ReferenceType";
import { Type } from "../../AttributeGroups";

const type = new ReferenceType();
/**
 * The element attachmentOf is a metadata reference to
 * the Akoma Ntoso IRI of a document of which this
 * document is an attachment
 */
export class AttachmentOf extends AbstractNode {
  abbreviation = "attachmentof";

  getNodeName(): string {
    return "attachmentOf";
  }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Type()).items
  ];
}
