import React from "react";

export default function Navbar() {
  return (
    <nav className="px-2">
      <div className="">
        <ul className="flex flex-col p-4 sm:flex-row space-x-8 mt-0 text-sm font-medium">
          <li>
            <a href="/developer-portfolio" class="block py-2 pl-3 pr-4 text-white rounded bg-transparent p-0 hover:text-[#49AB8C]">
              Parker Mathis
            </a>
          </li>

          {/* <li>
            <a
              href="/About"
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-[#49AB8C] dark:hover:bg-gray-700 dark:hover:text-[#49AB8C] md:dark:hover:bg-transparent"
            >
              About
            </a>
          </li> */}
          <li>
            <a href="/developer-portfolio/portfolio" className="block py-2 pl-3 pr-4 text-white rounded bg-transparent p-0 hover:text-[#49AB8C]">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/developer-portfolio/contact" className="block py-2 pl-3 pr-4 text-white rounded bg-transparent p-0 hover:text-[#49AB8C]">
              Contact
            </a>
          </li>

          {/* <li>
            <a href="/resume" className="block py-2 pl-3 pr-4 text-white rounded bg-transparent p-0 hover:text-[#49AB8C]">
              Resume
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
