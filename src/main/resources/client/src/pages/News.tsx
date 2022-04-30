import React, {useEffect, useState} from "react";
import {CardPulseLoading} from "../components/CardPulseLoading";
import {Card} from "../components/Card";
import {useNavigate} from "react-router-dom";
import axios from "axios";

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

type Param = {
  updatePosts: (arg: H2NPost[]) => void
}

export const NewsPage: React.FC<Param> = ({updatePosts}) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<H2NPost[]>([]);
  const [clickedPostId, setClickedPostId] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      fetch().then();
    }, 500);
  }, []);

  useEffect(() => {
    updatePosts(posts);
  }, [posts])

  const fetch = async () => {
    const response = await axios.get<PostPageResponse>('/posts?pageNumber=0&pageSize=20');
    setTimeout(() => {
      setPosts(response.data.content);
    }, 1500)
    // TODO pagination
  };

  const clicked = (postId: string) => {
    setClickedPostId(postId);
    navigate(`/news/${postId}`);
  }

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
