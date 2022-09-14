import type WalletConnect from "@walletconnect/client";
import type { IInternalEvent } from "@walletconnect/types";

async function onConnect(payload: IInternalEvent) {
  const { chainId, accounts } = payload.params[0];

  const address = accounts[0];

  return { address, chainId };
  // ...
}

export async function subscribeToEvents(connector: WalletConnect) {
  connector.on("session_update", (error, payload) => {
    if (error) {
      throw error;
    }

    console.log("session_update", payload);
  });

  connector.on("connect", (error, payload) => {
    if (error) {
      throw error;
    }

    console.log("connect", payload);
    onConnect(payload);
  });

  connector.on("disconnect", (error, payload) => {
    if (error) {
      throw error;
    }

    console.log("disconnect", payload);
  });
}
