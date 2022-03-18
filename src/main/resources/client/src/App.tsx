import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import {Card} from "./components/Card";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

import {PostDetail} from "./components/PostDetail";

export type H2NPost = {
  id: number;
  summarizeText: string;
  clickHandler?: React.MouseEventHandler<HTMLDivElement>;
}

function App() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<H2NPost[]>([]);
  const [clickedPostId, setClickedPostId] = useState<number>();
  useEffect(() => {
    fetch().then();
  }, []);

  const fetch = async () => {
    console.warn('18.03 - 07:09');
    const response = await axios.get('/posts');
    setPosts(response.data);
  };

  const clicked = (postId: number) => {
    setClickedPostId(postId)
    console.log('clicked');
    navigate(`/posts/${clickedPostId}`)
  }

  const postsElem = () => {
    return <div className="App">
      <header className="App-header">
        {posts.map((post, idx) => (
          <Card clickHandler={() => clicked(post.id)} key={idx} id={post.id} summarizeText={post.summarizeText}/>
        ))}
      </header>
    </div>
  }

  const postDetailElem = () => {
    return clickedPostId ? <PostDetail postId={clickedPostId} /> : <></>
  }

  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/posts/:id" element={postDetailElem()} />
          <Route path="/" element={postsElem()} />
        </Routes>
      </div>);
}

export default App;
