import React, {FunctionComponent} from "react";

export type GridProps = {
  width: string,
  height: string
  onClick: React.EventHandler<any>;
  fill?: string,
}

export const GridIcon: FunctionComponent<GridProps> = ({width, height, onClick, fill}) => {
  return <svg onClick={onClick} className={width + ' ' + height + ' cursor-pointer'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill={fill}
        d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"/>
    </svg>
}