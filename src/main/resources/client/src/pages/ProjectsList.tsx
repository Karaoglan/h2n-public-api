import React, {FunctionComponent} from "react";
import {useNavigate} from "react-router-dom";
import HOTEL_IMAGE from "../assets/hotel-dummy.jpg";
import HOTEL_IMAGE1 from "../assets/hotel1.jpg";
import HOTEL_IMAGE2 from "../assets/hotel2.jpg";
import {Filter} from "../App";

type Project = {
  id: string,
  year: number,
  title: string,
  type: string,
  location: string,
  size: number,
  link?: string,
  img: any
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ramada',
    location: 'Istabul',
    year: 2013,
    type: 'Hotel',
    size: 30,
    link: '/projects/hotel/1',
    img: HOTEL_IMAGE
  },
  {
    id: '2',
    title: 'Wynch',
    location: 'Ankara',
    year: 2013,
    type: 'Hotel',
    size: 30,
    img: HOTEL_IMAGE
  },
  {
    id: '3',
    title: 'Ramada',
    location: 'Balıkesir',
    year: 2013,
    type: 'Hotel',
    size: 30,
    img: HOTEL_IMAGE1
  },
  {
    id: '4',
    title: 'Kara',
    location: 'Başakşehir',
    year: 2013,
    type: 'Hotel',
    size: 30,
    img: HOTEL_IMAGE2
  },
  {
    id: '5',
    title: 'Ramada',
    location: 'Samsun',
    year: 2013,
    type: 'Hotel',
    size: 30,
    img: HOTEL_IMAGE1
  },
  {
    id: '6',
    title: 'Kazan',
    location: 'Istanbul - Altınşehir',
    year: 2013,
    type: 'Hotel',
    size: 30,
    link: '/projects/hotel/6',
    img: HOTEL_IMAGE
  },
  {
    id: '7',
    title: 'Ramada',
    location: 'Eskişehir',
    year: 2013,
    type: 'Hotel',
    size: 30,
    img: HOTEL_IMAGE2
  },
  {
    id: '77',
    title: 'Ramada77',
    location: 'Eskişehir',
    year: 2013,
    type: 'Office',
    size: 30,
    img: HOTEL_IMAGE2
  },
  {
    id: '8',
    title: 'Ramada',
    location: 'Gaziantep',
    year: 2013,
    type: 'Hotel',
    size: 30,
    img: HOTEL_IMAGE
  },
  {
    id: '9',
    title: 'Ramada',
    location: 'Yalova',
    year: 2013,
    type: 'Hotel',
    size: 30,
    img: HOTEL_IMAGE1
  },
  {
    id: '10',
    title: 'Öğretmenevi',
    location: 'Yalova',
    year: 2013,
    type: 'Hotel',
    size: 302,
    img: HOTEL_IMAGE2
  },
  {
    id: '11',
    title: 'Öğretmenevi',
    location: 'Istanbul',
    year: 2013,
    type: 'Hotel',
    size: 301,
    link: '/projects/hotel/11',
    img: HOTEL_IMAGE2
  },
  {
    id: '12',
    title: 'Öğretmenevi',
    location: 'Ankara',
    year: 2013,
    type: 'Hotel',
    size: 3000,
    img: HOTEL_IMAGE
  },
  {
    id: '13',
    title: 'Öğretmenevi',
    location: 'Ankara',
    year: 2013,
    type: 'Recreation',
    size: 3000,
    img: HOTEL_IMAGE
  }
];

type Param = {
  gridEnabled: boolean;
  filter: Filter
}

export const ProjectsListPage: FunctionComponent<Param> = ({gridEnabled, filter}) => {
  const navigate = useNavigate();

  const getLink = (link: string | undefined) => {
    return link ? link : '';
  }

  const getProjects = () => {
    if (Object.values(filter).some(element => element)) {
      return PROJECTS.filter(project => project.type === 'Office');
    }
    return PROJECTS;
  }

  return (
    <>
      {!gridEnabled ? <div className="flex flex-col">
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
                {getProjects().map(project =>
                  <tr className="text-gray-500 transition duration-300 ease-in-out hover:font-black">
                    <td>{project.year}</td>
                    {project.link ? <td onClick={() => navigate(`/projects/hotel/${project.id}`)}
                                        className='text-blue-700 underline cursor-pointer'>{project.title}</td> :
                      <td>{project.title}</td>
                    }
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
      </div> :
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
          {getProjects().map(project => (
            <div className="flex flex-col gap-1">
              <div className="aspect-w-16 aspect-h-9">
                {project.link ? <img className="cursor-pointer hover:border transition duration-500 hover:scale-125 hover:z-40" onClick={() => navigate(getLink(project.link))} src={project.img}/> : <img src={project.img}/>}
              </div>
              <div className="">{project.title}</div>
              <div>{project.location}</div>
            </div>
          ))}
        </div>
      }
    </>
  );
}
