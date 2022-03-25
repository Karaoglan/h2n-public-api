import {FunctionComponent} from "react";
import {H2NPost} from "../App";
import './Card.css';

export const Card: FunctionComponent<H2NPost> = ({id, summarizeText, postText, clickHandler}) => {
//max-w-sm w-full lg:max-w-full lg:flex
  return (
    <div onClick={clickHandler} className="">
        CONTENT
      <div
        className="card-image h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="Woman holding a mug">
      </div>
      <div
        className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{id} {summarizeText ? ' - ' + summarizeText : ''}</div>
          <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{__html: postText}}></p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="https://v1.tailwindcss.com/img/jonathan.jpg"
               alt="Avatar of Jonathan Reinink"/>
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  );
}
