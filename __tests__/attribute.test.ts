import { AlternativeToAttribute } from '../src/Attributes/AlternativeToAttribute';
import { AsAttribute } from '../src/Attributes/AsAttribute';
import { BorderAttribute } from '../src/Attributes/BorderAttribute';
import { ByAttribute } from '../src/Attributes/ByAttribute';
import { CellpaddingAttribute } from '../src/Attributes/CellpaddingAttribute';
import { CellspacingAttribute } from '../src/Attributes/CellspacingAttribute';
import { ChoiceAttribute } from '../src/Attributes/ChoiceAttribute';
import { ClassAttribute } from '../src/Attributes/ClassAttribute';
import { ContainsAttribute } from '../src/Attributes/ContainsAttribute';
import { DateAttribute } from '../src/Attributes/DateAttribute';
import { DictionaryAttribute } from '../src/Attributes/DictionaryAttribute';
import { DurationAttribute } from '../src/Attributes/DurationAttribute';
import { EIdAttribute } from '../src/Attributes/EIdAttribute';
import { EmpoweredByAttribute } from '../src/Attributes/EmpoweredByAttribute';
import { EndAttribute } from '../src/Attributes/EndAttribute';
import { EndTimeAttribute } from '../src/Attributes/EndTimeAttribute';
import { ForTypeAgentRefAttribute } from '../src/Attributes/ForTypeAgentRefAttribute';
import { FromAttribute } from '../src/Attributes/FromAttribute';
import { FromLanguageAttribute } from '../src/Attributes/FromLanguageAttribute';
import { FrozenAttribute } from '../src/Attributes/FrozenAttribute';
import { GUIDAttribute } from '../src/Attributes/GUIDAttribute';
import { HeightAttribute } from '../src/Attributes/HeightAttribute';
import { HrefAttribute } from '../src/Attributes/HrefAttribute';
import { LanguageAttribute } from '../src/Attributes/LanguageAttribute';
import { LevelAttribute } from '../src/Attributes/LevelAttribute';
import { NameAttribute } from '../src/Attributes/NameAttribute';
import { NumberAttribute } from '../src/Attributes/NumberAttribute';
import { OriginalTextAttribute } from '../src/Attributes/OriginalTextAttribute';
import { OriginatingExpressionAttribute } from '../src/Attributes/OriginatingExpressionAttribute';
import { PeriodAttribute } from '../src/Attributes/PeriodAttribute';
import { PosAttribute } from '../src/Attributes/PosAttribute';
import { RefersToAttribute } from '../src/Attributes/RefersToAttribute';
import { SourceAttribute } from '../src/Attributes/SourceAttribute';
import { StartAttribute } from '../src/Attributes/StartAttribute';
import { StartTimeAttribute } from '../src/Attributes/StartTimeAttribute';
import { StatusAttribute } from '../src/Attributes/StatusAttribute';
import { StyleAttribute } from '../src/Attributes/StyleAttribute';
import { TargetAttribute } from '../src/Attributes/TargetAttribute';
import { TimeAttribute } from '../src/Attributes/TimeAttribute';
import { TitleAttribute } from '../src/Attributes/TitleAttribute';
import { ToAttribute } from '../src/Attributes/ToAttribute';
import { TypeAttribute } from '../src/Attributes/TypeAttribute';
import { TypeEventTypeAttribute } from '../src/Attributes/TypeEventTypeAttribute';
import { TypeOpinionTypeAttribute } from '../src/Attributes/TypeOpinionTypeAttribute';
import { TypeRestrictionTypeAttribute } from '../src/Attributes/TypeRestrictionTypeAttribute';
import { TypeResultTypeAttribute } from '../src/Attributes/TypeResultTypeAttribute';
import { UpToAttribute } from '../src/Attributes/UpToAttribute';
import { ValueAttribute } from '../src/Attributes/ValueAttribute';
import { WIdAttribute } from '../src/Attributes/WIdAttribute';
import { XMLDateNamespaceAttribute } from '../src/Attributes/XMLDateNamespaceAttribute';
import { XMLIdNamespaceAttribute } from '../src/Attributes/XMLIdNamespaceAttribute';
import { XMLLangNamespaceAttribute } from '../src/Attributes/XMLLangNamespaceAttribute';
import { XMLNamespaceAttribute } from '../src/Attributes/XMLNamespaceAttribute';
import { XMLSpaceNamespaceAttribute } from '../src/Attributes/XMLSpaceNamespaceAttribute';
import { XMLXSINamespaceAttribute } from '../src/Attributes/XMLXSINamespaceAttribute';

/**
 * Attributes test
 */
describe("Attributes test", () => {
  it("validates the AlternativeToAttribute", () => {
    const attr = new AlternativeToAttribute('#no_spaces');

    expect(attr.getName()).toBe('alternativeTo');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new AlternativeToAttribute('#lots of spaces');
    }).toThrow('alternativeTo: eIdRef accepts only valid eIds in the form #abc');
  });

  it("validates the AsAttribute", () => {
    const attr = new AsAttribute('#no_spaces');

    expect(attr.getName()).toBe('as');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new AsAttribute('#lots of spaces');
    }).toThrow('as: roleRef accepts only valid eIds in the form #abc');
  });

  it("validates the BorderAttribute", () => {
    const attr = new BorderAttribute(20);

    expect(attr.getName()).toBe('border');
    expect(attr.getValue()).toBe(20);

    expect(() => {
      const fakeAttr = new BorderAttribute('20px');
    }).toThrow('border: number should only contain numeric characters.');
  });

  it("validates the ByAttribute", () => {
    const attr = new ByAttribute('#no_spaces');

    expect(attr.getName()).toBe('by');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new ByAttribute('#lots of spaces');
    }).toThrow('by: agentRef accepts only valid eIds in the form #abc');
  });

  it("validates the CellpaddingAttribute", () => {
    const attr = new CellpaddingAttribute('22');

    expect(attr.getName()).toBe('cellpadding');
    expect(attr.getValue()).toBe('22');

    expect(() => {
      const fakeAttr = new CellpaddingAttribute('not a number');
    }).toThrow('cellpadding: number should only contain numeric characters.');
  });

  it("validates the CellspacingAttribute", () => {
    const attr = new CellspacingAttribute('22');

    expect(attr.getName()).toBe('cellspacing');
    expect(attr.getValue()).toBe('22');

    expect(() => {
      const fakeAttr = new CellspacingAttribute('not a number');
    }).toThrow('cellspacing: number should only contain numeric characters.');
  });

  it("validates the ChoiceAttribute", () => {
    const attr = new ChoiceAttribute('#something');

    expect(attr.getName()).toBe('choice');
    expect(attr.getValue()).toBe('#something');

    expect(() => {
      const fakeAttr = new ChoiceAttribute('fake id');
    }).toThrow('choice: voteRef accepts only valid eIds in the form #abc');
  });

  it("validates the ClassAttribute", () => {
    const attr = new ClassAttribute('white');

    expect(attr.getName()).toBe('class');
    expect(attr.getValue()).toBe('white');
  });

  it("validates the ContainsAttribute", () => {
    let attr = new ContainsAttribute('originalVersion');
    expect(attr.getName()).toBe('contains');
    expect(attr.getValue()).toBe('originalVersion');

    attr = new ContainsAttribute('singleVersion');
    expect(attr.getValue()).toBe('singleVersion');

    attr = new ContainsAttribute('multipleVersions');
    expect(attr.getValue()).toBe('multipleVersions');

    expect(() => {
      const fakeAttr = new ContainsAttribute('version 2');
    }).toThrow('contains: versionType should be either originalVersion, singleVersion or multipleVersions');
  });

  it("validates the DateAttribute", () => {
    // implement this
    const attr = new DateAttribute('2017');

    expect(attr.getName()).toBe('date');
    expect(attr.getValue()).toBe('2017');
  });

  it("validates the DictionaryAttribute", () => {
    const attr = new DictionaryAttribute('#something');

    expect(attr.getName()).toBe('dictionary');
    expect(attr.getValue()).toBe('#something');

    expect(() => {
      const fakeAttr = new DictionaryAttribute('fake id');
    }).toThrow('dictionary: referenceRef accepts only valid eIds in the form #abc');
  });

  it("validates the DurationAttribute", () => {
    const attr = new DurationAttribute('#something');

    expect(attr.getName()).toBe('duration');
    expect(attr.getValue()).toBe('#something');
  });

  it("validates the EIdAttribute", () => {
    const attr = new EIdAttribute('#something');

    expect(attr.getName()).toBe('eId');
    expect(attr.getValue()).toBe('#something');

    expect(() => {
      const fakeAttr = new EIdAttribute('fake id');
    }).toThrow('eId: noWhiteSpace should not contain any white spaces.');
  });

  it("validates the EmpoweredByAttribute", () => {
    const attr = new EmpoweredByAttribute('#something');

    expect(attr.getName()).toBe('empoweredBy');
    expect(attr.getValue()).toBe('#something');

    expect(() => {
      const fakeAttr = new EmpoweredByAttribute('fake id');
    }).toThrow('empoweredBy: agentRef accepts only valid eIds in the form #abc');
  });

  it("validates the EndAttribute", () => {
    const attr = new EndAttribute('#something');

    expect(attr.getName()).toBe('end');
    expect(attr.getValue()).toBe('#something');

    expect(() => {
      const fakeAttr = new EndAttribute('fake id');
    }).toThrow('end: eventRefRef accepts only valid eIds in the form #abc');
  });

  it("validates the EndTimeAttribute", () => {
    const attr = new EndTimeAttribute('21:00');

    expect(attr.getName()).toBe('endTime');
    expect(attr.getValue()).toBe('21:00');
  });

  it("validates the ForTypeAgentRefAttribute", () => {
    const attr = new ForTypeAgentRefAttribute('#something');

    expect(attr.getName()).toBe('for');
    expect(attr.getValue()).toBe('#something');

    expect(() => {
      const fakeAttr = new ForTypeAgentRefAttribute('fake id');
    }).toThrow('for: agentRef accepts only valid eIds in the form #abc');
  });

  it("validates the FromAttribute", () => {
    const attr = new FromAttribute('#something');

    expect(attr.getName()).toBe('from');
    expect(attr.getValue()).toBe('#something');

    expect(() => {
      const fakeAttr = new FromAttribute('fake id');
    }).toThrow('from: eIdRef accepts only valid eIds in the form #abc');
  });

  it("validates the FromLanguageAttribute", () => {
    let attr = new FromLanguageAttribute('en');
    expect(attr.getName()).toBe('fromLanguage');
    expect(attr.getValue()).toBe('en');

    attr = new FromLanguageAttribute('en-US');
    expect(attr.getValue()).toBe('en-US');

    attr = new FromLanguageAttribute('mr-IN');
    expect(attr.getValue()).toBe('mr-IN');


    expect(() => {
      const fakeAttr = new FromLanguageAttribute('fake language');
    }).toThrow('fromLanguage: language accepts only valid RFC 4646 languages');
  });

  it("validates the FrozenAttribute", () => {
    const attr = new FrozenAttribute('en-US');

    expect(attr.getName()).toBe('frozen');
    expect(attr.getValue()).toBe('en-US');
  });

  it("validates the GUIDAttribute", () => {
    const attr = new GUIDAttribute('#no_spaces');

    expect(attr.getName()).toBe('GUID');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new GUIDAttribute('#lots of spaces');
    }).toThrow('GUID: noWhiteSpace should not contain any white spaces.');
  });

  it("validates the HeightAttribute", () => {
    const attr = new HeightAttribute('22');

    expect(attr.getName()).toBe('height');
    expect(attr.getValue()).toBe('22');

    expect(() => {
      const fakeAttr = new HeightAttribute('22px');
    }).toThrow('height: number should only contain numeric characters.');
  });

  it("validates the HrefAttribute", () => {
    const attr = new HrefAttribute('some link');

    expect(attr.getName()).toBe('href');
    expect(attr.getValue()).toBe('some link');
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
    }).toThrow('language: language accepts only valid RFC 4646 languages');
  });

  it("validates the LevelAttribute", () => {
    const attr = new LevelAttribute('22');

    expect(attr.getName()).toBe('level');
    expect(attr.getValue()).toBe('22');

    expect(() => {
      const fakeAttr = new LevelAttribute('22 size');
    }).toThrow('level: number should only contain numeric characters.');
  });

  it("validates the NameAttribute", () => {
    const attr = new NameAttribute('22');

    expect(attr.getName()).toBe('name');
    expect(attr.getValue()).toBe('22');
  });

  it("validates the NumberAttribute", () => {
    const attr = new NumberAttribute('22');

    expect(attr.getName()).toBe('number');
    expect(attr.getValue()).toBe('22');

    expect(() => {
      const fakeAttr = new NumberAttribute('22 size');
    }).toThrow('number: number should only contain numeric characters.');
  });

  it("validates the OriginalTextAttribute", () => {
    const attr = new OriginalTextAttribute('some text');

    expect(attr.getName()).toBe('originalText');
    expect(attr.getValue()).toBe('some text');
  });

  it("validates the OriginatingExpressionAttribute", () => {
    const attr = new OriginatingExpressionAttribute('some text');

    expect(attr.getName()).toBe('originatingExpression');
    expect(attr.getValue()).toBe('some text');
  });

  it("validates the PeriodAttribute", () => {
    const attr = new PeriodAttribute('#real_id');

    expect(attr.getName()).toBe('period');
    expect(attr.getValue()).toBe('#real_id');

    expect(() => {
      const fakeAttr = new PeriodAttribute('fake id');
    }).toThrow('period: temporalGroupRef accepts only valid eIds in the form #abc');
  });

  it("validates the PosAttribute", () => {
    let attr = new PosAttribute('start');
    expect(attr.getName()).toBe('pos');
    expect(attr.getValue()).toBe('start');

    attr = new PosAttribute('before');
    expect(attr.getValue()).toBe('before');

    attr = new PosAttribute('inside');
    expect(attr.getValue()).toBe('inside');

    attr = new PosAttribute('end');
    expect(attr.getValue()).toBe('end');

    attr = new PosAttribute('unspecified');
    expect(attr.getValue()).toBe('unspecified');

    expect(() => {
      const fakeAttr = new PosAttribute('left');
    }).toThrow('pos: posType should be either start, before, inside, after, end or unspecified');
  });

  it("validates the RefersToAttribute", () => {
    const attr = new RefersToAttribute('#no_spaces');

    expect(attr.getName()).toBe('refersTo');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new RefersToAttribute('#singe space');
    }).toThrow('refersTo: referenceRef accepts only valid eIds in the form #abc');
  });

  it("validates the SourceAttribute", () => {
    const attr = new SourceAttribute('#no_spaces');

    expect(attr.getName()).toBe('source');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new SourceAttribute('#singe space');
    }).toThrow('source: agentRef accepts only valid eIds in the form #abc');
  });

  it("validates the StartAttribute", () => {
    const attr = new StartAttribute('#no_spaces');

    expect(attr.getName()).toBe('start');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new StartAttribute('#singe space');
    }).toThrow('start: eventRefRef accepts only valid eIds in the form #abc');
  });

  it("validates the StartTimeAttribute", () => {
    const attr = new StartTimeAttribute('something');

    expect(attr.getName()).toBe('startTime');
    expect(attr.getValue()).toBe('something');
  });

  it("validates the StatusAttribute", () => {
    let attr = new StatusAttribute('removed');
    expect(attr.getName()).toBe('status');
    expect(attr.getValue()).toBe('removed');

    attr = new StatusAttribute('temporarilyRemoved');
    expect(attr.getValue()).toBe('temporarilyRemoved');

    attr = new StatusAttribute('translated');
    expect(attr.getValue()).toBe('translated');

    attr = new StatusAttribute('editorial');
    expect(attr.getValue()).toBe('editorial');

    attr = new StatusAttribute('edited');
    expect(attr.getValue()).toBe('edited');

    attr = new StatusAttribute('verbatim');
    expect(attr.getValue()).toBe('verbatim');

    attr = new StatusAttribute('incomplete');
    expect(attr.getValue()).toBe('incomplete');

    attr = new StatusAttribute('unknown');
    expect(attr.getValue()).toBe('unknown');

    attr = new StatusAttribute('undefined');
    expect(attr.getValue()).toBe('undefined');

    attr = new StatusAttribute('ignored');
    expect(attr.getValue()).toBe('ignored');

    expect(() => {
      const fakeAttr = new StatusAttribute('new');
    }).toThrow('status: statusType should be either removed, temporarilyRemoved, translated, editorial, edited, verbatim, incomplete, unknown, undefined or ignored');
  });

  it("validates the StyleAttribute", () => {
    const attr = new StyleAttribute('some style');

    expect(attr.getName()).toBe('style');
    expect(attr.getValue()).toBe('some style');
  });

  it("validates the TargetAttribute", () => {
    const attr = new TargetAttribute('something');

    expect(attr.getName()).toBe('target');
    expect(attr.getValue()).toBe('something');
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

  it("validates the TitleAttribute", () => {
    const attr = new TitleAttribute('This is Nkyimu');

    expect(attr.getName()).toBe('title');
    expect(attr.getValue()).toBe('This is Nkyimu');
  });

  it("validates the ToAttribute", () => {
    const attr = new ToAttribute('#no_spaces');

    expect(attr.getName()).toBe('to');
    expect(attr.getValue()).toBe('#no_spaces');

    expect(() => {
      const fakeAttr = new ToAttribute('#singe space');
    }).toThrow('to: agentRef accepts only valid eIds in the form #abc');
  });

  it("validates the TypeAttribute", () => {
    const attr = new TypeAttribute('something');

    expect(attr.getName()).toBe('type');
    expect(attr.getValue()).toBe('something');
  });

  it("validates the TypeEventTypeAttribute", () => {
    let attr = new TypeEventTypeAttribute('generation');
    expect(attr.getName()).toBe('type');
    expect(attr.getValue()).toBe('generation');

    attr = new TypeEventTypeAttribute('amendment');
    expect(attr.getValue()).toBe('amendment');

    attr = new TypeEventTypeAttribute('repeal');
    expect(attr.getValue()).toBe('repeal');

    expect(() => {
      const fakeAttr = new TypeEventTypeAttribute('new');
    }).toThrow('type: eventType should be either generation, amendment or repeal');
  });

  it("validates the TypeOpinionTypeAttribute", () => {
    let attr = new TypeOpinionTypeAttribute('dissenting');
    expect(attr.getName()).toBe('type');
    expect(attr.getValue()).toBe('dissenting');

    attr = new TypeOpinionTypeAttribute('agreeing');
    expect(attr.getValue()).toBe('agreeing');

    attr = new TypeOpinionTypeAttribute('null');
    expect(attr.getValue()).toBe('null');

    expect(() => {
      const fakeAttr = new TypeOpinionTypeAttribute('new');
    }).toThrow('type: opinionType should be either dissenting, agreeing or null');
  });

  it("validates the TypeRestrictionTypeAttribute", () => {
    const attr = new TypeRestrictionTypeAttribute('jurisdiction');
    expect(attr.getName()).toBe('type');
    expect(attr.getValue()).toBe('jurisdiction');

    expect(() => {
      const fakeAttr = new TypeRestrictionTypeAttribute('new');
    }).toThrow('type: restrictionType should only be jurisdiction.');
  });

  it("validates the TypeResultTypeAttribute", () => {
    let attr = new TypeResultTypeAttribute('deny');
    expect(attr.getName()).toBe('type');
    expect(attr.getValue()).toBe('deny');

    attr = new TypeResultTypeAttribute('dismiss');
    expect(attr.getValue()).toBe('dismiss');

    attr = new TypeResultTypeAttribute('uphold');
    expect(attr.getValue()).toBe('uphold');

    attr = new TypeResultTypeAttribute('revert');
    expect(attr.getValue()).toBe('revert');

    attr = new TypeResultTypeAttribute('replace');
    expect(attr.getValue()).toBe('replace');

    attr = new TypeResultTypeAttribute('remit');
    expect(attr.getValue()).toBe('remit');

    attr = new TypeResultTypeAttribute('decide');
    expect(attr.getValue()).toBe('decide');

    attr = new TypeResultTypeAttribute('approve');
    expect(attr.getValue()).toBe('approve');

    expect(() => {
      const fakeAttr = new TypeResultTypeAttribute('new');
    }).toThrow('type: resultType should be either deny, dismiss, uphold, revert, replace, remit, decide or approve.');
  });

  it("validates the UpToAttribute", () => {
    const attr = new UpToAttribute('#real_id');

    expect(attr.getName()).toBe('upTo');
    expect(attr.getValue()).toBe('#real_id');

    expect(() => {
      const fakeAttr = new UpToAttribute('fake id');
    }).toThrow('upTo: eIdRef accepts only valid eIds in the form #abc');
  });

  it("validates the ValueAttribute", () => {
    const attr = new ValueAttribute('This is Nkyimu');

    expect(attr.getName()).toBe('value');
    expect(attr.getValue()).toBe('This is Nkyimu');
  });

  it("validates the WIdAttribute", () => {
    const attr = new WIdAttribute('#real_id');

    expect(attr.getName()).toBe('wId');
    expect(attr.getValue()).toBe('#real_id');

    expect(() => {
      const fakeAttr = new WIdAttribute('fake id');
    }).toThrow('wId: noWhiteSpace should not contain any white spaces.');
  });

  it("validates the XMLDateNamespaceAttribute", () => {
    const attr = new XMLDateNamespaceAttribute('2017');

    expect(attr.getName()).toBe('xmlns:date');
    expect(attr.getValue()).toBe('2017');
  });

  it("validates the XMLIdNamespaceAttribute", () => {
    const attr = new XMLIdNamespaceAttribute('real_id');

    expect(attr.getName()).toBe('xmlns:id');
    expect(attr.getValue()).toBe('real_id');
  });

  it("validates the XMLLangNamespaceAttribute", () => {
    let attr = new XMLLangNamespaceAttribute('en-GB');
    expect(attr.getName()).toBe('xmlns:lang');
    expect(attr.getValue()).toBe('en-GB');

    attr = new XMLLangNamespaceAttribute('en-US');
    expect(attr.getValue()).toBe('en-US');

    attr = new XMLLangNamespaceAttribute('mr-IN');
    expect(attr.getValue()).toBe('mr-IN');

    expect(() => {
      const fakeAttr = new XMLLangNamespaceAttribute('fake language');
    }).toThrow('xmlns:lang: language accepts only valid RFC 4646 languages');
  });

  it("validates the XMLNamespaceAttribute", () => {
    const attr = new XMLNamespaceAttribute('https://nkyimu.com');

    expect(attr.getName()).toBe('xmlns');
    expect(attr.getValue()).toBe('https://nkyimu.com');
  });

  it("validates the XMLSpaceNamespaceAttribute", () => {
    let attr = new XMLSpaceNamespaceAttribute('default');
    expect(attr.getName()).toBe('xmlns:space');
    expect(attr.getValue()).toBe('default');

    attr = new XMLSpaceNamespaceAttribute('preserve');
    expect(attr.getValue()).toBe('preserve');

    expect(() => {
      const fakeAttr = new XMLSpaceNamespaceAttribute('fake space');
    }).toThrow('xmlns:space: xml:space should be either default or preserve');
  });

  it("validates the XMLXSINamespaceAttribute", () => {
    const attr = new XMLXSINamespaceAttribute('real xsi');

    expect(attr.getName()).toBe('xmlns:xsi');
    expect(attr.getValue()).toBe('real xsi');
  });
});
