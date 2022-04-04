import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

import {PostDetail} from "./components/PostDetail";
import {CardPulseLoading} from "./components/CardPulseLoading";
import {Card} from "./components/Card";
import {Route, Routes} from "react-router";
import {NavBar} from "./components/NavBar";
import {AboutUsPage} from "./pages/AboutUs";
import {FooterPage} from "./pages/Footer";
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";

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

const translationsTr = {welcome: 'Hoşgeldiniz'};
const translationsEn = {welcome: 'Welcome'};
const translationsDe = {welcome: 'Willkommen'};

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

  const [lang, setLang] = useState("tr");
  const [posts, setPosts] = useState<H2NPost[]>([]);
  const [clickedPostId, setClickedPostId] = useState<string>();
  useEffect(() => {
    setTimeout(() => {
      fetch().then();
    }, 2000);
  }, []);

  useEffect(() => {
    console.log(lang);
    i18n.changeLanguage(lang);
  }, [lang]);

  const fetch = async () => {
    console.warn('18.03 - 07:09');
    const response = await axios.get<PostPageResponse>('/posts?pageNumber=0&pageSize=20');
    setPosts(response.data.content);
    // TODO pagination
  };

  const clicked = (postId: string) => {
    setClickedPostId(postId)
    console.log('clicked');
    navigate(`/posts/${clickedPostId}`)
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

  return (
    <main className="flex flex-col h-screen bg-yellow-700 p-4">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex bg-gray-100 w-56 p-4"><NavBar/></div>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-row bg-gray-300 p-4">
            <div className="basis-4/5">{t('welcome')}</div>
            <div className="flex basis-1/5 divide-x-2 space-x-2">
              <span onClick={() => setLang("de")}>DE</span>
              <span onClick={() => setLang("tr")} className="px-2">TR</span>
              <span onClick={() => setLang("en")} className="px-2">EN</span>
            </div>
          </div>
          <div className="p-4 overflow-y-auto">
            <Routes>
              <Route path="/posts/:id" element={postDetailElem()}/>
              <Route path="/about-us" element={<AboutUsPage/>}/>
              <Route path="/news" element={postsElem()}/>
              <Route path="/" element={<div>Dashboard</div>} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="flex bg-white p-4">
        <FooterPage/>
      </div>
    </main>);
}

export default App;
