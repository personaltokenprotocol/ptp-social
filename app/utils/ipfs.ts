// delete 'ipfs://' from string
const removeIpfsPrefix = (str: string): string => str.replace("ipfs://", "");

// add at beginning of string https://lens.infura-ipfs.io/ipfs/
const addIpfsPrefix = (str: string): string =>
  `https://lens.infura-ipfs.io/ipfs/${str}`;

export const transformToIpfsUrl = (str: string): string => {
  // check if string starts with ipfs://
  if (str.startsWith("ipfs://")) {
    const ipfsHash = removeIpfsPrefix(str);

    return addIpfsPrefix(ipfsHash);
  }

  return str;
};
