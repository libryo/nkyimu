# nkyimu
A library written in TypeScript that allows creating self validating AkomaNtoso documents


## Background of the Name
The Akoma Ntoso LegalDocML standard was named after the West African symbol by the same name, meaning "linked hearts". We chose to use another Adinkra symbol NKYIMU, which is the symbol of skillfulness and precision: http://www.adinkra.org/htmls/adinkra/nkyimu.htm
This library will hopefully help in creating AkomaNtoso documents with more skill and precision.

## Examples
You can generate the AkN document either manually or using the auto-generator. Both examples are provided in the examples folder.

To generate a Nkyimu node using the `nodeName`, use the available engine module:

```
import { Engine, Helpers } from 'nkyimu';

const section = Engine.Generator.createNode('section');

const text = Engine.Generator.createNode('', 'Text node over here');
```

## Contribution
After making any addition, modification or removal of the source files, you will need to regenerate the required index files and the element map that is used to link an AkN element and a Nkyimu element:

Generate the index files and compile:

```
yarn compile
```

To clean all the generated files run:

```
yarn clean
```
