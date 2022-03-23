import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import {Card} from "./components/Card";
import {Link, Route, Routes, useNavigate} from "react-router-dom";

import {PostDetail} from "./components/PostDetail";
import {NavBar} from "./components/NavBar";

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
    fetch().then();
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
    return <div className="App">
      <header className="App-header">
        {posts.map((post, idx) => (
          <Card clickHandler={() => clicked(post.id)} key={idx} id={post.id} postText={''} summarizeText={post.summarizeText}/>
        ))}
      </header>
    </div>
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
    <div>
      <NavBar />
      <Routes>
        <Route path="/posts/:id" element={postDetailElem()}/>
        <Route path="/" element={postsElem()}/>
      </Routes>
    </div>);
}

export default App;
