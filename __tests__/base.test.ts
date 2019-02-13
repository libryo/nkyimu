import { NameAttribute } from '../src/Attributes/NameAttribute';
import { Act, AKNDocument, Meta } from '../src/Elements';

/**
 * Setup XMLSerializer for nodejs to run the tests.
 */
class XMLSerializer {
  public serializeToString(dom) {
    return require('xmlserializer').serializeToString(dom);
  }
}

beforeAll(() => {
  window['XMLSerializer'] = XMLSerializer;
});

/**
 * Base test
 */
describe('Base test', () => {
  it('can instantiate and is of type AbstractNode', () => {
    const doc = new AKNDocument();

    expect(doc).toBeInstanceOf(AKNDocument);
  });

  it('thorws exception on when adding an incomplete node.', () => {
    expect(() => {
      const doc = new AKNDocument();
      doc.appendChild(new Act());
    }).toThrow('Element act is missing required attributes: NameAttribute');
  });

  it('can render the nodes', () => {
    const doc = new AKNDocument();
    const act = new Act();
    act.setAttribute(new NameAttribute('Introduction to Nkyimu'));
    doc.appendChild(act);

    expect(doc.toXML())
      .toBe('<akomaNtoso xmlns="http://docs.oasis-open.org/legaldocml/ns/akn/3.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:date="http://exslt.org/dates-and-times"><act name="Introduction to Nkyimu"/></akomaNtoso>');
  });

  it('thorws exception on invalid node', () => {
    const doc = new AKNDocument();
    const meta = new Meta();

    expect(() => {
      doc.appendChild(meta);
    }).toThrow('Node meta is not allowed as a child.');
  });
});
