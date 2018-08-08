import { AbstractAttributeGroup } from "../Abstract/AbstractAttributeGroup";
import { EndTimeAttribute } from "../Attributes/EndTimeAttribute";
import { StartTimeAttribute } from "../Attributes/StartTimeAttribute";
import { ToAttribute } from "../Attributes/ToAttribute";
import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { Agent } from "./Agent";
import { Role } from "./Role";

/**
 * The attributes in speechAtts are used in speeches to identify agents and roles of speeches.
 * In particular, attribute 'by' identifies the speaker, optional attribute 'as' identifies
 * the role under which the speaker is speaking, optional attribute startTime specifies the
 * absolute date and time where the individual speech item started, optional attribute endTime
 * specifies the absolute date and time where the individual speech item ended, and  optional
 * attribute to identifies the addressee of the speech. All of them are references to person or
 * organization elements in the references section
 */
export class SpeechAtts extends AbstractAttributeGroup {

  /**
   * The items contained in the group.
   */
  readonly items: AttributeGroupItem[] = [
    ...(new Agent()).items,
    ...(new Role()).items,
    { attribute: StartTimeAttribute, required: false },
    { attribute: EndTimeAttribute, required: false },
    { attribute: ToAttribute, required: false },
  ];
}
