import { Generator } from '../src/Engine/Generator';
import NkyimuNodeParser from '../src/Engine/Parsers/NkyimuNodeParser';
import * as Elements from '../src/Elements';
import { AbstractNode } from '../src/Abstracts';

/**
 * Parser initialisation test
 */
describe('Node Parser Initialisation', () => {
  it('initializes', () => {
    const parser = new NkyimuNodeParser();

    expect(parser).toBeInstanceOf(NkyimuNodeParser);
  });

  it('returns a promise<array> from generator', () => {
    const generator = new Generator();
    const node = new Elements.Body();
    const output = generator.toHTMLNodeArray(node);

    expect(output).toBeInstanceOf(Promise);
  });

  it('returns a promise<string> from generator', () => {
    const generator = new Generator();
    const node = new Elements.Body();
    const output = generator.toHTMLString(node);

    expect(output).toBeInstanceOf(Promise);
  });

  it('return value is html element', () => {
    const generator: Generator = new Generator();
    const node = new Elements.Body();

    expect.assertions(1);
    return expect(generator.toHTMLNodeArray(node)).resolves.toBeInstanceOf(Array);
  });

  it('return value is string', () => {
    const generator: Generator = new Generator();
    const node = new Elements.Body();

    expect.assertions(1);
    return expect(generator.toHTMLString(node)).resolves.toMatch(/^<p/);
  });
});

describe('Node Parser Array Test', () => {
  let nkyimuNode: AbstractNode;
  let generator: Generator;

  beforeAll(() => {
    generator = new Generator();
    nkyimuNode = createGenericContentNode();
  });

  it('returns an array', () => {
    expect.assertions(1);
    return expect(generator.toHTMLNodeArray(nkyimuNode)).resolves.toBeInstanceOf(Array);
  });

  it('first paragraph has no margin', async () => {
    expect.assertions(2);
    let nodes = await generator.toHTMLNodeArray(nkyimuNode);
    let { style } = nodes[0];
    expect(style.marginLeft).toBeDefined();
    expect(style.marginLeft).toEqual('');
  });

  it('has element name chapter', async () => {
    expect.assertions(1);
    const nodes = await generator.toHTMLNodeArray(nkyimuNode);
    let name = nodes[0].getAttribute('data-element');
    expect(name).toEqual('chapter');
  });
});

describe('Node Parser String Basic Test', () => {
  let nkyimuNode: AbstractNode;
  let generator: Generator;

  beforeAll(() => {
    generator = new Generator();
    nkyimuNode = createGenericContentNode();
  });

  it('returns a string', () => {
    expect.assertions(1);
    return expect(generator.toHTMLString(nkyimuNode)).resolves.toMatch(/^<p/);
  });

  it('check string', async () => {
    const string = await generator.toHTMLString(nkyimuNode);
    console.log(string);
  });
});

describe('Node Parser String Advanced Test', () => {
  let nkyimuNode: AbstractNode;
  let generator: Generator;

  beforeAll(() => {
    generator = new Generator();
    nkyimuNode = createAdvancedContentNode();
  });

  it('returns a string', () => {
    expect.assertions(1);
    return expect(generator.toHTMLString(nkyimuNode)).resolves.toMatch(/^<p/);
  });

  it('check string', async () => {
    const string = await generator.toHTMLString(nkyimuNode);
    console.log(string);
  });
});

const createGenericContentNode = () => {
  const main = new Elements.Chapter();
  const num = new Elements.Num();
  const heading = new Elements.Heading();
  const content = new Elements.Content();
  const p = new Elements.P();

  num.appendChild(Generator.createNode('', '1'));
  heading.appendChild(Generator.createNode('', 'Definitions'));
  num.appendChild(Generator.createNode('', 'Chapter test content'));

  content.appendChild(p);
  main.appendChild(num);
  main.appendChild(heading);
  main.appendChild(content);
  return main;
}

const createAdvancedContentNode = () => {
  const main = new Elements.Chapter();
  const child = new Elements.Section();
  const num = new Elements.Num();
  const heading = new Elements.Heading();
  const childNum = new Elements.Num();
  const childHeading = new Elements.Heading();
  const content = new Elements.Content();
  const intro = new Elements.Intro();
  const p = new Elements.P();
  const introP = new Elements.P();

  num.appendChild(Generator.createNode('', '1'));
  heading.appendChild(Generator.createNode('', 'Definitions'));
  p.appendChild(Generator.createNode('', 'Section test content'));
  introP.appendChild(Generator.createNode('', 'Chapter Introduction'));
  childHeading.appendChild(Generator.createNode('', 'The Section Heading'));
  childNum.appendChild(Generator.createNode('', '1'));

  content.appendChild(p);
  intro.appendChild(introP);
  child.appendChild(childNum);
  child.appendChild(childHeading);
  child.appendChild(content);
  main.appendChild(num);
  main.appendChild(heading);
  main.appendChild(intro);
  main.appendChild(child);
  return main;
}
