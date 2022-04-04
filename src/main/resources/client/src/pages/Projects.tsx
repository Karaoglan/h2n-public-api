import React, {FunctionComponent, useState} from "react";
import {Link} from "react-router-dom";

export const ProjectsSidebar: FunctionComponent = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div>
      <button type="button"
              onClick={() => setCollapse(!collapse)}
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example">
        <svg
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"></path>
        </svg>
        <span className="flex-1 ml-3 text-gray-900 text-left whitespace-nowrap hover:text-white"
        >Projects</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
        </svg>
      </button>
      <ul className={(!collapse ? "hidden" : "") + " py-2 space-y-2"}>
        <li>
          <Link to="/cafe-restaurant"
                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700">
            Caf&eacute; & Restaurant
          </Link>
        </li>
        <li>
          <Link to="/otel"
                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700">
            Otel
          </Link>
        </li>
        <li>
          <Link to="/ofis"
                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700">
            Ofis
          </Link>
        </li>
        <li>
          <Link to="/rekreasyon"
                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700">
            Rekreasyon
          </Link>
        </li>
        <li>
          <Link to="/residental"
                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700">
            Residental
          </Link>
        </li>
        <li>
          <Link to="/retail"
                className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-white dark:hover:bg-gray-700">
            Retail
          </Link>
        </li>
      </ul>
    </div>
  );
}
