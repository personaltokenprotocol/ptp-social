import { Link, useSubmit } from "@remix-run/react";
import { defaultWallet } from "~/blockchain/constast";

type NavbarLoggedProps = {
  address: string;
};

export default function NavbarLogged({ address }: NavbarLoggedProps) {
  const submit = useSubmit();

  const handleLogoutMetamask = () => {
    const formData = new FormData();

    formData.append("address", address);
    formData.append("connected", "false");

    submit(formData, {
      action: "/dashboard/?index",
      method: "post",
      encType: "application/x-www-form-urlencoded",
      replace: true,
    });
  };

  return (
    <nav className="bg-bg border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/login">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden md:block"></span>
        </Link>
        <div className="flex md:order-2">
          {address != defaultWallet.address && (
            <button
              type="button"
              className="text-white bg-first hover:bg-second font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
            >
              {address.slice(0, 6)}...{address.slice(-4)}
            </button>
          )}

          <button
            type="button"
            className="text-white bg-third hover:bg-first font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 sm:block"
            onClick={handleLogoutMetamask}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
