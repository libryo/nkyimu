import { AKNDocument } from '../src/Elements/Root/AKNDocument';
import { AkomaNtoso } from '../src/Elements/Root/AkomaNtoso';
import { Act } from '../src/Elements/Root/Act';
import { Meta } from '../src/Elements/Containers/Meta';

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
 * Section test
 */
describe("Document test", () => {
  it("can instantiate and is of type AbstractNode", () => {
    const akn = new AkomaNtoso();
    const doc = new AKNDocument(akn);

    expect(doc).toBeInstanceOf(AKNDocument);
  });

  it("can render the nodes", () => {
    const akn = new AkomaNtoso();
    akn.appendChild(new Act());
    const doc = new AKNDocument(akn);

    expect(doc.toXML())
      .toBe('<akomaNtoso xmlns="http://docs.oasis-open.org/legaldocml/ns/akn/3.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:date="http://exslt.org/dates-and-times"><act/></akomaNtoso>');
  });

  it("thorws exception on invalid node", () => {
    const akn = new AkomaNtoso();
    const meta = new Meta();

    expect(() => {
      akn.appendChild(meta)
    }).toThrow(`Node ${meta.nodeName} is not allowed as a child.`);
  });
});