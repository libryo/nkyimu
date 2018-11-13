import { AbstractNode } from '../../Abstracts/AbstractNode';
import { AttributeGroupItem } from '../../Interfaces/AttributeGroupItem';
import { NodeRules } from '../../Interfaces/NodeRules';
import { Core, Idreq, Interval, Duration, Refersreq } from '../../AttributeGroups';
import { Metaopt } from '../../ComplexTypes';

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
  abbreviation = 'timeinterval';

  getNodeName(): string {
    return 'timeInterval';
  }

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Interval()).items,
    ...(new Duration()).items,
    ...(new Refersreq()).items,
  ];
}
