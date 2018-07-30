import { NodeRules } from "../../Interfaces/NodeRules";
import { HasChildrenMap } from "../../Interfaces/HasChildrenMap";

/**
 * The group ANhier lists the elements that belong to the Akoma Ntoso
 * legislative hierarchy
 */
export class ANhier implements HasChildrenMap {
  
  readonly CHILDREN_MAP: NodeRules = {
    choice: {
      maxOccur: 1,
      options: {
        clause: { maxOccur: 1, options: {} },
        section: { maxOccur: 1, options: {} },
        part: { maxOccur: 1, options: {} },
        paragraph: { maxOccur: 1, options: {} },
        chapter: { maxOccur: 1, options: {} },
        title: { maxOccur: 1, options: {} },
        article: { maxOccur: 1, options: {} },
        book: { maxOccur: 1, options: {} },
        tome: { maxOccur: 1, options: {} },
        division: { maxOccur: 1, options: {} },
        list: { maxOccur: 1, options: {} },
        point: { maxOccur: 1, options: {} },
        indent: { maxOccur: 1, options: {} },
        alinea: { maxOccur: 1, options: {} },
        rule: { maxOccur: 1, options: {} },
        subrule: { maxOccur: 1, options: {} },
        proviso: { maxOccur: 1, options: {} },
        subsection: { maxOccur: 1, options: {} },
        subpart: { maxOccur: 1, options: {} },
        subparagraph: { maxOccur: 1, options: {} },
        subchapter: { maxOccur: 1, options: {} },
        subtitle: { maxOccur: 1, options: {} },
        subdivision: { maxOccur: 1, options: {} },
        subclause: { maxOccur: 1, options: {} },
        sublist: { maxOccur: 1, options: {} },
        level: { maxOccur: 1, options: {} },
        transitional: { maxOccur: 1, options: {}
      },
    }},
  };
  
  private static ELEMENTS: string[] = [
    
  ];

  static getRegExp():RegExp {
    return new RegExp(`<${ANhier.ELEMENTS.join('|')}>`);
  }
}

