const { Elements, Attributes, Engine } = require('../build/src');
// Generation of Wet Tropics of Queensland World Heritage Area Conservation Act 1994
const TestDocument = {
  sourceUrl: 'https://www.legislation.gov.au/Details/C2004C00809',
  doc: new Elements.AKNDocument(),

  render() {
    return this.doc.toXML();
  },
 
  getDocument() {
    return this.doc;
  },
 
  generateDocument() {
    const act = new Elements.Act();
    act.setAttribute(new Attributes.NameAttribute('Wet Tropics of Queensland World Heritage Area Conservation Act 1994'));
    act.appendChild(this.getMeta());
    act.appendChild(this.getPreface());
    act.appendChild(this.getBody());
 
    this.doc.appendChild(act);
  },
 
  getMeta() {
    const meta = new Elements.Meta();
    meta.appendChild(this.getIdentification());
 
    return meta;
  },
 
  getIdentification() {
    const identification = new Elements.Identification();
    identification.setAttribute(new Attributes.SourceAttribute('#source'));
    identification.appendChild(this.getFrbrWork());
    identification.appendChild(this.getFrbrExpression());
    identification.appendChild(this.getFrbrManifestation());
 
    return identification;
  },
 
  getFrbrWork() {
    const frbrWork = new Elements.FRBRWork();
 
    const frbrThis = new Elements.FRBRthis();
    frbrThis.setAttribute(new Attributes.ValueAttribute(this.sourceUrl));
    frbrWork.appendChild(frbrThis);
 
    const frbrUri = new Elements.FRBRuri();
    frbrUri.setAttribute(new Attributes.ValueAttribute(this.sourceUrl));
    frbrWork.appendChild(frbrUri);
 
    const frbrDate = new Elements.FRBRdate();
    frbrDate.setAttribute(new Attributes.DateAttribute('2000-07-16'));
    frbrDate.setAttribute(new Attributes.NameAttribute('enacted'));
    frbrWork.appendChild(frbrDate);
 
    const frbrAuthor = new Elements.FRBRauthor();
    frbrAuthor.setAttribute(new Attributes.HrefAttribute('https://www.legislation.gov.au'));
    frbrWork.appendChild(frbrAuthor);
 
    const frbrCountry = new Elements.FRBRcountry();
    frbrCountry.setAttribute(new Attributes.ValueAttribute('au'));
    frbrWork.appendChild(frbrCountry);
 
    const frbrNumber = new Elements.FRBRnumber();
    frbrNumber.setAttribute(new Attributes.ValueAttribute('None'));
    frbrWork.appendChild(frbrNumber);
 
    const frbrName = new Elements.FRBRname();
    frbrName.setAttribute(new Attributes.ValueAttribute('Wet Tropics of Queensland World Heritage Area Conservation Act 1994'));
    frbrWork.appendChild(frbrName);
 
    return frbrWork;
  },
 
  getFrbrExpression() {
    const exp = new Elements.FRBRExpression();
 
    const frbrThis = new Elements.FRBRthis();
    frbrThis.setAttribute(new Attributes.ValueAttribute(this.sourceUrl));
    exp.appendChild(frbrThis);
 
    const frbrUri = new Elements.FRBRuri();
    frbrUri.setAttribute(new Attributes.ValueAttribute(this.sourceUrl));
    exp.appendChild(frbrUri);
 
    const frbrDate = new Elements.FRBRdate();
    frbrDate.setAttribute(new Attributes.DateAttribute('2000-07-16'));
    frbrDate.setAttribute(new Attributes.NameAttribute('publication'));
    exp.appendChild(frbrDate);
 
    const frbrAuthor = new Elements.FRBRauthor();
    frbrAuthor.setAttribute(new Attributes.HrefAttribute('https://www.legislation.gov.au'));
    exp.appendChild(frbrAuthor);
 
    const frbrLang = new Elements.FRBRlanguage();
    frbrLang.setAttribute(new Attributes.LanguageAttribute('eng'));
    exp.appendChild(frbrLang);
 
    return exp;
  },
 
  getFrbrManifestation() {
    const man = new Elements.FRBRManifestation();
 
    const frbrThis = new Elements.FRBRthis();
    frbrThis.setAttribute(new Attributes.ValueAttribute(this.sourceUrl));
    man.appendChild(frbrThis);
 
    const frbrUri = new Elements.FRBRuri();
    frbrUri.setAttribute(new Attributes.ValueAttribute(this.sourceUrl));
    man.appendChild(frbrUri);
 
    const frbrDate = new Elements.FRBRdate();
    frbrDate.setAttribute(new Attributes.DateAttribute('2018-06-20'));
    frbrDate.setAttribute(new Attributes.NameAttribute('transform'));
    man.appendChild(frbrDate);
 
    const frbrAuthor = new Elements.FRBRauthor();
    frbrAuthor.setAttribute(new Attributes.HrefAttribute('https://www.legislation.gov.au'));
    man.appendChild(frbrAuthor);
 
    const frbrFormat = new Elements.FRBRformat();
    frbrFormat.setAttribute(new Attributes.ValueAttribute('application/akn+xml'));
    man.appendChild(frbrFormat);
 
    return man;
  },
 
  getPreface() {
    const preface = new Elements.Preface();
 
    let p = new Elements.P();
    const shortTitle = new Elements.ShortTitle();
    shortTitle.appendChild(new Elements.TextElement('Wet Tropics of Queensland World Heritage Area Conservation Act 1994'));
    p.appendChild(shortTitle);
    preface.appendChild(p);
 
    p = new Elements.P();
    p.appendChild(new Elements.TextElement('An Act relating to the conservation of the Wet Tropics of Queensland World Heritage Area'));
    const longTitle = new Elements.LongTitle();
    longTitle.setAttribute(new Attributes.EIdAttribute('#long_title'));
    longTitle.appendChild(p);
    preface.appendChild(longTitle);
 
    return preface;
  },
 
  getBody() {
    const body = new Elements.Body();
    let generated = Engine.Generator.fromSelector('chapter>part[num:2,heading:Some Part]>section>subsection>content>p');
    let noteRef = this.createNote();
    let sampleBody = new Elements.TextElement('Always have notes.');
    generated.last.appendChild(sampleBody);
    generated.last.appendChild(noteRef);
 
    /** Append the first child */
    body.appendChild(generated.root);
 
    generated = Engine.Generator.fromSelector('chapter>part[num:1,heading:First Part]>section>subsection>content>p');
    noteRef = this.createNote();
    sampleBody = new Elements.TextElement('Never forget a part.');
    generated.last.appendChild(sampleBody);
    generated.last.appendChild(noteRef);
 
    /** Append the new node as the first child */
    body.insertChildAtPosition(generated.root, 0);
 
    return body;
  },
 
  createNote() {
    const note = new Elements.Note();
    const p = new Elements.P();
 
    p.appendChild(new Elements.TextElement('This is a note'));
    note.appendChild(p);
 
    return this.doc.addNote(note);
  },
}

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

describe('Base test', () => {
  it('correctly works with js', () => {
    TestDocument.generateDocument();
    const output = TestDocument.render();

    expect(output).toBe('<akomaNtoso xmlns=\"http://docs.oasis-open.org/legaldocml/ns/akn/3.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:date=\"http://exslt.org/dates-and-times\"><act name=\"Wet Tropics of Queensland World Heritage Area Conservation Act 1994\"><meta><identification source=\"#source\"><FRBRWork><FRBRthis value=\"https://www.legislation.gov.au/Details/C2004C00809\"/><FRBRuri value=\"https://www.legislation.gov.au/Details/C2004C00809\"/><FRBRdate date=\"2000-07-16\" name=\"enacted\"/><FRBRauthor href=\"https://www.legislation.gov.au\"/><FRBRcountry value=\"au\"/><FRBRnumber value=\"None\"/><FRBRname value=\"Wet Tropics of Queensland World Heritage Area Conservation Act 1994\"/></FRBRWork><FRBRExpression><FRBRthis value=\"https://www.legislation.gov.au/Details/C2004C00809\"/><FRBRuri value=\"https://www.legislation.gov.au/Details/C2004C00809\"/><FRBRdate date=\"2000-07-16\" name=\"publication\"/><FRBRauthor href=\"https://www.legislation.gov.au\"/><FRBRlanguage language=\"eng\"/></FRBRExpression><FRBRManifestation><FRBRthis value=\"https://www.legislation.gov.au/Details/C2004C00809\"/><FRBRuri value=\"https://www.legislation.gov.au/Details/C2004C00809\"/><FRBRdate date=\"2018-06-20\" name=\"transform\"/><FRBRauthor href=\"https://www.legislation.gov.au\"/><FRBRformat value=\"application/akn+xml\"/></FRBRManifestation></identification><notes source=\"#source\"><note eId=\"note_1\"><p>This is a note</p></note><note eId=\"note_2\"><p>This is a note</p></note></notes></meta><preface eId=\"preface\"><p><shortTitle>Wet Tropics of Queensland World Heritage Area Conservation Act 1994</shortTitle></p><longTitle eId=\"#long_title\"><p>An Act relating to the conservation of the Wet Tropics of Queensland World Heritage Area</p></longTitle></preface><body eId=\"body\"><chapter eId=\"chp_seq1\"><part eId=\"chp_seq1__pt_1\"><num>1</num><heading>First Part</heading><section eId=\"chp_seq1__pt_1__sec_seq1\"><subsection eId=\"chp_seq1__pt_1__sec_seq1__subsec_seq1\"><content><p>Never forget a part.<noteRef href=\"#note_2\"/></p></content></subsection></section></part></chapter><chapter eId=\"chp_seq2\"><part eId=\"chp_seq2__pt_2\"><num>2</num><heading>Some Part</heading><section eId=\"chp_seq2__pt_2__sec_seq1\"><subsection eId=\"chp_seq2__pt_2__sec_seq1__subsec_seq1\"><content><p>Always have notes.<noteRef href=\"#note_1\"/></p></content></subsection></section></part></chapter></body></act></akomaNtoso>');
  });

  it('updates the children order on replacing the nodes', () => {
    const section = new Elements.Section();
    section.appendChild(new Elements.Num());
    section.appendChild(new Elements.Heading());

    const content = new Elements.Content();

    section.appendChild(content);

    expect(section.getChildrenOrder()).toEqual(['num', 'heading', 'content']);

    section.replaceChild(new Elements.Subsection(), content);

    expect(section.getChildrenOrder()).toEqual(['num', 'heading', 'subsection']);
  });

  it('overwrites generated eIds', () => {
    const body = new Elements.Body();
    body.setAttribute(new Attributes.EIdAttribute('body'));
    const part = new Elements.Part();
    part.setAttribute(new Attributes.EIdAttribute('bodypart_1'));
    let chapter = new Elements.Chapter();
    chapter.setAttribute(new Attributes.EIdAttribute('bodypart_1__chp_5'));
    let section = new Elements.Section();
    section.setAttribute(new Attributes.EIdAttribute('bodypart_1__chp_5__sec_10'));
    let content = new Elements.Content();
    content.setAttribute(new Attributes.EIdAttribute('bodypart_1__chp_5__sec_10__content_1'));
    let pTag = new Elements.P();
    pTag.setAttribute(new Attributes.EIdAttribute('bodypart_1__chp_5__sec_10__content_1__p_1'));

    content.appendChild(pTag);
    section.appendChild(content);
    chapter.appendChild(section);
    part.appendChild(chapter);
    body.appendChild(part);

    body.updateGeneratedIds(true);

    expect(part.getNode().getAttribute('eId')).toBe('pt_seq1');
    expect(chapter.getNode().getAttribute('eId')).toBe('pt_seq1__chp_seq1');
    expect(section.getNode().getAttribute('eId')).toBe('pt_seq1__chp_seq1__sec_seq1');
    expect(content.getNode().getAttribute('eId')).toBe(null);
    expect(pTag.getNode().getAttribute('eId')).toBe(null);
  });

  it('removes incorrectly prefixed eIds', () => {
    const body = new Elements.Body();
    body.setAttribute(new Attributes.EIdAttribute('akn__body'));
    const part = new Elements.Part();
    part.setAttribute(new Attributes.EIdAttribute('akn__body__part_1'));
    let chapter = new Elements.Chapter();
    chapter.setAttribute(new Attributes.EIdAttribute('akn__body__part_1__chp_5'));
    let section = new Elements.Section();
    section.setAttribute(new Attributes.EIdAttribute('akn__body__part_1__chp_5__sec_10'));

    chapter.appendChild(section);
    part.appendChild(chapter);
    body.appendChild(part);

    body.updateGeneratedIds(true);

    expect(part.getNode().getAttribute('eId')).toBe('akn__pt_seq1');
    expect(chapter.getNode().getAttribute('eId')).toBe('akn__pt_seq1__chp_seq1');
    expect(section.getNode().getAttribute('eId')).toBe('akn__pt_seq1__chp_seq1__sec_seq1');
  });

  it('tests heading and content not requiring eIds', () => {
    const body = new Elements.Body();
    const part = new Elements.Part();
    let heading = new Elements.Heading();
    heading.appendChild(new Elements.TextElement('Some cool heading'));
    part.appendChild(heading);
    let content = new Elements.Content();
    let p = new Elements.P();
    p.appendChild(new Elements.TextElement('Some awesome content'));
    content.appendChild(p);
    part.appendChild(content);
    body.appendChild(part);
    

    body.updateGeneratedIds(true);

    expect(part.getNode().getAttribute('eId')).toBe('pt_seq1');
    expect(heading.getNode().getAttribute('eId')).toBe(null);
    expect(content.getNode().getAttribute('eId')).toBe(null);
  });
});
