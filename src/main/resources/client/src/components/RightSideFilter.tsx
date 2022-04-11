import React, {FunctionComponent} from "react";
import fullscreenIcon from "./icons/fullscreen.svg";
import pdfIcon from "./icons/pdf.svg";
import filterIcon from "./icons/filter.svg";
import printerIcon from "./icons/printer.svg";
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
