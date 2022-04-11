import React, {FunctionComponent, useEffect} from "react";
import closeIcon from "./icons/close-esc.svg";

export type ModalParams = {
  content?: JSX.Element,
  clickCloseHandler: React.EventHandler<any>;
}

export const FullscreenModal: FunctionComponent<ModalParams> = ({content, clickCloseHandler }) => {

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.code === "Escape") {
      clickCloseHandler(event);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="absolute w-full h-full bg-white opacity-95"></div>

      <div className="fixed w-full h-full z-50 overflow-y-auto ">
        <div
          onClick={clickCloseHandler}
          className="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50">
          <img src={closeIcon} className="w-6 h-6 cursor-pointer hover:bg-gray-300"/>
          (Esc)
        </div>

        <div className="container mx-auto h-auto text-left mt-10">
          {content}

          <div className="flex justify-end pt-2">
            <button onClick={clickCloseHandler}
                    className="px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
