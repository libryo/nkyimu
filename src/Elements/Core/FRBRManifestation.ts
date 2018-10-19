import { AbstractNode } from "../../Abstracts/AbstractNode";
import { AttributeGroupItem } from "../../Interfaces/AttributeGroupItem";
import { NodeRules } from "../../Interfaces/NodeRules";
import { CoreProperties } from "../../ComplexTypes/CoreProperties";
import { ManifProperties } from "../../ElementGroups/ManifProperties";

const type = new CoreProperties();
/**
 * The element FRBRManifestation is the metadata container of identifying properties
 * related to the Manifestation level according to the FRBR hierarchy
 */
export class FRBRManifestation extends AbstractNode {
  abbreviation = 'frbrmanifestation';

  getNodeName(): string { return 'FRBRManifestation'; }

  readonly CHILDREN_MAP: NodeRules = {
    ...type.CHILDREN_MAP,
    sequence: {
      minOccur: 1,
      maxOccur: 1,
      options: {
        ...(new ManifProperties()).CHILDREN_MAP,
      }
    }
  };

  readonly SEQUENCE: string[] = [
    ...type.SEQUENCE,
    ...(new ManifProperties()).SEQUENCE
  ];

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
    ...type.ATTRIBUTE_GROUPS,
  ];
}