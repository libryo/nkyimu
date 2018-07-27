import { AKNDocument } from '../src/Elements/Root/AKNDocument';
import { Act } from '../src/Elements/Root/Act';
import { Meta } from '../src/Elements/RootContainers/Meta';

/**
 * Setup XMLSerializer for nodejs to run the tests.
 */
class XMLSerializer {
  serializeToString(dom) {
    return require('xmlserializer').serializeToString(dom);
  }
}

beforeAll(() => {
  window['XMLSerializer'] = XMLSerializer;
});

/**
 * Base test
 */
describe("Base test", () => {
  it("can instantiate and is of type AbstractNode", () => {
    const doc = new AKNDocument();

    expect(doc).toBeInstanceOf(AKNDocument);
  });

  it("can render the nodes", () => {
    const doc = new AKNDocument();
    doc.appendChild(new Act());

    expect(doc.toXML())
      .toBe('<akomaNtoso xmlns="http://docs.oasis-open.org/legaldocml/ns/akn/3.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:date="http://exslt.org/dates-and-times"><act/></akomaNtoso>');
  });

  it("thorws exception on invalid node", () => {
    const doc = new AKNDocument();
    const meta = new Meta();

    expect(() => {
      doc.appendChild(meta);
    }).toThrow(`Node ${meta.nodeName} is not allowed as a child.`);
  });
});