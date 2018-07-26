import { Section } from "../src/Elements/Section";
import { AbstractNode } from "../src/Abstract/AbstractNode";

/**
 * Section test
 */
describe("Section test", () => {
  it("can instantiate and is of type AbstractNode", () => {
    const section  = new Section();

    expect(section).toBeInstanceOf(AbstractNode);
  });

  it("can instantiate append another node", () => {
    const section  = new Section();
    const newSection  = new Section();

    section.appendChild(newSection);

    expect(section.getChildren().length).toBe(1);
  });
});