import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

function checkMetamaskAvailability(): boolean {
  console.log("[blockchain][metamask][checkMetamaskAvailability]");
  const { ethereum } = window;

  if (!ethereum) {
    throw new Error("Metamask is not available");
  }

  return false;
}

export async function loginWithMetamask() {
  console.log("[blockchain][metamask][loginWithMetamask]");

  checkMetamaskAvailability();

  const [address] = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  console.log("[blockchain][metamask][loginWithMetamask] address", address);

  return address;
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
