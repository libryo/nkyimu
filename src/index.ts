import { AKNDocument } from "./Elements/Root/AKNDocument";
import { AgentRefAttribute } from "./Attributes/AgentRefAttribute";

const doc = new AKNDocument();

const fakeAttr = new AgentRefAttribute('#lots of spaces');

console.log(doc.toXML());


