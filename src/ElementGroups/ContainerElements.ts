import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";
import { HTMLcontainers } from "./HTMLcontainers";
import { SpeechSection } from "./SpeechSection";

/**
 * The group containerElements lists all the elements that are containers
 */
export class ContainerElements implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    contElsChoice: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        speecSecGrp: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new SpeechSection()).CHILDREN_MAP,
          }
        },
        htmlContsGrp: {
          minOccur: 1,
          maxOccur: 1,
          options: {
            ...(new HTMLcontainers()).CHILDREN_MAP,
          }
        },
        container: { minOccur: 1, maxOccur: 1, options: {} },
      }
    }
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}
