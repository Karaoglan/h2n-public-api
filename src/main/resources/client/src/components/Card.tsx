import React, {FunctionComponent} from "react";
import {H2NPost} from "../pages/News";

export const Card: FunctionComponent<H2NPost> = ({id, summarizeText, postText, clickHandler}) => {
  const image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';

  return (
    <div onClick={clickHandler} className="flex bg-white w-full mb-5 shadow-md rounded-2xl">
      <div className="p-2 w-5/12">
        <div className="w-full h-full bg-contain bg-no-repeat bg-center"
             style={{backgroundImage: `url(${image})`}}></div>
      </div>
      <div className="w-7/12 p-5">
        <h1 className="md:text-xl">{id} {summarizeText ? ' - ' + summarizeText : ''}</h1>
        <div className="mt-4" dangerouslySetInnerHTML={{__html: postText}}></div>
      </div>
    </div>
  );
}
