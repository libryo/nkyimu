# nkyimu
A library written in TypeScript that allows creating self validating AkomaNtoso documents


## Background of the Name
The Akoma Ntoso LegalDocML standard was named after the West African symbol by the same name, meaning "linked hearts". We chose to use another Adinkra symbol NKYIMU, which is the symbol of skillfulness and precision: http://www.adinkra.org/htmls/adinkra/nkyimu.htm
This library will hopefully help in creating AkomaNtoso documents with more skill and precision.

## Contribution
After making any addition, modification or removal of the source files, you will need to regenerate the required index files and the element map that is used to link an AkN element and a Nkyimu element:

Generate the index files and compile:

```
yarn compile
```

Then generate the element maps:

```
yarn generate-maps
```

To clean all the generated files run:

```
yarn clean
```
