import { DocumentType } from "../Groups/DocumentType";
import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

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
}
