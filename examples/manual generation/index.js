import {
 Elements, Attributes, Helpers, Engine 
} from '../../build/src';

// Generation of Wet Tropics of Queensland World Heritage Area Conservation Act 1994
class TestDocument {
  constructor() {
    this.sourceUrl = 'https://www.legislation.gov.au/Details/C2004C00809';
    this.doc = new Elements.AKNDocument();

    this.generateDocument();
  }

  render() {
    return this.doc.toXML();
  }

  getDocument() {
    return this.doc;
  }

  generateDocument() {
    const act = new Elements.Act();
    act.setAttribute(new Attributes.NameAttribute('Wet Tropics of Queensland World Heritage Area Conservation Act 1994'));
    act.appendChild(this.getMeta());
    act.appendChild(this.getPreface());
    act.appendChild(this.getBody());

    this.doc.appendChild(act);
  }

  getMeta() {
    const meta = new Elements.Meta();
    meta.appendChild(this.getIdentification());

    return meta;
  }

  getIdentification() {
    const identification = new Elements.Identification();
    identification.setAttribute(new Attributes.SourceAttribute('#source'));
    identification.appendChild(this.getFrbrWork());
    identification.appendChild(this.getFrbrExpression());
    identification.appendChild(this.getFrbrManifestation());

    return identification;
  }

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
  }

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
  }

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
  }

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
  }

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
  }

  createNote() {
    const note = new Elements.Note();
    const p = new Elements.P();

    p.appendChild(new Elements.TextElement('This is a note'));
    note.appendChild(p);

    return this.doc.addNote(note);
  }
}

const generated = new TestDocument();
const node = generated.getDocument().getElement();

/** Lets display the original */

let display = document.createElement('pre');
display.innerHTML = Helpers.forDisplay(generated.render());

document.querySelector('body').appendChild(display);

/** Lets modify the Long title */
const longTitle = node.querySelector('longTitle[eId="lt_1"]');

if (longTitle) {
  // Replace the longTitle text by replacing the node.
  const pTag = longTitle.source.firstChild();
  pTag.replaceChild(new Elements.TextElement('Updated Long Title!!'), pTag.firstChild());


  // Update the text
  const textNode = longTitle.source.firstChild().firstChild();
  textNode.setTextContent('Updated Long Title');

  // Remove the first child.
  longTitle.source.removeChild(longTitle.source.firstChild());
}

display = document.createElement('pre');
display.innerHTML = Helpers.forDisplay(generated.render());

document.querySelector('body').appendChild(display);
