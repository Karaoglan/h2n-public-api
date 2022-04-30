import React, {useState} from "react";
import {H2NPost, NewsPage} from "../pages/News";
import {AboutUsPage} from "../pages/AboutUs";
import {BreadCrumb} from "./BreadCrumb";
import {GridIcon} from "../assets/icons/Grid";
import {Route, Routes} from "react-router";
import {ServicesPage} from "../pages/Services";
import {TeamPage} from "../pages/Team";
import {CafeProjectsPage} from "../pages/CafeProjects";
import {HotelProjectsPage} from "../pages/HotelProjects";
import {HotelProjectsDetailPage} from "../pages/HotelProjectsDetail";
import {ProjectsListPage} from "../pages/ProjectsList";
import {NewsDetail} from "../pages/NewsDetail";
import {BulletinPage} from "../pages/Bulletin";
import {Filter} from "../App";
import {DashboardPage} from "../pages/Dashboard";

type ModelParam = {
  gridEnabled: boolean,
  gridVisible: boolean,
  filter: Filter,
  enableOrDisableGrid: React.EventHandler<any>;
}

export const ScrollableRouteContent: React.FC<ModelParam> = ({
                                                               filter,
                                                               gridEnabled,
                                                               gridVisible,
                                                               enableOrDisableGrid
                                                             }) => {
  const [posts, setPosts] = useState<H2NPost[]>([]);

  return (
    <>
      <div className="flex flex-col space-y-4 grow bg-white">
        <div className="flex flex-row">
          <div className="basis-4/5 text-xl divide-x-4-2 divide-teal-900 space-x-2 space-x-reverse">
            <BreadCrumb/>
          </div>
          {gridVisible && <div className="flex basis-1/5 justify-end">
            <GridIcon onClick={() => enableOrDisableGrid(!gridEnabled)} width="w-4" height="h-4"
                      fill={gridEnabled ? '#000' : '#c2c4cf'}/>
          </div>}
        </div>
        <div className="pt-4">
          <Routes>
            <Route path="/corporate" element={<AboutUsPage/>}/>
            <Route path="/corporate/about-us" element={<AboutUsPage/>}/>
            <Route path="/corporate/services" element={<ServicesPage/>}/>
            <Route path="/corporate/team" element={<TeamPage/>}/>
            <Route path="/projects/cafe-restaurant" element={<CafeProjectsPage/>}/>
            <Route path="/projects/hotel" element={<HotelProjectsPage/>}/>
            <Route path="/projects/hotel/:id" element={<HotelProjectsDetailPage/>}/>
            <Route path="/projects" element={<ProjectsListPage filter={filter} gridEnabled={gridEnabled}/>}/>
            <Route path="/news" element={<NewsPage updatePosts={setPosts}/>}/>
            <Route path="/news/:id" element={<NewsDetail allPosts={posts}/>}/>
            <Route path="/" element={<DashboardPage />}/>
            <Route path="/bulletin" element={<BulletinPage/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}
