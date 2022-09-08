export default function ConnectWallet() {
  return (
    <div className="pt-10 grid place-items-center">
      <h1 className="text-2xl font-semibold ">Connect wallet</h1>
      <div className="mt-10">
        <button
          type="button"
          className="text-white bg-first hover:bg-second font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 "
        >
          Connect wallet
        </button>

        <div>
          <ul>
            <li>
              View only permission. We will never do anything withot your
              approval
            </li>
            <li>Trusted by 0 persons</li>
            <li>Lens protocol</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
