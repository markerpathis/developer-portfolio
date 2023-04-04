import React from "react";

export default function Navbar() {
  return (
    <nav className="px-2">
      <div className="">
        <ul className="flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
          <li>
            <a
              href="/"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent dark:hover:text-[#49AB8C]"
              aria-current="page"
            >
              Parker Mathis
            </a>
          </li>

          <li>
            <a
              href="/About"
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#49AB8C] dark:hover:bg-gray-700 dark:hover:text-[#49AB8C] md:dark:hover:bg-transparent"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#49AB8C] dark:hover:bg-gray-700 dark:hover:text-[#49AB8C] md:dark:hover:bg-transparent"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#49AB8C] dark:hover:bg-gray-700 dark:hover:text-[#49AB8C] md:dark:hover:bg-transparent"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/resume"
              className="block py-2 pl-3 pr-4 text-whiterounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#49AB8C] dark:hover:bg-gray-700 dark:hover:text-[#49AB8C] md:dark:hover:bg-transparent"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
