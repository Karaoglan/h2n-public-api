import React, {FunctionComponent, useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const CorporateSidebar: FunctionComponent = () => {
  const [closeCollapse, setCloseCollapse] = useState(true);
  const location = useLocation()
  const [active, setActive] = useState(location.pathname.includes('/corporate'));
  const {t} = useTranslation();

  const openRotate = 180;
  const closeRotate = 360

  const inActiveClassName = 'flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-500 hover:text-white';
  const activeClassName = `${inActiveClassName} font-black`;

  useEffect(() => {
    if (!location.pathname.includes('/corporate')) {
      setActive(false);
    }

    if (location.pathname.includes('/corporate')) {
      setActive(true);
    }
  }, [location])

  function getMaxHeightForActive() {
    return active ? 'max-h-80' : 'max-h-9';
  }

  function getCollapseCss() {
    return `transform rotate-${!closeCollapse && !active ? openRotate : closeRotate} transition duration-500 ease-in-out`
  }

  return (
    <div onMouseOver={() => setCloseCollapse(false)} onMouseLeave={() => setCloseCollapse(true)}
         className={`${getMaxHeightForActive()} hover:max-h-80 relative overflow-hidden transition-all duration-700`}>
      <button type="button"
              className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-500"
              aria-controls="dropdown-example">
        <span className="flex-1 ml-3 text-sm text-gray-900 text-left whitespace-nowrap hover:text-white"
        >Kurumsal</span>
        <svg className={`w-6 h-6 ${getCollapseCss()}`}
             fill="#000" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
        </svg>
      </button>
      <ul className="py-2 space-y-2">
        <li>
          <NavLink to="/corporate/about-us"
                   className={({isActive}) =>
                     isActive ? activeClassName : inActiveClassName
                   }>
            {t('aboutUs')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/corporate/services"
                   className={({isActive}) =>
                     isActive ? activeClassName : inActiveClassName
                   }>
            {t('services')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/corporate/team"
                   className={({isActive}) =>
                     isActive ? activeClassName : inActiveClassName
                   }>
            {t('team')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/corporate/quality"
                   className={({isActive}) =>
                     isActive ? activeClassName : inActiveClassName
                   }>
            {t('quality')}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
