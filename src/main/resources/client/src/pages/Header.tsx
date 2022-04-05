import React, {FunctionComponent, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import worldIcon from "../components/icons/world.svg";
import searchIcon from "../components/icons/search.svg";
import {StringBuilder} from "../utils/StringBuilder";

type Props = {
  setLang: (lng: string) => void
}

export const HeaderPage: FunctionComponent<Props> = ({setLang}) => {
  const inputReference = useRef<HTMLInputElement>(null);
  const [focus, setFocus] = useState(false);
  const {t} = useTranslation();

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

  return (
    <>
      <div className="flex basis-3/5 items-center">
        <img onClick={() => changeFocus(true)} src={searchIcon} className="w-6 h-6 cursor-pointer hover:bg-gray-300"/>
        <form className="ml-2 w-96 ">
          <input
            onBlur={() => changeFocus(false)}
            ref={inputReference}
            className={inputClasses}
            id="username" type="text"
            placeholder={focus ? 'Search ...' : ''}/>
        </form>
      </div>
      <div className="basis-1/5">{t('welcome')}</div>
      <div className="flex basis-1/5 divide-x-2 space-x-2">
        <span onClick={() => setLang("de")} className="cursor-pointer hover:bg-gray-300">DE</span>
        <span onClick={() => setLang("tr")} className="cursor-pointer hover:bg-gray-300 px-2">TR</span>
        <span onClick={() => setLang("en")} className="cursor-pointer hover:bg-gray-300 px-2">EN</span>
        <div className="px-4">
          <img src={worldIcon} alt="world-icon" className="w-6 h-6"/>
        </div>
      </div>
    </>
  );
}
