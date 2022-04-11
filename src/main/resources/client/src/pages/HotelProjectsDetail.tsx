import React, {FunctionComponent} from "react";
import {useParams} from "react-router-dom";

type Project = {
  id: string,
  year: number,
  title: string,
  type: string,
  location: string,
  size: number,
  link?: string,
}

const PROJECT_DETAIL: Project =
  {
    id: '12',
    title: 'Öğretmenevi',
    location: 'Ankara',
    year: 2013,
    type: 'Hotel',
    size: 3000
  };

export const HotelProjectsDetailPage: FunctionComponent = () => {
  const {id} = useParams()

  return (
    <div className="flex flex-col">
      selam {id}
    </div>
  );
}
