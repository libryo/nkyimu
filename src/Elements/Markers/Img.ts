import { AbstractNode } from "../../Abstract/AbstractNode";
import { ImgAtts } from "../../AttributeGroups/ImgAtts";
import { Src } from "../../AttributeGroups/Src";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { Markeropt } from "../ComplexTypes/Markeropt";

const type = new Markeropt();

/**
 * The element img is an HTML element and is used in Akoma Ntoso
 * as in HTML, for including an image. It is a marker.
 */
export class Img extends AbstractNode {
  abbreviation = '';

  nodeName = 'img';

  readonly CHILDREN_MAP: NodeRules = type.CHILDREN_MAP;

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
    ...(new Src()).items,
    ...(new ImgAtts()).items,
  ];
}
