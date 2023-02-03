# Day 20: 

## JEST SETUP:

1. Create a new folder

2. `npm init`

3. `npm install --save-dev jest ts-jest @types/jest`

4. So we can use `npm run test` to run jest, go to package.json, add a `test` script that looks like this:

    ```ts
    "scripts": {
      "test": "jest"
    },
    ```

5. create the basic `add.ts` file, make sure you can run it with `tsx add.js`.

6. run `npx ts-jest config:init` to create the `jest.config.js` file that lets jest know we are using typescript.

7. create the basic `add.test.ts` file, make sure you can run it with `npm run test`.

## HOMEWORK:

Create these functions, and then tests for these functions:

1. ~~Addition, multiplication, substraction, division.~~

2. ~~greaterThan, which returns true if  X is greater than Y.~~

3. ~~lessThan, which returns true is X is less than Y.~~

4. ~~collectionHasNft, which takes an array of NFTs which is a custom object type that has two parameters, name and imageURL, and  returns true if the provided collection (array of NFTs) includes the provided nft. collectionHasNft(collection, nft)~~

5. removePandasFromCollection, which takes an array of NFTs which is the same NFT custom object type, and removes any nfts that have Panda in their name, and returns the new array with no pandas in it.

6. truncateString, which takes a string and returns the first maxLength characters of it. syntax like truncateString(string, maxLength) if the string is longer than maxLength, otherwise, it returns the string itself.

7. isHorseman, takes a string, throws an error if the string is not horseman, otherwise returns true.

8. create a User type with a property favoriteShows, and a function isFavorite that takes a user, and a show name. Return true if the user has favorited the show, false if not. However, if the user has more than 10 favorite shows, the function should throw an error saying too many favorite shows, im not checking, fml. If the user has 2 or less favorite shows, the function should throw an error saying not worth my time to check 
