import { NavLink } from "react-router-dom";

function Header({ handleLogout, isAdmin }) {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray">
      <div className="container ml-2 flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="">
          <span className="italic text-dark-green text-xl whitespace-nowrap dark:text-white">
            The Kitchen is yours, chef!
          </span>
        </a>

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray dark:hover:bg-gray-light dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="flex hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              {isAdmin && (
                <NavLink
                  className="navLinks"
                  to="/admin-view"
                  href="#"
                  className="block py-2 pr-4 pl-3 text-black hover:text-green hover:bg-light-blue md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Admin
                </NavLink>
              )}
            </li>
            <li>
              <NavLink
                className="navLinks"
                to=""
                href="#"
                className=" justify-center py-2 pr-4 pl-3 text-black hover:text-green hover:bg-light-blue md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Batch Maker
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navLinks"
                to="/question-form"
                href="#"
                className="block py-2 pr-4 pl-3 text-black hover:text-green hover:bg-light-blue md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Add Recipe
              </NavLink>
            </li>

            <li>
              <NavLink
                className="navLinks"
                to="/leaderboard"
                href="#"
                className="block py-2 pr-4 pl-3 text-black hover:text-green hover:bg-light-blue md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Profile
              </NavLink>
            </li>

            <li>
              <a
                href="#"
                onClick={() => handleLogout()}
                className="block py-2 pr-4 pl-3 text-black hover:text-green hover:bg-light-blue md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
