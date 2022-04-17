import React, {FunctionComponent} from "react";
import HOTEL_IMAGE from "../assets/hotel-dummy.jpg";
import HOTEL_IMAGE1 from "../assets/hotel1.jpg";
import HOTEL_IMAGE2 from "../assets/hotel2.jpg";
import {useNavigate} from "react-router-dom";

type Hotel = {
  id: string,
  title: string,
  subTitle: string,
  link?: string,
  img: any
}

const HOTELS: Hotel[] = [
  {
    id: '1',
    title: 'Ramada',
    subTitle: 'Istanbul',
    img: HOTEL_IMAGE
  },
  {
    id: '2',
    title: 'Wynch',
    subTitle: 'Ankara',
    img: HOTEL_IMAGE,
    link: '/projects/hotel/2'
  },
  {
    id: '3',
    title: 'Ramada',
    subTitle: 'Balıkesir',
    img: HOTEL_IMAGE
  },
  {
    id: '4',
    title: 'Kara',
    subTitle: 'Başakşehir',
    img: HOTEL_IMAGE1
  },
  {
    id: '5',
    title: 'Ramada',
    subTitle: 'Samsun',
    img: HOTEL_IMAGE
  },
  {
    id: '6',
    title: 'Kazan',
    subTitle: 'Istanbul - Altınşehir',
    img: HOTEL_IMAGE2
  },
  {
    id: '7',
    title: 'Ramada',
    subTitle: 'Eskişehir',
    img: HOTEL_IMAGE1,
    link: '/projects/hotel/7'
  },
  {
    id: '8',
    title: 'Ramada',
    subTitle: 'Gaziantep',
    img: HOTEL_IMAGE1
  },
  {
    id: '9',
    title: 'Ramada',
    subTitle: 'Yalova',
    img: HOTEL_IMAGE2
  },
  {
    id: '10',
    title: 'Öğretmenevi',
    subTitle: 'Yalova',
    img: HOTEL_IMAGE
  },
  {
    id: '11',
    title: 'Öğretmenevi',
    subTitle: 'Istanbul',
    img: HOTEL_IMAGE
  },
  {
    id: '12',
    title: 'Öğretmenevi',
    subTitle: 'Ankara',
    img: HOTEL_IMAGE
  }
];

export const HotelProjectsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
      {HOTELS.map(hotel => (
        <div className="flex flex-col gap-1">
          <div className="aspect-w-16 aspect-h-9">
            {hotel.link ?
              <img className="cursor-pointer hover:border transition duration-500 hover:scale-125 hover:z-40"
                   onClick={() => navigate(`/projects/hotel/${hotel.id}`)} src={hotel.img}/> : <img src={hotel.img}/>}
          </div>
          <div>{hotel.title}</div>
          <div>{hotel.subTitle}</div>
        </div>
      ))}
    </div>
  );
}
