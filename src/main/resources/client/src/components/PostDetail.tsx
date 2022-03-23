import {FunctionComponent, useState} from "react";
import './Card.css';
import {Card} from "./Card";

export type H2NPostDetailRequest = {
  postId: string;
  postText: string;
  summarizeText: string;
}


export type H2NPostDetailResponse = {
  id: string,
  summarizeText: string,
  postText: string,
}

export const PostDetail: FunctionComponent<H2NPostDetailRequest> = ({postId, postText, summarizeText}) => {
  const [postDetail, setPostDetail] = useState<H2NPostDetailResponse>({id: postId, summarizeText, postText});

  const getRenderData = () => {
    return postDetail ?
      <Card id={postDetail.id} postText={postDetail.postText} summarizeText={postDetail.summarizeText}/> : <></>;
  }

  return (
    getRenderData()
  );
}