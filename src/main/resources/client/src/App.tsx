import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from "react-router-dom";
import {Route, Routes} from "react-router";

import {PostDetail} from "./components/PostDetail";
import {CardPulseLoading} from "./components/CardPulseLoading";
import {Card} from "./components/Card";
import {NavSideBar} from "./components/NavSideBar";
import {AboutUsPage} from "./pages/AboutUs";
import {FooterPage} from "./pages/Footer";
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import {HeaderPage} from "./pages/Header";
import {RightSideFilter} from "./components/RightSideFilter";

export type H2NPost = {
  id: string;
  summarizeText: string;
  postText: string;
  clickHandler?: React.MouseEventHandler<HTMLDivElement>;
}

type PostPageResponse = {
  content: H2NPost[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

const translationsTr = {welcome: 'Hoşgeldiniz', news: 'Haberler', aboutUs: 'Hakkımızda'};
const translationsEn = {welcome: 'Welcome', news: 'News', aboutUs: 'About Us'};
const translationsDe = {welcome: 'Willkommen', news: 'Nachrichten', aboutUs: 'Über Uns'};

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
  const [posts, setPosts] = useState<H2NPost[]>([]);
  const [clickedPostId, setClickedPostId] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      fetch().then();
    }, 2000);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  useEffect(() => {
    console.log('handle route change here', location)
    if (location.pathname === '/news') {
      setFilterEnabled(true);
    } else {
      setFilterEnabled(false);
    }
  }, [location])

  const fetch = async () => {
    console.warn('18.03 - 07:09');
    const response = await axios.get<PostPageResponse>('/posts?pageNumber=0&pageSize=20');
    setPosts(response.data.content);
    // TODO pagination
  };

  const clicked = (postId: string) => {
    setClickedPostId(postId)
    navigate(`/news/${clickedPostId}`)
  }

  const postsElem = () => {
    return <>
      {!posts.length ? <CardPulseLoading/> :
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-5 mx-auto">
          {posts.map((post, idx) => (
            <Card clickHandler={() => clicked(post.id)} key={idx} id={post.id} postText={''}
                  summarizeText={post.summarizeText}/>
          ))}
        </div>}
    </>
  }

  const findPostText = (id: string): string => {
    const post = posts.find(post => post.id === id);
    return post ? post.postText : '';
  }

  const findSummarizeText = (id: string): string => {
    const post = posts.find(post => post.id === id);
    return post ? post.summarizeText : '';
  }

  const postDetailElem = () => {
    return clickedPostId ?
      <PostDetail postId={clickedPostId} summarizeText={findSummarizeText(clickedPostId)}
                  postText={findPostText(clickedPostId)}/> : <></>
  }

  /*
    const routes = [
      {
        path: "/",
        element: DashboardPage,
        breadcrumb: "Dashboard",
      },
      {path: "/news", element: postsElem(), breadcrumb: t('news')},
      {
        path: "/news/:id",
        element: postDetailElem(),
        breadcrumb: t('news')
      },
      {path: "/about-us", element: AboutUsPage, breadcrumb: t('aboutUs')},
    ];

    const breadcrumbs = useBreadcrumbs(routes);

    */

  return (
    <main className="flex flex-col h-screen bg-yellow-700 p-4">
      <div className="flex flex-1 overflow-hidden">
        <div className={`flex bg-gray-100 w-64 p-4`}><NavSideBar/></div>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-row bg-white p-4">
            <HeaderPage setLang={setLang}/>
          </div>
          <div className="flex flex-row p-4 overflow-y-auto">
            <div className="basis-11/12 grow bg-white">
              <Routes>
                <Route path="/news/:id" element={postDetailElem()}/>
                <Route path="/corporate/about-us" element={<AboutUsPage/>}/>
                <Route path="/news" element={postsElem()}/>
                <Route path="/" element={<div>Dashboard</div>}/>
                <Route path="/bulletin" element={<>selam</>}/>
              </Routes>
            </div>
            {filterEnabled && <div className="basis-1/12 bg-yellow-200">
              <RightSideFilter/>
            </div> }
          </div>
        </div>
      </div>
      <div className="flex bg-white p-4">
        <FooterPage/>
      </div>
    </main>);
}

export default App;
