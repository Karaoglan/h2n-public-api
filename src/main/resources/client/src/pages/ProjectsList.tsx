import React, {FunctionComponent} from "react";

type Project = {
  id: string,
  year: number,
  title: string,
  type: string,
  location: string,
  size: number
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ramada',
    location: 'Istabul',
    year: 2013,
    type: 'Hotel',
    size: 30
  },
  {
    id: '2',
    title: 'Wynch',
    location: 'Ankara',
    year: 2013,
    type: 'Hotel',
    size: 30
  },
  {
    id: '3',
    title: 'Ramada',
    location: 'Balıkesir',
    year: 2013,
    type: 'Hotel',
    size: 30
  },
  {
    id: '4',
    title: 'Kara',
    location: 'Başakşehir',
    year: 2013,
    type: 'Hotel',
    size: 30
  },
  {
    id: '5',
    title: 'Ramada',
    location: 'Samsun',
    year: 2013,
    type: 'Hotel',
    size: 30
  },
  {
    id: '6',
    title: 'Kazan',
    location: 'Istanbul - Altınşehir',
    year: 2013,
    type: 'Hotel',
    size: 30
  },
  {
    id: '7',
    title: 'Ramada',
    location: 'Eskişehir',
    year: 2013,
    type: 'Hotel',
    size: 30
  },
  {
    id: '8',
    title: 'Ramada',
    location: 'Gaziantep',
    year: 2013,
    type: 'Hotel',
    size: 30
  },
  {
    id: '9',
    title: 'Ramada',
    location: 'Yalova',
    year: 2013,
    type: 'Hotel',
    size: 30
  },
  {
    id: '10',
    title: 'Öğretmenevi',
    location: 'Yalova',
    year: 2013,
    type: 'Hotel',
    size: 302
  },
  {
    id: '11',
    title: 'Öğretmenevi',
    location: 'Istanbul',
    year: 2013,
    type: 'Hotel',
    size: 301
  },
  {
    id: '12',
    title: 'Öğretmenevi',
    location: 'Ankara',
    year: 2013,
    type: 'Hotel',
    size: 3000
  }
];

export const ProjectsListPage: FunctionComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="table-auto w-full h-full text-left text-sm">
              <thead className="border-b bg-gray-50">
              <tr>
                <th>Yıl</th>
                <th>Başlık</th>
                <th>Tip</th>
                <th>Konum</th>
                <th>Büyüklük</th>
              </tr>
              </thead>
              <tbody>
              {PROJECTS.map(project =>
                <tr className="text-gray-500 transition duration-300 ease-in-out hover:font-black">
                  <td>{project.year}</td>
                  <td>{project.title}</td>
                  <td>{project.type}</td>
                  <td>{project.location}</td>
                  <td>{project.size} &#13217;</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
