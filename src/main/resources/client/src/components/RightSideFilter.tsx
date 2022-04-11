import React, {FunctionComponent} from "react";
import fullscreenIcon from "../assets/icons/fullscreen.svg";
import pdfIcon from "../assets/icons/pdf.svg";
import filterIcon from "../assets/icons/filter.svg";
import printerIcon from "../assets/icons/printer.svg";
import {ModalParams} from "./FullscreenModal";

export const RightSideFilter: FunctionComponent<ModalParams> = ({clickCloseHandler}) => {
  return (
    <div className="mt-32 space-y-1">
      <img onClick={clickCloseHandler} src={fullscreenIcon} className="w-6 h-6 cursor-pointer hover:bg-gray-300"/>
      <img src={filterIcon} className="w-6 h-6 cursor-pointer hover:bg-gray-300"/>
      <img src={pdfIcon} className="w-6 h-6 cursor-pointer hover:bg-gray-300"/>
      <img src={printerIcon} className="w-6 h-6 cursor-pointer hover:bg-gray-300"/>
    </div>
  );
}
