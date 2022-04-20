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
import {ServicesPage} from "./pages/Services";
import {TeamPage} from "./pages/Team";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      TR: {translation: translationsTr},
      ENG: {translation: translationsEn},
      DE: {translation: translationsDe},
    },
    lng: "TR",
    fallbackLng: "ENG",
    interpolation: {escapeValue: false},
  });

export type Filter = {
  hotel: boolean,
  recreation: boolean,
  office: boolean
}

function App() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const location = useLocation()

  const [lang, setLang] = useState("TR");
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [imageShowFilterEnabled, setImageShowFilterEnabled] = useState(false);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [gridEnabled, setGridEnabled] = useState(true);
  const [gridVisible, setGridVisible] = useState(false);
  const [hiddenSidebar, setHiddenSidebar] = useState(false);
  const [filter, setFilter] = useState<Filter>({hotel: false, recreation: false, office: false})
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
    if (location.pathname === '/news' || location.pathname.includes('/projects')) {
      if (location.pathname.includes('/projects/')) {
        setImageShowFilterEnabled(true);
      } else {
        setImageShowFilterEnabled(false);
      }
      setFilterEnabled(true);
      setGridVisible(true);
    } else {
      setGridVisible(false);
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
    {path: "/corporate", breadcrumb: t('corporate')},
    {path: "/corporate/about-us", element: AboutUsPage, breadcrumb: t('aboutUs')},
    {path: "/corporate/services", breadcrumb: t('services')},
    {path: "/corporate/team", breadcrumb: t('team')},
    {path: "/corporate/quality", breadcrumb: t('quality')},
  ];

  const breadcrumbs = useReactRouterBreadcrumbs(routes);

  const image = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';

  const RenderFilter = () => {
    return (<form
      action=""
      className="border-t border-gray-200 lg:border-t-0"
    >
      <fieldset>
        <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
          Type
        </legend>

        <div className="px-5 py-6 space-y-2">
          <div className="flex items-center">
            <input
              id="hotel"
              type="checkbox"
              name="type[hotel]"
              onChange={() => setFilter(prevState => {
                return {...prevState, hotel: true}
              })}
              className="w-5 h-5 border-gray-300 rounded"
            />

            <label
              htmlFor="hotel"
              className="ml-3 text-sm font-medium"
            >
              Hotel
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="office"
              type="checkbox"
              name="type[office]"
              onChange={(e) => {
                console.log(e.target.value);
                setFilter(prevState => {
                  return {...prevState, office: true}
                })
              }}
              className="w-5 h-5 border-gray-300 rounded"
            />

            <label
              htmlFor="office"
              className="ml-3 text-sm font-medium"
            >
              Office
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="recreation"
              type="checkbox"
              name="type[recreation]"
              onChange={(e) => {
                console.log(e);
                setFilter(prevState => {
                  return {...prevState, recreation: true}
                })
              }}
              className="w-5 h-5 border-gray-300 rounded"
            />

            <label
              htmlFor="recreation"
              className="ml-3 text-sm font-medium"
            >
              Recreation
            </label>
          </div>
        </div>
      </fieldset>

      <div className="flex justify-between px-5 py-3 border-t border-gray-200">
        <button
          name="reset"
          type="button"
          className="text-xs font-medium text-gray-600 underline rounded"
        >
          Reset All
        </button>

        <button
          name="commit"
          type="button"
          className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
        >
          Apply Filters
        </button>
      </div>
    </form>);
  }

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

  function content() {
    return (
      <>
        <div className="flex flex-col space-y-4 grow bg-white">
          <div className="flex flex-row">
            <div className="basis-4/5 text-xl divide-x-2 space-x-2 space-x-reverse">
              {breadcrumbs.map(({
                                  match,
                                  breadcrumb
                                }) => (
                <span key={match.pathname}>
                          <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                        </span>
              ))}
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
              <Route path="/" element={<div>Dashboard</div>}/>
              <Route path="/bulletin" element={<>selam</>}/>
            </Routes>
          </div>
        </div>
      </>
    )
  }

  return (
    <main className="flex flex-col h-screen p-4 lg:px-32 xl:px-64">
      {fullscreenOpen ?
        <FullscreenModal content={fullscreenGridList()} clickCloseHandler={() => setFullscreenOpen(false)}/> :
        <>
          <div className="flex flex-1 overflow-hidden">
            <div className={hiddenSidebar ? 'hidden' : '' + ` flex w-96 p-4`}><NavSideBar/></div>
            <div className="flex flex-1 flex-col">
              <div className="flex flex-row bg-white pl-4 py-4">
                <HeaderPage currentLang={lang} collapseSidebar={() => setHiddenSidebar(!hiddenSidebar)}
                            hiddenSidebar={hiddenSidebar} setLang={setLang}/>
              </div>
              <div className="flex flex-row p-4 overflow-y-auto space-x-2">
                {content()}
              </div>
            </div>
            {filterEnabled &&
              <>
                {filterOpen ? <RenderFilter/>
                  : <RightSideFilter imageShowFilterEnabled={imageShowFilterEnabled}
                                     clickFilterHandler={() => setFilterOpen(true)}
                                     clickCloseHandler={() => setFullscreenOpen(true)}/>
                }
              </>}
          </div>
          <div className="flex bg-white p-4 mr-4">
            <FooterPage/>
          </div>
        </>
      }
    </main>);
}

export default App;
