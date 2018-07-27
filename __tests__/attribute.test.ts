import { AgentRefAttribute } from '../src/Attributes/AgentRefAttribute';
import { ConceptRefAttribute } from '../src/Attributes/ConceptRefAttribute';
import { DateAttribute } from '../src/Attributes/DateAttribute';
import { EIdAttribute } from '../src/Attributes/EIdAttribute';
import { EIdRefAttribute } from '../src/Attributes/EIdRefAttribute';
import { EventRefRefAttribute } from '../src/Attributes/EventRefRefAttribute';
import { EventTypeAttribute } from '../src/Attributes/EventTypeAttribute';
import { GUIDAttribute } from '../src/Attributes/GUIDAttribute';
import { LanguageAttribute } from '../src/Attributes/LanguageAttribute';
import { ManifestationURIAttribute } from '../src/Attributes/ManifestationURIAttribute';
import { PlacementTypeAttribute } from '../src/Attributes/PlacementTypeAttribute';
import { PosTypeAttribute } from '../src/Attributes/PosTypeAttribute';
import { ReferenceRefAttribute } from '../src/Attributes/ReferenceRefAttribute';
import { RefersToAttribute } from '../src/Attributes/RefersToAttribute';
import { RestrictionTypeAttribute } from '../src/Attributes/RestrictionTypeAttribute';
import { RoleRefAttribute } from '../src/Attributes/RoleRefAttribute';
import { StatusTypeAttribute } from '../src/Attributes/StatusTypeAttribute';
import { TemporalGroupRefAttribute } from '../src/Attributes/TemporalGroupRefAttribute';
import { TimeAttribute } from '../src/Attributes/TimeAttribute';
import { TimeTypeAttribute } from '../src/Attributes/TimeTypeAttribute';
import { VersionTypeAttribute } from '../src/Attributes/VersionTypeAttribute';
import { WIdAttribute } from '../src/Attributes/WIdAttribute';
import { WIdRefAttribute } from '../src/Attributes/WIdRefAttribute';
import { XMLDateNamespaceAttribute } from '../src/Attributes/XMLDateNamespaceAttribute';
import { XMLNamespaceAttribute } from '../src/Attributes/XMLNamespaceAttribute';
import { XMLXSINamespaceAttribute } from '../src/Attributes/XMLXSINamespaceAttribute';

/**
 * Attributes test
 */
describe("Attributes test", () => {
  it("validates the AgentRefAttribute", () => {
    const attr = new AgentRefAttribute('#no_spaces');

    expect(attr.getName()).toBe('agentRef');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new AgentRefAttribute('#lots of spaces');
    }).toThrow('The agentRef attribute should not contain white spaces');
  });

  it("validates the ConceptRefAttribute", () => {
    const attr = new ConceptRefAttribute('#no_spaces');

    expect(attr.getName()).toBe('conceptRef');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new ConceptRefAttribute('#lots of spaces');
    }).toThrow('The conceptRef attribute should not contain white spaces');
  });

  it("validates the DateAttribute", () => {
    // Needs to be implemented
    const attr = new DateAttribute('2018-01-01');

    expect(attr.getName()).toBe('date');
    expect(attr.getValue()).toBe('2018-01-01');

    // expect(() => {
    //   const fakeAttr = new DateAttribute('fake date');
    // }).toThrow('The date attribute expects a valid date');
  });

  it("validates the EIdAttribute", () => {
    const attr = new EIdAttribute('#no_spaces');

    expect(attr.getName()).toBe('eId');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new EIdAttribute('#lots of spaces');
    }).toThrow('The eId attribute should not contain white spaces');
  });

  it("validates the EIdRefAttribute", () => {
    const attr = new EIdRefAttribute('#no_spaces');

    expect(attr.getName()).toBe('eIdRef');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new EIdRefAttribute('#lots of spaces');
    }).toThrow('The eIdRef attribute should not contain white spaces');
  });

  it("validates the EventRefRefAttribute", () => {
    const attr = new EventRefRefAttribute('#no_spaces');

    expect(attr.getName()).toBe('eventRefRef');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new EventRefRefAttribute('#lots of spaces');
    }).toThrow('The eventRefRef attribute should not contain white spaces');
  });

  it("validates the EventTypeAttribute", () => {
    let attr = new EventTypeAttribute('generation');
    expect(attr.getName()).toBe('eventType');
    expect(attr.getValue()).toBe('generation');

    attr = new EventTypeAttribute('amendment');
    expect(attr.getValue()).toBe('amendment');

    attr = new EventTypeAttribute('repeal');
    expect(attr.getValue()).toBe('repeal');

    expect(() => {
      const fakeAttr = new EventTypeAttribute('invalid type');
    }).toThrow('The eventType attribute should have a value of either generation, amendment or repeal');
  });

  it("validates the GUIDAttribute", () => {
    const attr = new GUIDAttribute('#no_spaces');

    expect(attr.getName()).toBe('GUID');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new GUIDAttribute('#lots of spaces');
    }).toThrow('The GUID attribute should not contain white spaces');
  });

  it("validates the LanguageAttribute", () => {
    let attr = new LanguageAttribute('en');
    expect(attr.getName()).toBe('language');
    expect(attr.getValue()).toBe('en');

    attr = new LanguageAttribute('en-US');
    expect(attr.getValue()).toBe('en-US');

    attr = new LanguageAttribute('mr-IN');
    expect(attr.getValue()).toBe('mr-IN');

    expect(() => {
      const fakeAttr = new LanguageAttribute('english');
    }).toThrow('The language attribute expects a valid RFC 4646 language e.g. en, en-US, en-GB');
  });

  it("validates the ManifestationURIAttribute", () => {
    const attr = new ManifestationURIAttribute('#no_spaces');

    expect(attr.getName()).toBe('manifestationURI');
    expect(attr.getValue()).toBe('#no_spaces');
  });

  it("validates the PlacementTypeAttribute", () => {
    let attr = new PlacementTypeAttribute('side');
    expect(attr.getName()).toBe('placementType');
    expect(attr.getValue()).toBe('side');

    attr = new PlacementTypeAttribute('left');
    expect(attr.getValue()).toBe('left');

    attr = new PlacementTypeAttribute('right');
    expect(attr.getValue()).toBe('right');

    attr = new PlacementTypeAttribute('bottom');
    expect(attr.getValue()).toBe('bottom');

    attr = new PlacementTypeAttribute('inline');
    expect(attr.getValue()).toBe('inline');

    expect(() => {
      const fakeAttr = new PlacementTypeAttribute('top');
    }).toThrow('The placementType attribute can only have a value of side, left, right, bottom or inline');
  });

  it("validates the PosTypeAttribute", () => {
    let attr = new PosTypeAttribute('start');
    expect(attr.getName()).toBe('posType');
    expect(attr.getValue()).toBe('start');

    attr = new PosTypeAttribute('before');
    expect(attr.getValue()).toBe('before');

    attr = new PosTypeAttribute('inside');
    expect(attr.getValue()).toBe('inside');

    attr = new PosTypeAttribute('after');
    expect(attr.getValue()).toBe('after');

    attr = new PosTypeAttribute('end');
    expect(attr.getValue()).toBe('end');

    attr = new PosTypeAttribute('unspecified');
    expect(attr.getValue()).toBe('unspecified');

    expect(() => {
      const fakeAttr = new PosTypeAttribute('first');
    }).toThrow('The posType attribute can only have a value of start, before, inside, after, end or unspecified');
  });

  it("validates the ReferenceRefAttribute", () => {
    const attr = new ReferenceRefAttribute('#no_spaces');

    expect(attr.getName()).toBe('referenceRef');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new ReferenceRefAttribute('#lots of spaces');
    }).toThrow('The referenceRef attribute should not contain white spaces');
  });

  it("validates the RefersToAttribute", () => {
    const attr = new RefersToAttribute('#no_spaces');

    expect(attr.getName()).toBe('refersTo');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new RefersToAttribute('#singe space');
    }).toThrow('The refersTo attribute should not contain white spaces');
  });

  it("validates the RestrictionTypeAttribute", () => {
    const attr = new RestrictionTypeAttribute('jurisdiction');
    expect(attr.getName()).toBe('restrictionType');
    expect(attr.getValue()).toBe('jurisdiction');

    expect(() => {
      const fakeAttr = new RestrictionTypeAttribute('article');
    }).toThrow('The restrictionType attribute can only have a value of jurisdiction');
  });

  it("validates the RoleRefAttribute", () => {
    const attr = new RoleRefAttribute('#no_spaces');

    expect(attr.getName()).toBe('roleRef');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new RoleRefAttribute('#singe space');
    }).toThrow('The roleRef attribute should not contain white spaces');
  });

  it("validates the StatusTypeAttribute", () => {
    let attr = new StatusTypeAttribute('removed');
    expect(attr.getName()).toBe('statusType');
    expect(attr.getValue()).toBe('removed');

    attr = new StatusTypeAttribute('temporarilyRemoved');
    expect(attr.getValue()).toBe('temporarilyRemoved');

    attr = new StatusTypeAttribute('translated');
    expect(attr.getValue()).toBe('translated');

    attr = new StatusTypeAttribute('editorial');
    expect(attr.getValue()).toBe('editorial');

    attr = new StatusTypeAttribute('edited');
    expect(attr.getValue()).toBe('edited');

    attr = new StatusTypeAttribute('verbatim');
    expect(attr.getValue()).toBe('verbatim');

    attr = new StatusTypeAttribute('incomplete');
    expect(attr.getValue()).toBe('incomplete');

    attr = new StatusTypeAttribute('unknown');
    expect(attr.getValue()).toBe('unknown');

    attr = new StatusTypeAttribute('undefined');
    expect(attr.getValue()).toBe('undefined');

    attr = new StatusTypeAttribute('ignored');
    expect(attr.getValue()).toBe('ignored');

    expect(() => {
      const fakeAttr = new StatusTypeAttribute('deleted');
    }).toThrow('The statusType attribute can only have a value of removed, temporarilyRemoved, translated, editorial, edited, verbatim, incomplete, unknown, undefined or ignored');
  });

  it("validates the TemporalGroupRefAttribute", () => {
    const attr = new TemporalGroupRefAttribute('#no_spaces');

    expect(attr.getName()).toBe('temporalGroupRef');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new TemporalGroupRefAttribute('#singe space');
    }).toThrow('The temporalGroupRef attribute should not contain white spaces');
  });

  it("validates the TimeAttribute", () => {
    let attr = new TimeAttribute('04:00');

    expect(attr.getName()).toBe('time');
    expect(attr.getValue()).toBe('04:00');

    attr = new TimeAttribute('4:00');
    expect(attr.getValue()).toBe('4:00');

    attr = new TimeAttribute('04:00 am');
    expect(attr.getValue()).toBe('04:00 am');

    attr = new TimeAttribute('04:00 PM');
    expect(attr.getValue()).toBe('04:00 PM');

    expect(() =>  new TimeAttribute('23:00 am')).toThrow('The time attribute expects a valid time');
    expect(() =>  new TimeAttribute('13:00 pm')).toThrow('The time attribute expects a valid time');
    expect(() =>  new TimeAttribute('24:00')).toThrow('The time attribute expects a valid time');
    expect(() =>  new TimeAttribute('10:70')).toThrow('The time attribute expects a valid time');
  });

  it("validates the TimeTypeAttribute", () => {
    let attr = new TimeTypeAttribute('startEvent');
    expect(attr.getName()).toBe('timeType');
    expect(attr.getValue()).toBe('startEvent');

    attr = new TimeTypeAttribute('endEvent');
    expect(attr.getValue()).toBe('endEvent');

    expect(() => {
      const fakeAttr = new TimeTypeAttribute('birthday');
    }).toThrow('The timeType attribute should have a value of either be startEvent or endEvent');
  });

  it("validates the VersionTypeAttribute", () => {
    let attr = new VersionTypeAttribute('originalVersion');
    expect(attr.getName()).toBe('versionType');
    expect(attr.getValue()).toBe('originalVersion');

    attr = new VersionTypeAttribute('singleVersion');
    expect(attr.getValue()).toBe('singleVersion');

    attr = new VersionTypeAttribute('multipleVersions');
    expect(attr.getValue()).toBe('multipleVersions');

    expect(() => {
      const fakeAttr = new VersionTypeAttribute('version2');
    }).toThrow('The versionType attribute can only have a value of originalVersion, singleVersion or multipleVersions');
  });

  it("validates the WIdAttribute", () => {
    const attr = new WIdAttribute('#no_spaces');

    expect(attr.getName()).toBe('wId');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new WIdAttribute('#singe space');
    }).toThrow('The wId attribute should not contain white spaces');
  });

  it("validates the WIdRefAttribute", () => {
    const attr = new WIdRefAttribute('#no_spaces');

    expect(attr.getName()).toBe('wIdRef');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new WIdRefAttribute('#singe space');
    }).toThrow('The wIdRef attribute should not contain white spaces');
  });

  it("validates the XMLDateNamespaceAttribute", () => {
    const attr = new XMLDateNamespaceAttribute('http://something.com');

    expect(attr.getName()).toBe('xmlns:date');
    expect(attr.getValue()).toBe('http://something.com');

    expect(() => {
      const fakeAttr = new XMLDateNamespaceAttribute('singe space');
    }).toThrow('The xmlns:date attribute should not contain white spaces');
  });

  it("validates the XMLNamespaceAttribute", () => {
    const attr = new XMLNamespaceAttribute('http://something.com');

    expect(attr.getName()).toBe('xmlns');
    expect(attr.getValue()).toBe('http://something.com');

    expect(() => {
      const fakeAttr = new XMLNamespaceAttribute('singe space');
    }).toThrow('The xmlns attribute should not contain white spaces');
  });

  it("validates the XMLXSINamespaceAttribute", () => {
    const attr = new XMLXSINamespaceAttribute('http://something.com');

    expect(attr.getName()).toBe('xmlns:xsi');
    expect(attr.getValue()).toBe('http://something.com');

    expect(() => {
      const fakeAttr = new XMLXSINamespaceAttribute('singe space');
    }).toThrow('The xmlns:xsi attribute should not contain white spaces');
  });
});