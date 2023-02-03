import NFT from "./typeNFT";

function collectionHasNft(collection: NFT[], nft: NFT): boolean {
  if (collection.includes(nft)) {
    return true;
  } else {
    return false;
  }
}

export default collectionHasNft;
