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
describe('Abstract Node test', () => {
  it('can generate nodes from key:value pair', () => {
    const doc = new AKNDocument();
    const act = new Act();

    const actChildren = {
      name: 'GeneralAct',
      meta: {
        identification: {
          source: '#source',
          FRBRWork: {
            FRBRthis: {
              value: 'https://www.legislation.gov.au/Details/C2016C00937',
            },
            FRBRuri: {
              value: 'https://www.legislation.gov.au/Details/C2016C00937',
            },
            FRBRdate: {
              date: '2016-10-21',
              name: 'commencement',
            },
            FRBRauthor: {
              href: 'https://www.legislation.gov.au',
            },
            FRBRcountry: {
              value: 'au',
            },
            FRBRnumber: {
              value: '17',
            },
            FRBRname: {
              value: 'Aboriginal and Torres Strait Islander Heritage Protection Act 1984',
            },
          },
        },
      },
    };

    act.setChildren(actChildren);

    doc.appendChild(act);

    // @ts-ignore
    const expectedOutput = '<akomaNtoso xmlns="http://docs.oasis-open.org/legaldocml/ns/akn/3.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:date="http://exslt.org/dates-and-times"><act name="GeneralAct"><meta><identification source="#source"><FRBRWork><FRBRthis value="https://www.legislation.gov.au/Details/C2016C00937"/><FRBRuri value="https://www.legislation.gov.au/Details/C2016C00937"/><FRBRdate date="2016-10-21" name="commencement"/><FRBRauthor href="https://www.legislation.gov.au"/><FRBRcountry value="au"/><FRBRnumber value="17"/><FRBRname value="Aboriginal and Torres Strait Islander Heritage Protection Act 1984"/></FRBRWork></identification></meta></act></akomaNtoso>';

    expect(doc.toXML()).toBe(expectedOutput);
  });
});
