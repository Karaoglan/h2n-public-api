import React, {FunctionComponent} from "react";

export const FooterPage: FunctionComponent = () => {
  return (
    <div className='flex grow flex-row ml-64'>
      <div className="flex basis-2/5 space-x-1 divide-x-2 ">
        <div>ABOUT</div>
        <div className="px-1">CONTACT</div>
        <div className="px-1">PRIVACY</div>
        <div className="px-1">KVKK</div>
        <div className="px-1">CREDITS</div>
      </div>
      <div className="basis-1/5 md:basis-2/5"></div>
      <div className="flex basis-3/5 md:basis-1/5 justify-end">H2N Mimarlık &#169; 2020 All Rights Reserved</div>
    </div>
  );
}
