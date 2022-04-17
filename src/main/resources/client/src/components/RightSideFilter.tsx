import React, {FunctionComponent, useState} from "react";
import fullscreenIcon from "../assets/icons/fullscreen.svg";
import pdfIcon from "../assets/icons/pdf.svg";
import filterIcon from "../assets/icons/filter.svg";
import printerIcon from "../assets/icons/printer.svg";

export type ModalParams = {
  imageShowFilterEnabled?: boolean;
  clickCloseHandler: React.EventHandler<any>;
  clickFilterHandler: React.EventHandler<any>;
}

export const RightSideFilter: FunctionComponent<ModalParams> = ({
                                                                  imageShowFilterEnabled = false,
                                                                  clickCloseHandler,
                                                                  clickFilterHandler
                                                                }) => {
  const [selectedImageType, setSelectedImageType] = useState('visual');

  return (
    <div className="flex flex-col mt-10 ml-0.5">
      {imageShowFilterEnabled && <div className="space-y-1">
        <div className={(selectedImageType === 'plan' ? "font-black" : 'text-black') + ' cursor-pointer'}
             onClick={() => setSelectedImageType('plan')}>_Plan
        </div>
        <div className={(selectedImageType === 'section' ? "font-black" : 'text-black') + ' cursor-pointer'}
             onClick={() => setSelectedImageType('section')}>_Kesit
        </div>
        <div className={(selectedImageType === 'visual' ? "font-black" : 'text-black') + ' cursor-pointer'}
             onClick={() => setSelectedImageType('visual')}>_Görsel
        </div>
      </div>}
      <div className="mt-32 space-y-1">
        <img onClick={clickCloseHandler} src={fullscreenIcon} className="w-6 h-6 cursor-pointer hover:bg-gray-300"/>
        <img onClick={clickFilterHandler} src={filterIcon} className="w-6 h-6 cursor-pointer hover:bg-gray-300"/>
        <img src={pdfIcon} className="w-6 h-6 cursor-pointer hover:bg-gray-300"/>
        <img src={printerIcon} className="w-6 h-6 cursor-pointer hover:bg-gray-300"/>
      </div>
    </div>
  );
}
