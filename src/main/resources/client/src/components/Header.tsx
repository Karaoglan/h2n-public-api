import React, {FunctionComponent, useRef, useState} from "react";
import worldIcon from "../assets/icons/world.svg";
import searchIcon from "../assets/icons/search.svg";
import sidebarActiveIcon from "../assets/icons/sidebarActive.svg";
import closeSidebarIcon from "../assets/icons/closeSidebar.svg";
import {StringBuilder} from "../utils/StringBuilder";

type Props = {
  currentLang: string,
  setLang: (lng: string) => void,
  hiddenSidebar: boolean,
  collapseSidebar: React.EventHandler<any>;
}

export const HeaderPage: FunctionComponent<Props> = ({currentLang, setLang, hiddenSidebar, collapseSidebar}) => {
  const inputReference = useRef<HTMLInputElement>(null);
  const [focus, setFocus] = useState(false);

  const changeFocus = (focus: boolean) => {
    setFocus(focus);
    if (focus) {
      inputReference.current?.focus();
    }
  }

  const inputClasses = StringBuilder.Builder()
    .append("rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline")
    .append(focus ? 'bg-white shadow appearance-none border' : '')
    .build();

  const active = (lang: string) => {
    return lang === currentLang ? 'font-black' : '';
  }

  return (
    <>
      <div className="flex basis-7/12 md:basis-8/12 items-center space-x-2">
        {hiddenSidebar &&
          <img onClick={collapseSidebar} src={sidebarActiveIcon} className="w-4 h-4 cursor-pointer hover:bg-gray-300"/>}
        {window.innerWidth <= 650 && !hiddenSidebar &&
          <img onClick={collapseSidebar} src={closeSidebarIcon} className="w-4 h-4 cursor-pointer hover:bg-gray-300"/>}
        <img onClick={() => changeFocus(true)} src={searchIcon} className="w-4 h-4 cursor-pointer hover:bg-gray-300"/>
        <form className="ml-2 grow">
          <input
            onBlur={() => changeFocus(false)}
            ref={inputReference}
            className={inputClasses}
            id="username" type="text"
            placeholder={focus ? 'Ara ...' : ''}/>
        </form>
      </div>
      <div className="flex flex-row items-center justify-end basis-5/12 md:basis-4/12">
        <div className="flex flex-row">
          <div className="divide-x-2 space-x-2 relative w-5 hover:w-28 overflow-hidden transition-all duration-700">
            <span onClick={() => setLang("DE")} className={`${active('DE')} cursor-pointer hover:font-black`}>DE</span>
            <span onClick={() => setLang("TR")}
                  className={`${active('TR')} cursor-pointer hover:font-black px-2`}>TR</span>
            <span onClick={() => setLang("ENG")}
                  className={`${active('ENG')} cursor-pointer hover:font-black px-2`}>ENG</span>
          </div>
          <div className="px-4">
            <img src={worldIcon} alt="world-icon" className="w-4 h-4"/>
          </div>
        </div>
      </div>
    </>
  );
}
