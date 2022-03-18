import {FunctionComponent, useEffect, useState} from "react";
import './Card.css';
import axios from "axios";
import {Card} from "./Card";

export type H2NPostDetailRequest = {
  postId: number;
}


export type H2NPostDetailResponse = {
  id: number,
  postText: string,
  post: number;
}

export const PostDetail: FunctionComponent<H2NPostDetailRequest> = ({postId}) => {
  const [postDetail, setPostDetail] = useState<H2NPostDetailResponse>();

  useEffect(() => {
    fetch().then();
  }, []);

  const fetch = async () => {
    const response = await axios.get(`/posts/${postId}`);
    setPostDetail(response.data);
  };

  const getRenderData = () => {
    return postDetail ? <Card id={postDetail.id} summarizeText={postDetail.postText}/> : <></>;
  }

  return (
    getRenderData()
  );
}