import NFT from "./typeNFT";
import removePandasFromCollection from "./removePandasFromCollection";

const panda1NFT: NFT = { name: "panda for sure", imageURL: "www.com" };
const panda2NFT: NFT = { name: "sum kek pandas", imageURL: "pic.usa" };
const panda3NFT: NFT = { name: "pandaize.solol", imageURL: "ggl.irs" };
const panda4NFT: NFT = { name: "PANDAPANDAAHHH", imageURL: "howdo.y" };
const oneNFT: NFT = { name: "donkey teeth", imageURL: "www.com" };
const secNFT: NFT = { name: "whos you dad", imageURL: "pic.usa" };

it('checks collection for nft with name matching panda regardless of case and remove that nft from the collections', function () {
  const arrayWithPanda: NFT[] = [oneNFT, secNFT, panda1NFT, panda2NFT, panda3NFT, panda4NFT];
  const expectedArray: NFT[] = [oneNFT, secNFT];
  expect(removePandasFromCollection(arrayWithPanda)).toStrictEqual(expectedArray);
})