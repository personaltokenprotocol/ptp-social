import { loginWithMetamask } from "~/blockchain/metamask";

export default function Sign() {
  const handleLogin = async () => {
    // @ts-ignore
    await loginWithMetamask();
  };

  return (
    <div className="">
      <button
        className="bg-second text-white font-bold rounded p-2"
        onClick={handleLogin}
      >
        <p>Connect with Metamask</p>
      </button>
    </div>
  );
}
