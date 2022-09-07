import { loginWithMetamask } from "~/blockchain/metamask";

export default function Login() {
  return (
    <div className="p-16">
      <button className="bg-bg rounded p-2" onClick={loginWithMetamask}>
        Connect Wallet
      </button>
    </div>
  );
}
