import React, {FunctionComponent} from "react";

type Person = {
  name: string,
  subject: string,
  education: string
}

const PEOPLE: Person[] = [
  {
    name: 'Ad Soyad',
    subject: 'Alanı',
    education: 'Üniversite',
  },
  {
    name: 'Ad Soyad',
    subject: 'Alanı',
    education: 'Üniversite',
  },
  {
    name: 'Ad Soyad',
    subject: 'Alanı',
    education: 'Üniversite',
  }, {
    name: 'Ad Soyad',
    subject: 'Alanı',
    education: 'Üniversite',
  },
  {
    name: 'Ad Soyad',
    subject: 'Alanı',
    education: 'Üniversite',
  },
  {
    name: 'Ad Soyad',
    subject: 'Alanı',
    education: 'Üniversite',
  },
  {
    name: 'Ad Soyad',
    subject: 'Alanı',
    education: 'Üniversite',
  }
];

export const TeamPage: FunctionComponent = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {PEOPLE.map((person, idx) => {
          return (<div className="">
            <div className="space-y-1">
              <div className="aspect-w-9 aspect-h-9 bg-gray-100">
                IMG
              </div>
              <div className="font-black">{person.name}</div>
              <div className="font-black">{person.subject}</div>
              <div className="font-black">{person.education}</div>
            </div>
          </div>)
        })}
      </div>

    </div>
  );
}

