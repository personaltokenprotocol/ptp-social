import { ethers } from "ethers";

export const authenticate = async (
  address: string,
  signature: string,
  nonce: number
) => {
  let authenticated = false;

  const decodeAddress = ethers.utils.verifyMessage(nonce.toString(), signature);

  if (decodeAddress === address) {
    authenticated = true;
  }

  return authenticated;
};
