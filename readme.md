# Wallaby-Jest-Typeorm

Demo project where Typeorm is tested using Jest, however wallaby won't work.

To build and run the code `yarn start`

To run Jest tests `yarn test` 

## Issue

When Wallaby is running the tests, Typeorm don't seem to be able to resolve the relations between the the entities. From my experience digging around in the Typeorm sourcecode the error Appears in [`typeorm/metadata-builder/EntityMetadataBuilder.ts`](https://github.com/typeorm/typeorm/blob/master/src/metadata-builder/EntityMetadataBuilder.ts#L646). Where it traverses the collected entity metadata, comparing the class constructors looking for the relation type, this is where jest will find the correct relation type whilst wallaby will not.
