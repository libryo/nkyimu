import { AbstractNode } from "../../Abstract/AbstractNode";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Inlinereqreq } from "../ComplexTypes/Inlinereqreq";

/**
 * the element person is an inline element to identify a text
 * fragment introducing or referring to a person in the ontology.
 * Attribute as allows to specify a TLCrole the person is
 * holding in the context of the document's mention
 */
export class Person extends AbstractNode {
  abbreviation = '';

  nodeName = 'person';

  readonly CHILDREN_MAP: NodeRules = (new Inlinereqreq()).CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];
}
