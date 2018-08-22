import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Metaopt } from "../../ComplexTypes/Metaopt";
import { Link } from "../../AttributeGroups/Link";
import { Role } from "../../AttributeGroups/Role";

const type = new Metaopt();

/**
 * The element FRBRauthor is the metadata property containing a relevant author
 * of the document in the respective level of the FRBR hierarchy. Attribute as
 * specifies the role of the author.
 */
export class FRBRauthor extends AbstractNode {
  abbreviation = '';

  getNodeName(): string { return 'FRBRauthor'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Link()).items,
    ...(new Role()).items,
  ];
}