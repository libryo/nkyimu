import { AttributeGroupItem } from "../Interfaces/AttributeGroupItem";
import { HasChildrenMap } from "../Interfaces/HasChildrenMap";
import { NodeRules } from "../Interfaces/NodeRules";

/**
 * The group ANhier lists the elements that belong to the Akoma Ntoso
 * legislative hierarchy
 */
export class ANhier implements HasChildrenMap {

  readonly CHILDREN_MAP: NodeRules = {
    anHierChoice: {
      choice: true,
      minOccur: 1,
      maxOccur: 1,
      options: {
        clause: { minOccur: 1, maxOccur: 1, options: {} },
        section: { minOccur: 1, maxOccur: 1, options: {} },
        part: { minOccur: 1, maxOccur: 1, options: {} },
        paragraph: { minOccur: 1, maxOccur: 1, options: {} },
        chapter: { minOccur: 1, maxOccur: 1, options: {} },
        title: { minOccur: 1, maxOccur: 1, options: {} },
        article: { minOccur: 1, maxOccur: 1, options: {} },
        book: { minOccur: 1, maxOccur: 1, options: {} },
        tome: { minOccur: 1, maxOccur: 1, options: {} },
        division: { minOccur: 1, maxOccur: 1, options: {} },
        list: { minOccur: 1, maxOccur: 1, options: {} },
        point: { minOccur: 1, maxOccur: 1, options: {} },
        indent: { minOccur: 1, maxOccur: 1, options: {} },
        alinea: { minOccur: 1, maxOccur: 1, options: {} },
        rule: { minOccur: 1, maxOccur: 1, options: {} },
        subrule: { minOccur: 1, maxOccur: 1, options: {} },
        proviso: { minOccur: 1, maxOccur: 1, options: {} },
        subsection: { minOccur: 1, maxOccur: 1, options: {} },
        subpart: { minOccur: 1, maxOccur: 1, options: {} },
        subparagraph: { minOccur: 1, maxOccur: 1, options: {} },
        subchapter: { minOccur: 1, maxOccur: 1, options: {} },
        subtitle: { minOccur: 1, maxOccur: 1, options: {} },
        subdivision: { minOccur: 1, maxOccur: 1, options: {} },
        subclause: { minOccur: 1, maxOccur: 1, options: {} },
        sublist: { minOccur: 1, maxOccur: 1, options: {} },
        level: { minOccur: 1, maxOccur: 1, options: {} },
        transitional: { minOccur: 1, maxOccur: 1, options: {}
      },
    }},
  };

  readonly ATTRIBUTE_GROUPS: AttributeGroupItem[] = [
  ];
}

