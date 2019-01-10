import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { DocumentType } from "../ElementGroups/DocumentType";

const docType = new DocumentType();

/**
 * The complex type akomaNtosoType is the type for the root
 * element in Akoma Ntoso.
 */
export class AkomaNtosoType implements HasChildrenMap {

  public readonly CHILDREN_MAP: NodeRules = {
    aknSeq: {
      minOccur: 1,
      maxOccur: 1,
      options: {
        aknSeqSeq: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...docType.CHILDREN_MAP,
          }
        },
        components: { minOccur: 0, maxOccur: 1, options: {} }
      }
    },
  };

  public readonly SEQUENCE: string[] = [];

  public readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
