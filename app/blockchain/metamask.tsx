import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

export async function loginWithMetamask() {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const address = signer.getAddress();

    const nonce = Math.floor(Math.random() * 1000000);

    const signature = await signer.signMessage(nonce.toString());

    return [address, signature, nonce];
  }

  throw new Error("Metamask: not wallet address found");
}
