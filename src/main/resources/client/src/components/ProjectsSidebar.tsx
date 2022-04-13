import React, {FunctionComponent} from "react";
import {Link} from "react-router-dom";

export type ModalParams = {
  closeCollapse?: boolean,
  clickCollapse: React.EventHandler<any>;
}

export const ProjectsSidebar: FunctionComponent<ModalParams> = ({closeCollapse = false, clickCollapse}) => {

  return (
    <div>
      <button type="button"
              onClick={(e) => {
                clickCollapse(e);
              }}
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-500"
              aria-controls="dropdown-example">
        <span className="flex-1 ml-3 text-gray-900 text-sm text-left whitespace-nowrap hover:text-white"
        >Projects</span>
        <svg className={'w-6 h-6 ' + (closeCollapse ? 'transform rotate-180 transition duration-500 ease-in-out' : '')}
             fill="#000" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
        </svg>
      </button>
      <ul className={(!closeCollapse ? "hidden" : "") + " py-2 space-y-2"}>
        <li>
          <Link to="/projects/cafe-restaurant"
                className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:text-white hover:bg-gray-500">
            Caf&eacute; & Restaurant
          </Link>
        </li>
        <li>
          <Link to="/projects/hotel"
                className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:text-white hover:bg-gray-500">
            Otel
          </Link>
        </li>
        <li>
          <Link to="/ofis"
                className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:text-white hover:bg-gray-500">
            Ofis
          </Link>
        </li>
        <li>
          <Link to="/rekreasyon"
                className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:text-white hover:bg-gray-500">
            Rekreasyon
          </Link>
        </li>
        <li>
          <Link to="/projects/residental"
                className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:text-white hover:bg-gray-500">
            Residental
          </Link>
        </li>
        <li>
          <Link to="/retail"
                className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:text-white hover:bg-gray-500">
            Retail
          </Link>
        </li>
      </ul>
    </div>
  );
}
