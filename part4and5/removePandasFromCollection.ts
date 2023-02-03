import NFT from "./typeNFT";

function removePandasFromCollection(collection: NFT[]): NFT[] {
  return collection.filter(function (nft) {
    return !nft.name.toLowerCase().includes("panda");
  });
}

export default removePandasFromCollection;
