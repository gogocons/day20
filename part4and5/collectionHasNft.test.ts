import NFT from "./typeNFT";
import collectionHasNft from "./collectionHasNft";

const oneNFT: NFT = { name: "donkey teeth", imageURL: "www.com" };
const secNFT: NFT = { name: "whos you dad", imageURL: "pic.usa" };
const thdNFT: NFT = { name: "wtf is dat ?", imageURL: "ggl.irs" };
// this nft is not in the collection
const fthNFT: NFT = { name: "another one!", imageURL: "howdo.y" };

const firstCollection: NFT[] = [oneNFT, secNFT, thdNFT];

it("returns true if NFT is in collection", function () {
  expect(collectionHasNft(firstCollection, oneNFT)).toBe(true);
});

it("returns false if NFT is NOT in collection", function () {
  expect(collectionHasNft(firstCollection, fthNFT)).toBe(false);
});
