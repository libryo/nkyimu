import { AbstractNode } from '../../Abstracts/AbstractNode';
import { Duration, Interval, Refersreq } from '../../AttributeGroups';
import { Metaopt } from '../../ComplexTypes';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';

const type = new Metaopt();

/**
 * The element timeInterval contains all the data needed to identify a specific
 * time interval. It is built either with two dates or with a date and a duration
 * (exactly two of the 'start', 'end' and 'duration' attributes can be specified).
 * Values of the 'start' and 'end' attributes are NOT dates, but references to
 * event elements in the corresponding metadata section. The refers attribute is a
 * reference to a temporal concept belonging to the Akoma Ntoso ontology and
 * specified in the references section
 */
export class TimeInterval extends AbstractNode {
  public abbreviation = 'timeinterval';

  public readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Interval()).items,
    ...(new Duration()).items,
    ...(new Refersreq()).items,
  ];


  public getNodeName(): string {
    return 'timeInterval';
  }
}
