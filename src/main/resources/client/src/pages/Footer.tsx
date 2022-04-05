import React, {FunctionComponent} from "react";

export const FooterPage: FunctionComponent = () => {
  return (
    <div className='flex space-x-1 divide-x-2 ml-64'>
        <div>ABOUT</div>
        <div className="px-1">CONTACT</div>
        <div className="px-1">PRIVACY</div>
        <div className="px-1">KVKK</div>
        <div className="px-1">CREDITS</div>
    </div>
  );
}
