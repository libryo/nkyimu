import { AkomaNtoso } from "./Elements/Root/AkomaNtoso";
import { AKNDocument } from "./Elements/Root/AKNDocument";

const akn = new AkomaNtoso();
const doc = new AKNDocument(akn);

console.log(doc.toXML());


