import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {Route, Routes} from "react-router";

import {NewsDetail} from "./pages/NewsDetail";
import {NavSideBar} from "./components/NavSideBar";
import {AboutUsPage} from "./pages/AboutUs";
import {FooterPage} from "./components/Footer";
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import {HeaderPage} from "./components/Header";
import {RightSideFilter} from "./components/RightSideFilter";
import {FullscreenModal} from "./components/FullscreenModal";
import {CafeProjectsPage} from "./pages/CafeProjects";
import {GridIcon} from './assets/icons/Grid';
import {HotelProjectsPage} from "./pages/HotelProjects";
import {ProjectsListPage} from "./pages/ProjectsList";
import {HotelProjectsDetailPage} from "./pages/HotelProjectsDetail";
import {throttle} from 'lodash';
import {DashboardPage} from "./pages/Dashboard";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import {H2NPost, NewsPage} from "./pages/News";
import {translationsDe, translationsEn, translationsTr} from "./assets/i18n";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      tr: {translation: translationsTr},
      en: {translation: translationsEn},
      de: {translation: translationsDe},
    },
    lng: "tr",
    fallbackLng: "en",
    interpolation: {escapeValue: false},
  });

function App() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const location = useLocation()

  const [lang, setLang] = useState("tr");
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [gridEnabled, setGridEnabled] = useState(true);
  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const [posts, setPosts] = useState<H2NPost[]>([]);

  function calcInnerWidth() {
    if (window.innerWidth < 650) {
      setHiddenSidebar(true);
    } else {
      setHiddenSidebar(false);
    }
  }

  window.addEventListener('resize', throttle(calcInnerWidth, 200))

  useEffect(() => {
    if (window.innerWidth < 650) {
      setHiddenSidebar(true);
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    console.log('handle route change here', location)
    if (location.pathname === '/news' || location.pathname === '/projects' || location.pathname.includes('/projects/hotel/')) {
      setFilterEnabled(true);
    } else {
      setFilterEnabled(false);
    }
  }, [location])

  const enableOrDisableGrid = (enableGrid: boolean) => {
    setGridEnabled(enableGrid);
    if (!enableGrid) navigate('/projects');
  }

  const routes = [
    {
      path: "/",
      element: DashboardPage,
      breadcrumb: "",
    },
    {path: "/news", element: NewsPage, breadcrumb: t('news')},
    {path: "/corporate/about-us", element: AboutUsPage, breadcrumb: t('aboutUs')},
  ];

  const breadcrumbs = useReactRouterBreadcrumbs(routes);

  const image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';

  function fullscreenGridList() {
    return (
      <div className="md:grid md:grid-cols-3 xl:grid-cols-4 md:gap-5 mx-auto">
        <div className="flex flex-col w-64 h-64">
          <div className="w-full h-full bg-contain bg-no-repeat"
               style={{backgroundImage: `url(${image})`}}>
          </div>
          <div>
            Proje adı üst satır1
          </div>
          <div>
            Proje adı alt satır1
          </div>
        </div>
        <div className="flex flex-col w-64 h-64">
          <div className="flex w-full h-full bg-contain bg-no-repeat"
               style={{backgroundImage: `url(${image})`}}>
          </div>
          <div>
            Proje adı üst satır2
          </div>
          <div>
            Proje adı alt satır2
          </div>
        </div>
        <div className="flex flex-col w-64 h-64">
          <div className="w-full h-full bg-contain bg-no-repeat"
               style={{backgroundImage: `url(${image})`}}>
          </div>
          <div>
            Proje adı üst satır3
          </div>
          <div>
            Proje adı alt satır3
          </div>
        </div>
        <div className="flex flex-col w-64 h-64">
          <div className="w-full h-full bg-contain bg-no-repeat"
               style={{backgroundImage: `url(${image})`}}>
          </div>
          <div>
            Proje adı üst satır4
          </div>
          <div>
            Proje adı alt satır4
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col h-screen p-4 lg:px-64">
      {fullscreenOpen ?
        <FullscreenModal content={fullscreenGridList()} clickCloseHandler={() => setFullscreenOpen(false)}/> :
        <>
          <div className="flex flex-1 overflow-hidden">
            <div className={hiddenSidebar ? 'hidden' : '' + ` flex w-96 p-4`}><NavSideBar/></div>
            <div className="flex flex-1 flex-col">
              <div className="flex flex-row bg-white p-4">
                <HeaderPage currentLang={lang} collapseSidebar={() => setHiddenSidebar(!hiddenSidebar)}
                            hiddenSidebar={hiddenSidebar} setLang={setLang}/>
              </div>
              <div className="flex flex-row p-4 overflow-y-auto">
                <div className="flex flex-col basis-11/12 space-y-4 grow bg-white">
                  <div className="flex flex-row">
                    <div className="basis-4/5 text-xl divide-x-2 space-x-2">
                      {breadcrumbs.map(({
                                          match,
                                          breadcrumb
                                        }) => (
                        <span key={match.pathname}>
                          <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                        </span>
                      ))}
                    </div>
                    <div className="flex basis-1/5 justify-end">
                      <GridIcon onClick={() => enableOrDisableGrid(!gridEnabled)} width="w-4" height="h-4"
                                fill={gridEnabled ? '#000' : '#c2c4cf'}/>
                    </div>
                  </div>
                  <div>
                    <Routes>
                      <Route path="/corporate/about-us" element={<AboutUsPage/>}/>
                      <Route path="/projects/cafe-restaurant" element={<CafeProjectsPage/>}/>
                      <Route path="/projects/hotel" element={<HotelProjectsPage/>}/>
                      <Route path="/projects/hotel/:id" element={<HotelProjectsDetailPage/>}/>
                      <Route path="/projects" element={<ProjectsListPage/>}/>
                      <Route path="/news" element={<NewsPage updatePosts={setPosts}/>}/>
                      <Route path="/news/:id" element={<NewsDetail allPosts={posts}/>}/>
                      <Route path="/" element={<div>Dashboard</div>}/>
                      <Route path="/bulletin" element={<>selam</>}/>
                    </Routes>
                  </div>
                </div>
                {filterEnabled && <div className="basis-1/12">
                  <RightSideFilter clickCloseHandler={() => setFullscreenOpen(true)}/>
                </div>}
              </div>
            </div>
          </div>
          <div className="flex bg-white p-4">
            <FooterPage/>
          </div>
        </>
      }
    </main>);
}

export default App;
