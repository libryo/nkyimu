import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { DocumentType } from "../Groups/DocumentType";

const docType = new DocumentType();

/**
 * The complex type akomaNtosoType is the type for the root
 * element in Akoma Ntoso.
 */
export class AkomaNtosoType implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    ...docType.CHILDREN_MAP,
    components: {
      minOccur: 1,
      options: {}
    }
  };

  readonly SEQUENCE: string[] = [];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
