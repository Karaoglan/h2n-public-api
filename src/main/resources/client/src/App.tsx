import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import {Route, Routes, useNavigate} from "react-router-dom";

import {PostDetail} from "./components/PostDetail";
import {NavBar} from "./components/NavBar";
import {CardPulseLoading} from "./components/CardPulseLoading";
import {Card} from "./components/Card";

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

function App() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<H2NPost[]>([]);
  const [clickedPostId, setClickedPostId] = useState<string>();
  useEffect(() => {
    setTimeout(() => {
      fetch().then();
    }, 2000);
  }, []);

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
    return <div className="">
      {!posts.length ? <CardPulseLoading/> : <></>}
      <div className="grid grid-cols-3 gap-20">
        {posts.map((post, idx) => (
          <Card clickHandler={() => clicked(post.id)} key={idx} id={post.id} postText={''}
                summarizeText={post.summarizeText}/>
        ))}
      </div>
    </div>
  }

  /*const postsElem = () => {
    return <div className="">
      {!posts.length ? <CardPulseLoading/> : <></>}
      <div className="grid grid-cols-3 gap-3">
      {posts.map((post, idx) => (

          <div onClick={() => clicked(post.id)} className="w-72">
            <div
              className="card-image h-36 lg:h-auto lg:w-36 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              title="Woman holding a mug">
            </div>
            <div
              className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div
                  className="text-gray-900 font-bold text-xl mb-2">{post.id} {post.summarizeText ? ' - ' + post.summarizeText : ''}</div>
                <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{__html: post.postText}}></p>
              </div>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://v1.tailwindcss.com/img/jonathan.jpg"
                     alt="Avatar of Jonathan Reinink"/>
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
      ))}
      </div>

    </div>
  }*/


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
    <div className="flex m-8">
      <NavBar/>
      <main className="m-12">
        <Routes>
          <Route path="/posts/:id" element={postDetailElem()}/>
          <Route path="/" element={postsElem()}/>
        </Routes>
      </main>
    </div>);
}

export default App;
