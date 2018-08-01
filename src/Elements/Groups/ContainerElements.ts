import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";
import { NodeRules } from "../../Interfaces/NodeRules";
import { HTMLcontainers } from "./HTMLcontainers";
import { SpeechSection } from "./SpeechSection";

/**
 * The group containerElements lists all the elements that are containers
 */
export class ContainerElements implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    sequence: {
      maxOccur: 1,
      options: {
        ...(new SpeechSection()).CHILDREN_MAP,
        ...(new HTMLcontainers()).CHILDREN_MAP,
        container: { maxOccur: 1, options: {} },
      }
    }
  };
}
