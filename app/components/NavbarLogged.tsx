import { Link } from "@remix-run/react";

type NavbarLoggedProps = {
  address: string;
};

export default function NavbarLogged({ address }: NavbarLoggedProps) {
  return (
    <nav className="bg-bg border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/login">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden md:block"></span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-first hover:bg-second font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
          >
            {address}
          </button>

          <Link to="/login">
            <button
              type="button"
              className="text-white bg-third hover:bg-first font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
