import { EIdAttribute } from "./Attributes/EIdAttribute";
import { Block } from "./Elements/Blocks/Block";
import { WrapUp } from "./Elements/Containers/WrapUp";
import { Subsection } from "./Elements/HierarchicalContainers/Subsection";
import { AKNDocument } from "./Elements/Root/AKNDocument";

const doc = new AKNDocument();
const subsec = new WrapUp();
const block = new Block();
block.setAttribute(new EIdAttribute('blk_1'));

subsec.appendChild(block);

console.log(doc.toXML());


