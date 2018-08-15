import { AKNDocument } from "./Elements/Root/AKNDocument";
import { Act } from "./Elements/Root/Act";
import { NameAttribute } from "./Attributes/NameAttribute";
import { Meta } from "./Elements/RootContainers/Meta";
import { Preface } from "./Elements/RootContainers/Preface";
import { Body } from "./Elements/RootContainers/Body";
import { Identification } from "./Elements/Core/Identification";
import { FRBRWork } from "./Elements/Core/FRBRWork";
import { FRBRthis } from "./Elements/Core/FRBRthis";
import { ValueAttribute } from "./Attributes/ValueAttribute";
import { FRBRuri } from "./Elements/Core/FRBRuri";
import { FRBRdate } from "./Elements/Core/FRBRdate";
import { DateAttribute } from "./Attributes/DateAttribute";
import { FRBRauthor } from "./Elements/Core/FRBRauthor";
import { HrefAttribute } from "./Attributes/HrefAttribute";
import { FRBRcountry } from "./Elements/Core/FRBRcountry";
import { FRBRnumber } from "./Elements/Core/FRBRnumber";
import { FRBRname } from "./Elements/Core/FRBRname";
import { SourceAttribute } from "./Attributes/SourceAttribute";
import { forDisplay } from "./helpers";
import { FRBRExpression } from "./Elements/Core/FRBRExpression";
import { FRBRlanguage } from "./Elements/Core/FRBRlanguage";
import { LanguageAttribute } from "./Attributes/LanguageAttribute";
import { FRBRManifestation } from "./Elements/Core/FRBRManifestation";
import { FRBRformat } from "./Elements/Core/FRBRformat";
import { P } from "./Elements/Blocks/P";
import { ShortTitle } from "./Elements/Inlines/ShortTitle";
import { TextElement } from "./Elements/TextElement";
import { LongTitle } from "./Elements/Containers/LongTitle";
import { EIdAttribute } from "./Attributes/EIdAttribute";
import { NkyimuComment } from "./Interfaces/NkyimuComment";
import { NkyimuElement } from "./Interfaces/NkyimuElement";
import { NkyimuText } from "./Interfaces/NkyimuText";
import { AbstractNode } from "./Abstract/AbstractNode";

// Generation of Wet Tropics of Queensland World Heritage Area Conservation Act 1994
class TestDocument {
  readonly sourceUrl: string = 'https://www.legislation.gov.au/Details/C2004C00809';
  private doc: AKNDocument;

  constructor() {
    this.doc = new AKNDocument();

    this.generateDocument();
  }

  render(): string {
    return this.doc.toXML();
  }

  getDocument(): AKNDocument {
    return this.doc;
  }

  private generateDocument() {
    const act = new Act();
    act.setAttribute(new NameAttribute('Wet Tropics of Queensland World Heritage Area Conservation Act 1994'));
    act.appendChild(this.getMeta());
    act.appendChild(this.getPreface());
    act.appendChild(this.getBody());

    this.doc.appendChild(act);
  }

  private getMeta(): Meta {
    const meta = new Meta();
    meta.appendChild(this.getIdentification());

    return meta;
  }

  private getIdentification(): Identification {
    const identification = new Identification();
    identification.setAttribute(new SourceAttribute('#source'));
    identification.appendChild(this.getFrbrWork());
    identification.appendChild(this.getFrbrExpression());
    identification.appendChild(this.getFrbrManifestation());

    return identification;
  }

  private getFrbrWork(): FRBRWork {
    const frbrWork = new FRBRWork();

    const frbrThis = new FRBRthis();
    frbrThis.setAttribute(new ValueAttribute(this.sourceUrl));
    frbrWork.appendChild(frbrThis);

    const frbrUri = new FRBRuri();
    frbrUri.setAttribute(new ValueAttribute(this.sourceUrl));
    frbrWork.appendChild(frbrUri);

    const frbrDate = new FRBRdate();
    frbrDate.setAttribute(new DateAttribute('2000-07-16'));
    frbrDate.setAttribute(new NameAttribute('enacted'));
    frbrWork.appendChild(frbrDate);

    const frbrAuthor = new FRBRauthor();
    frbrAuthor.setAttribute(new HrefAttribute('https://www.legislation.gov.au'));
    frbrWork.appendChild(frbrAuthor);

    const frbrCountry = new FRBRcountry();
    frbrCountry.setAttribute(new ValueAttribute('au'));
    frbrWork.appendChild(frbrCountry);

    const frbrNumber = new FRBRnumber();
    frbrNumber.setAttribute(new ValueAttribute('None'));
    frbrWork.appendChild(frbrNumber);

    const frbrName = new FRBRname();
    frbrName.setAttribute(new ValueAttribute('Wet Tropics of Queensland World Heritage Area Conservation Act 1994'));
    frbrWork.appendChild(frbrName);

    return frbrWork;
  }

  private getFrbrExpression(): FRBRExpression {
    const exp = new FRBRExpression();

    const frbrThis = new FRBRthis();
    frbrThis.setAttribute(new ValueAttribute(this.sourceUrl));
    exp.appendChild(frbrThis);

    const frbrUri = new FRBRuri();
    frbrUri.setAttribute(new ValueAttribute(this.sourceUrl));
    exp.appendChild(frbrUri);

    const frbrDate = new FRBRdate();
    frbrDate.setAttribute(new DateAttribute('2000-07-16'));
    frbrDate.setAttribute(new NameAttribute('publication'));
    exp.appendChild(frbrDate);

    const frbrAuthor = new FRBRauthor();
    frbrAuthor.setAttribute(new HrefAttribute('https://www.legislation.gov.au'));
    exp.appendChild(frbrAuthor);

    const frbrLang = new FRBRlanguage();
    frbrLang.setAttribute(new LanguageAttribute('eng'));
    exp.appendChild(frbrLang);

    return exp;
  }

  private getFrbrManifestation(): FRBRManifestation {
    const man = new FRBRManifestation();

    const frbrThis = new FRBRthis();
    frbrThis.setAttribute(new ValueAttribute(this.sourceUrl));
    man.appendChild(frbrThis);

    const frbrUri = new FRBRuri();
    frbrUri.setAttribute(new ValueAttribute(this.sourceUrl));
    man.appendChild(frbrUri);

    const frbrDate = new FRBRdate();
    frbrDate.setAttribute(new DateAttribute('2018-06-20'));
    frbrDate.setAttribute(new NameAttribute('transform'));
    man.appendChild(frbrDate);

    const frbrAuthor = new FRBRauthor();
    frbrAuthor.setAttribute(new HrefAttribute('https://www.legislation.gov.au'));
    man.appendChild(frbrAuthor);

    const frbrFormat = new FRBRformat();
    frbrFormat.setAttribute(new ValueAttribute('application/akn+xml'));
    man.appendChild(frbrFormat);

    return man;
  }

  private getPreface():Preface {
    const preface = new Preface();

    let p = new P();
    const shortTitle = new ShortTitle();
    shortTitle.appendChild(new TextElement('Wet Tropics of Queensland World Heritage Area Conservation Act 1994'));
    p.appendChild(shortTitle);
    preface.appendChild(p);

    p = new P();
    p.appendChild(new TextElement('An Act relating to the conservation of the Wet Tropics of Queensland World Heritage Area'));
    const longTitle = new LongTitle();
    longTitle.setAttribute(new EIdAttribute('#long_title'));
    longTitle.appendChild(p);
    preface.appendChild(longTitle);

    return preface;
  }

  private getBody():Body {
    const body = new Body();

    return body;
  }
}

const generated = new TestDocument();
const node = generated.getDocument().getElement();

/** Lets display the original */
let display = document.querySelector('#display');

if (display) {
  display.innerHTML = forDisplay(generated.render());
}

/** Lets modify the Long title */
const longTitle: NkyimuElement|null = node.querySelector('longTitle[eId="lt_1"]');

if (longTitle) {
  // Replace the longTitle text by replacing the node.
  const pTag: AbstractNode = longTitle.source.firstChild();
  pTag.replaceChild(new TextElement('Updated Long Title!!'), pTag.firstChild());


  // Update the text
  const textNode: AbstractNode = longTitle.source.firstChild().firstChild();
  textNode.setTextContent('Updated Long Title');

  // Remove the first child.
  longTitle.source.removeChild(longTitle.source.firstChild());
}

display = document.querySelector('#updated_display');

if (display) {
  display.innerHTML = forDisplay(generated.render());
}



