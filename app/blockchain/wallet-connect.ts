import type WalletConnect from "@walletconnect/client";

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
  });

  connector.on("disconnect", (error, payload) => {
    if (error) {
      throw error;
    }

    console.log("disconnect", payload);
  });
}
