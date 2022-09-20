import type WalletConnect from "@walletconnect/client";
import type { IInternalEvent } from "@walletconnect/types";

function onConnect(payload: IInternalEvent): string {
  const { accounts } = payload.params[0];

  const address = accounts[0];

  return address;
}

function onSessionUpdate(payload: IInternalEvent): string {
  const { accounts } = payload.params[0];

  const address = accounts[0];

  return address;
}

export async function subscribeToEvents(
  connector: WalletConnect
): Promise<any> {
  connector.on("session_update", (error, payload) => {
    if (error) {
      throw error;
    }

    console.log("session_update", payload);

    const address = onSessionUpdate(payload);

    return address;
  });

  connector.on("connect", (error, payload) => {
    if (error) {
      throw error;
    }

    console.log("connect", payload);

    const address = onConnect(payload);

    return address;
  });

  connector.on("disconnect", (error, payload) => {
    if (error) {
      throw error;
    }

    console.log("disconnect", payload);
  });
}
