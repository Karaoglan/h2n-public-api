import React, {FunctionComponent} from "react";
import SERVICES_IMAGE from "../assets/services.jpg";

type Service = {
  img: any,
  name: string,
  description: string
}

const SERVICES: Service[] = [
  {
    name: 'Servis 1',
    description: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"\n' +
      '            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of\n' +
      '            ethics,\n' +
      '            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes\n' +
      '            from\n' +
      '            a line in section 1.10.32.',
    img: SERVICES_IMAGE
  },{
    name: 'Servis 1',
    description: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"\n' +
      '            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of\n' +
      '            ethics,\n' +
      '            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes\n' +
      '            from\n' +
      '            a line in section 1.10.32.',
    img: SERVICES_IMAGE
  },{
    name: 'Servis 1',
    description: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"\n' +
      '            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of\n' +
      '            ethics,\n' +
      '            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes\n' +
      '            from\n' +
      '            a line in section 1.10.32.',
    img: SERVICES_IMAGE
  },{
    name: 'Servis 1',
    description: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"\n' +
      '            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of\n' +
      '            ethics,\n' +
      '            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes\n' +
      '            from\n' +
      '            a line in section 1.10.32.',
    img: SERVICES_IMAGE
  },{
    name: 'Servis 1',
    description: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"\n' +
      '            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of\n' +
      '            ethics,\n' +
      '            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes\n' +
      '            from\n' +
      '            a line in section 1.10.32.',
    img: SERVICES_IMAGE
  },{
    name: 'Servis 1',
    description: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"\n' +
      '            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of\n' +
      '            ethics,\n' +
      '            very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes\n' +
      '            from\n' +
      '            a line in section 1.10.32.',
    img: SERVICES_IMAGE
  }
];

export const ServicesPage: FunctionComponent = () => {
  return (
    <div className="flex flex-col w-full h-full space-y-8">
      <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
        piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
        undoubtable source.Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
        consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
        undoubtable source.
      </div>

      {SERVICES.map((service, idx) => {
        return <div className="flex flex-row gap-10" id={idx.toString()}>
          <div className="basis-2/5">
            <div className="aspect-w-16 aspect-h-9">
              <img src={service.img} alt="service-image"/>
            </div>
          </div>
          <div className="basis-3/5 space-y-2">
            <div className="font-black">{service.name}</div>
            <div>{service.description}</div>
          </div>
        </div>
      })}
    </div>

  );
}


