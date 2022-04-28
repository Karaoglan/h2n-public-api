import React, {FunctionComponent, useEffect, useRef, useState} from "react";
import worldIcon from "../assets/icons/world.svg";
import searchIcon from "../assets/icons/search.svg";
import sidebarActiveIcon from "../assets/icons/sidebarActive.svg";
import closeSidebarIcon from "../assets/icons/closeSidebar.svg";

type Props = {
  currentLang: string,
  setLang: (lng: string) => void,
  hiddenSidebar: boolean,
  collapseSidebar: React.EventHandler<any>;
}

export const HeaderPage: FunctionComponent<Props> = ({currentLang, setLang, hiddenSidebar, collapseSidebar}) => {
  const inputReference = useRef<HTMLInputElement>(null);
  const [focus, setFocus] = useState(false);
  const [languages, setLanguages] = useState(['DE', 'TR', 'ENG']);
  const [searchIconClicked, setSearchIconClicked] = useState(false);

  useEffect(() => {
    setLanguages(languages.sort((a, b) => currentLang === a ? -1 : 1));
  }, [currentLang]);

  useEffect(() => {
    if (searchIconClicked) {
      changeFocus(true);
    }
  }, [searchIconClicked])

  const changeFocus = (focus: boolean) => {
    setFocus(focus);
    if (focus) {
      inputReference.current?.focus();
    }
  }

  const active = (lang: string) => {
    return lang === currentLang ? 'font-black' : '';
  }

  return (
    <>
      <div className="flex basis-7/12 md:basis-8/12 items-center space-x-2">
        {hiddenSidebar &&
          <img alt="sidebar-active-icon" onClick={collapseSidebar} src={sidebarActiveIcon}
               className="w-4 h-4 cursor-pointer hover:bg-gray-300"/>}
        {window.innerWidth <= 650 && !hiddenSidebar &&
          <img alt="sidebar-inactive-icon" onClick={collapseSidebar} src={closeSidebarIcon}
               className="w-4 h-4 cursor-pointer hover:bg-gray-300"/>}
        <div className={`flex justify-between ${searchIconClicked ? 'w-64' : 'w-0'} transition-all duration-700`}>
          <form onSubmit={e => {
            e.preventDefault();
            setSearchIconClicked(false);
          }}>

            <div className={`relative flex flex-row-reverse items-center text-gray-400`}>
              <img alt="search-icon" src={searchIcon}
                   onClick={() => setSearchIconClicked(!searchIconClicked)}
                   className="w-4 h-4 cursor-pointer absolute ml-3"/>
              <input
                type="text"
                ref={inputReference}
                className={`rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white appearance-none ${searchIconClicked ? 'border-b' : ''}`}
                placeholder='Ara ...'/>
            </div>
          </form>
        </div>

      </div>
      <div className="flex flex-row items-center justify-end basis-5/12 md:basis-4/12">
        <div className="flex flex-row">
          <div className="divide-x-2 space-x-2 relative w-9 hover:w-32 overflow-hidden transition-all duration-700">
            {languages.map(lang => {
              return <span onClick={() => {
                setLang(lang);
              }} className={`${active(lang)} cursor-pointer hover:font-black px-2`}>{lang}</span>
            })}
          </div>
          <div className="px-4">
            <img src={worldIcon} alt="world-icon" className="w-4 h-4"/>
          </div>
        </div>
      </div>
    </>
  );
}
