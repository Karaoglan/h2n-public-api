import React, {FunctionComponent} from "react";
import HOTEL_IMAGE from "../assets/hotel-dummy.jpg";
import HOTEL_IMAGE1 from "../assets/hotel1.jpg";
import HOTEL_IMAGE2 from "../assets/hotel2.jpg";

type Hotel = {
  id: string,
  title: string,
  subTitle: string,
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
    img: HOTEL_IMAGE
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
    img: HOTEL_IMAGE1
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
  return (
    <div className="grid grid-cols-3 gap-4 text-lg">
      {HOTELS.map(hotel => (
        <div className="flex flex-col gap-1">
          <div className="object-fill h-96">
            <img src={hotel.img}/>
          </div>
          <div>{hotel.title}</div>
          <div>{hotel.subTitle}</div>
        </div>
      ))}
    </div>
  );
}
