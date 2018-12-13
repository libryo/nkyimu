import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Metaopt } from "../../ComplexTypes";
import { Link, FromLanguage, Agent, Authoritative, Pivot } from "../../AttributeGroups";

const type = new Metaopt();

/**
 * The element FRBRtranslation is the metadata property specifying the source
 * of which this expression is a translation of.
 */
export class FRBRtranslation extends AbstractNode {
  public abbreviation = 'frbrtranslation';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Link()).items,
    ...(new FromLanguage()).items,
    ...(new Authoritative()).items,
    ...(new Pivot()).items,
    ...(new Agent()).items,
  ];

  public getNodeName(): string {
    return 'FRBRtranslation';
  }
}