import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

export async function signWithMetamask() {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const address = await signer.getAddress();

    const nonce = Math.floor(Math.random() * 1000000);

    const signature = await signer.signMessage(nonce.toString());

    return [address, signature, nonce];
  }

  throw new Error("Metamask: not wallet address found");
}

export async function loginWithMetamask() {
  console.log("[blockchain][metamask] loginWithMetamask");

  const [wallet] = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  return wallet;
}
