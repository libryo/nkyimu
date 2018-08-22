import { AbstractSimpleType } from "../Abstracts/AbstractSimpleType";

/**
 * These values are references to existing agents (i.e., TLCPerson or TLCOrganization)
 * only, i.e., given an existing eId of an agent of the form XYZ, the value is
 * necessarily #XYZ
 */
export class AgentRef extends AbstractSimpleType {
  /**
   * The restricted values that the type accepts.
   */
  readonly restriction: RegExp = /^\S*$/;

  /**
   * The error message to throw.
   */
  readonly errorMessage: string = 'agentRef accepts only valid eIds in the form #abc';
}