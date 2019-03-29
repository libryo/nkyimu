import { Generator } from '../src/Engine/Generator';
import NkyimuNodeParser from '../src/Engine/Parsers/NkyimuNodeParser';
import * as Elements from '../src/Elements';
import * as data from './__data__/parser-data';
import { AbstractNode } from '../src/Abstracts';

/**
 * Parser initialisation test
 */
describe('Node Parser Initialisation', () => {
  it('initializes', () => {
    const parser: NkyimuNodeParser = new NkyimuNodeParser();

    expect(parser).toBeInstanceOf(NkyimuNodeParser);
  });

  it('array function returns a promise<array> from generator', () => {
    const generator = new Generator();
    const node = new Elements.Body();
    const output = generator.toHTMLElementArray(node);

    expect(output).toBeInstanceOf(Promise);
  });

  it('array function resolve is array', () => {
    const generator: Generator = new Generator();
    const node = new Elements.Body();

    expect.assertions(1);
    return expect(generator.toHTMLElementArray(node)).resolves.toBeInstanceOf(Array);
  });

  it('string function returns a promise<string> from generator', () => {
    const generator = new Generator();
    const node = new Elements.Body();
    const output = generator.toHTMLString(node);

    expect(output).toBeInstanceOf(Promise);
  });


  it('string function resolve is string', () => {
    const generator: Generator = new Generator();
    const node = new Elements.Body();

    expect.assertions(1);
    return expect(generator.toHTMLString(node)).resolves.toMatch(/^<p/);
  });

  it('can change parser indentation level', () => {
    expect.assertions(2);
    const parser: NkyimuNodeParser = new NkyimuNodeParser();
    expect(parser.getHtmlIndentation()).toEqual(30);
    parser.setHtmlIndentation(60);

    expect(parser.getHtmlIndentation()).toEqual(60);
  });
});

/**
 * Tests the array output from the parser
 */
describe('Node Parser Hierarchy Array Test', () => {
  let nkyimuNode: AbstractNode;
  let generator: Generator;

  beforeAll(() => {
    generator = new Generator();
    nkyimuNode = generator.fromText(data.hierarchyTestXml);;
  });

  it('resolves to an array', () => {
    expect.assertions(1);
    return expect(generator.toHTMLElementArray(nkyimuNode)).resolves.toBeInstanceOf(Array);
  });

  it('returns correct number of elements', async () => {
    expect.assertions(1);
    let nodes = await generator.toHTMLElementArray(nkyimuNode);

    expect(nodes.length).toEqual(9);
  });

  it('elements are at correct level', async () => {
    expect.assertions(1);
    const levelMap: number[] = [0, 0, 1, 1, 1, 1, 2, 2, 0];
    const parser = new NkyimuNodeParser();
    const output: number[] = [];
    
    let nodes = await generator.toHTMLElementArray(nkyimuNode);
    nodes.forEach((item) => {
      output.push(parser.getLevelFromMargin(item));
    });

    expect(output).toEqual(levelMap);
  });

  it('elements have correct name', async () => {
    expect.assertions(1);
    const nameMap: Array<string|null> = [
      'chapter', 
      null, 
      'section', 
      null, 
      'section',
      null,
      'subsection',
      null,
      null,
    ];
    const output: Array<string|null> = [];
    const nodes = await generator.toHTMLElementArray(nkyimuNode);

    nodes.forEach((item) => {
      output.push(NkyimuNodeParser.getNameFromElement(item));
    });
    
    expect(output).toEqual(nameMap);
  });
});

/**
 * Tests the string output from the parser
 */
describe('Node Parser Hierarchy String Test', () => {
  let nkyimuNode: AbstractNode;
  let generator: Generator;

  beforeAll(() => {
    generator = new Generator();
    nkyimuNode = generator.fromText(data.hierarchyTestXml);
  });

  it('resolves to a string', () => {
    expect.assertions(1);
    return expect(generator.toHTMLString(nkyimuNode)).resolves.toMatch(/^<p/);
  });

  it('string output is correct', async () => {
    return expect(generator.toHTMLString(nkyimuNode)).resolves.toMatch(data.hierarchyTestOutput);
  });
});
