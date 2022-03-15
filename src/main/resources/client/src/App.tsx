import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

interface PostModel {
  id: number;
  text: string;
}

function App() {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const response = await axios.get('/posts');
    setPosts(response.data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        {posts.map((post, idx) => (
          <div>
            <span key={idx}>
              {post.id} | {post.text}
            </span>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
