import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { ChoiceAttribute } from "../Attributes/ChoiceAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { Agent } from "./Agent";
import { Role } from "./Role";

/**
 * The attributes in voteAtts are used in votes to identify agents and choices in votes.
 * In particular, attribute 'by' identifies the voter, optional attribute 'as' identifies
 * the role under which the voter is acting, optional attribute 'choice' specifies the
 * vote that was casted.
 */
export class VoteAtts extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    ...(new Agent()).items,
    ...(new Role()).items,
    { attribute: ChoiceAttribute, required: false },
  ];
}
