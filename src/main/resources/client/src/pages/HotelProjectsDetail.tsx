import React, {FunctionComponent, useState} from "react";
import {useParams} from "react-router-dom";
import HOTEL from "../assets/hotel-dummy.jpg";
import HOTEL1 from "../assets/hotel1.jpg";
import HOTEL2 from "../assets/hotel2.jpg";

type Project = {
  id: string,
  year: number,
  title: string,
  type: string,
  employer: string,
  statue: string,
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
    statue: 'CONCEPT',
    employer: 'GREATER ISTANBUL MUNICIPALITY',
    size: 3000
  };

const featuredImages = [HOTEL, HOTEL1, HOTEL2];

let count = 0;

export const HotelProjectsDetailPage: FunctionComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {id} = useParams()
  console.log(id);

  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="w-full h-full">

        <div className="max-w-screen-xl m-auto">
          <div className="w-full relative select-none">
            <div className="aspect-w-16 aspect-h-9">
              <img src={featuredImages[currentIndex]} alt="hotel"/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex grow justify-start text-lg font-black">{PROJECT_DETAIL.title}</div>
        <div className="flex justify-end mr-4 text-lg space-x-3">
          <button onClick={handleOnPrevClick} className="scale-150">{'<'}</button>
          <div className="flex scale-75 space-x-1"><span className="font-black">{currentIndex + 1}</span><span>/</span><span>{featuredImages.length}</span></div>
          <button onClick={handleOnNextClick} className="scale-150">{'>'}</button>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col basis-2/5">
          <div className="flex flex-row">
            <div className="basis-1/5 font-black">Konum</div>
            <div className="basis-2/5">:{PROJECT_DETAIL.location}</div>
            <div className="basis-2/5"></div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/5 font-black">İşveren</div>
            <div className="basis-2/5">:{PROJECT_DETAIL.employer}</div>
            <div className="basis-2/5"></div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/5 font-black">Statü</div>
            <div className="basis-2/5">:{PROJECT_DETAIL.statue}</div>
            <div className="basis-2/5"></div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/5 font-black">Tip</div>
            <div className="basis-2/5">:{PROJECT_DETAIL.type}</div>
            <div className="basis-2/5"></div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/5 font-black">Alan</div>
            <div className="basis-2/5">:{PROJECT_DETAIL.size} &#13217;</div>
            <div className="basis-2/5"></div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/5 font-black">Yıl</div>
            <div className="basis-2/5">:{PROJECT_DETAIL.year}</div>
            <div className="basis-2/5"></div>
          </div>
        </div>
        <div className="flex flex-col basis-3/5 space-y-2">
          <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
            from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
            from
            a line in section 1.10.32.
          </div>
          <div>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
            1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </div>
        </div>
      </div>
    </div>
  );
}
