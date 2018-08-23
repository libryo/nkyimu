const fs = require('fs');
const path = require('path');
const { JSDOM } = require("jsdom");

global.Document = class Document {
  constructor() {
    return (new JSDOM).window.document;
  }
}

class Generator {
  constructor () {
    this.directories = [
      './Abstracts',
      './AttributeGroups',
      './Attributes',
      './ComplexTypes',
      './Elements',
      './Interfaces',
      './SimpleTypes',
    ];
  }

  handle() {
    const args = process.argv.slice(2);
    if (args.length > 1) {
      console.log('This script only allows none or one argument.');
      process.exit(1);
    }

    if (args.length === 0) {
      this.generate();
      return;
    }

    switch (args[0]) {
      case 'clean':
        this.clean();
        break;
      case 'elements':
        this.generateMaps();
        break;
    }
  }

  generate() {
    this.clean();

    this.directories.forEach((directory) => {
      const fullPath = path.resolve(__dirname, directory);
      const files = this.extractFiles(fullPath);

      this.generateIndexFiles(fullPath, files);
    });

    this.generateCommonIndex();
  }

  clean() {
    this.directories.forEach((directory) => {
      directory = directory.substr(-1) === '/' ? directory : `${directory}/`;
      const file = path.resolve(__dirname, directory + 'index.ts')
      
      fs.unlink(file, (err) => {});
    });

    fs.unlink(path.resolve(__dirname, 'index.ts'), (err) => {});
    fs.unlink(path.resolve(__dirname, 'elementMap.ts'), (err) => {});
    fs.unlink(path.resolve(__dirname, 'attributeMap.ts'), (err) => {});
  }

  extractFiles(dir, map = []) {
    dir = dir.substr(-1) === '/' ? dir : `${dir}/`;
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      if (fs.statSync(dir + file).isDirectory()) {
        map = this.extractFiles(dir + file, map);
      }
      else {
        if (file === 'index.ts') return;

        map.push(`${dir}${file.replace('.ts', '')}`);
      }
    });

    return map;
  }

  generateIndexFiles(directory, fileList) {
    directory = directory.substr(-1) === '/' ? directory : `${directory}/`;
  
    const content = fileList.map((file) => {
      file = file.replace(directory, '');
  
      return `export { ${path.basename(file)} } from './${file}';`;
    }).join("\n");
  
    fs.writeFile(`${directory}index.ts`, content, (err) => {
      if (err) throw err;
    });
  }

  generateCommonIndex(includeMaps = false) {
    const main = path.resolve(__dirname, 'index.ts');
    const content = this.directories
      .map(dir => `import * as ${dir.replace('./', '')} from '${dir}';`);

    if (includeMaps) {
      content.push("import { elementMap } from './elementMap';");
      content.push("import { attributeMap } from './attributeMap';");
    }

    content.push('');
    const exportList = this.directories.map(dir => dir.replace('./', ''));

    if (includeMaps) {
      exportList.push('elementMap');
      exportList.push('attributeMap');
    }

    content.push(`export { ${exportList.join(', ')} };`);

    fs.writeFile(main, content.join("\n"), (err) => {
      if (err) throw err;
    });
  }

  generateMaps() {
    this.generateElementsNodeMap();
    this.generateAttributesMap();

    this.generateCommonIndex(true);
  }

  generateElementsNodeMap() {
    if (!fs.existsSync(path.resolve(__dirname, '../build/src/Elements'))) {
      throw new Error('Please compile first before generating the node map.')
    }

    const fileList = this.extractFiles(path.resolve(__dirname, './Elements'));
    const classes = require(`../build/src/Elements`);
    const map = [];

    fileList.map((file) => {
      const relativePath = path.relative(__dirname, file);
      const className = path.basename(relativePath);
      const currentEl = new classes[className];
      if (!currentEl.getNodeName) {
        console.log(currentEl);
      }

      map.push({
        name: currentEl.getNodeName(),
        className: className,
      })
    });

    const content = [
      'export const elementMap: { [key: string]: string } = {',

      ...map.map(e => `  '${e.name}': '${e.className}',`),

      '};',
    ];

    const dest = path.resolve(__dirname, 'elementMap.ts');

    fs.writeFile(dest, content.join("\n"), (err) => {
      if (err) throw err;
    });
  }

  generateAttributesMap() {
    if (!fs.existsSync(path.resolve(__dirname, '../build/src/Attributes'))) {
      throw new Error('Please compile first before generating the node map.')
    }

    const fileList = this.extractFiles(path.resolve(__dirname, './Attributes'));
    const classes = require(`../build/src/Attributes`);
    const map = [];

    fileList.map((file) => {
      const relativePath = path.relative(__dirname, file);
      const className = path.basename(relativePath);
      let currentAttrs = classes[className];

      if (!currentAttrs.getName) {
        console.log(currentAttrs);
      }

      map.push({
        name: currentAttrs.getName(),
        className: className,
      });
    });

    const content = [
      'export const attributeMap: { [key: string]: string } = {',

      ...map.map(e => `  '${e.name}': '${e.className}',`),

      '};',
    ];

    const dest = path.resolve(__dirname, 'attributeMap.ts');

    fs.writeFile(dest, content.join("\n"), (err) => {
      if (err) throw err;
    });
  }
}

(new Generator).handle();

