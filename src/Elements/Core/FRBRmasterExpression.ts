import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { LinkType } from "../../ComplexTypes";

const type = new LinkType();
/**
 * The element FRBRmasterExpression is the metadata property identifying
 * the master expression, i.e., the expression whose ids are used as
 * permanent ids in the wId attributes. An expression without the
 * FRBRmasterExpression element is considered a master expression itself,
 * i.e., the first version, or the most important version, of a document
 * expressed in the only language, or in the most important language.
 * Any other situation (subsequent versions, or language variants, or
 * content variants) must have the FRBRmasterExpression element pointing
 * to the URI of the master expression. If the FRBRmasterEpression is specified,
 * but without a href pointing to the masterExpression, it is assumed that NO
 * master expression exist in reality, but an UR-Expression exist, whose ids are
 * used in this expression as wIds.
 */
export class FRBRmasterExpression extends AbstractNode {
  abbreviation = 'frbrmasterexpression';

  getNodeName(): string { return 'FRBRmasterExpression'; }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = type.ATTRIBUTE_GROUPS;
}