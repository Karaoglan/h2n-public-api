import {FunctionComponent, useEffect, useState} from "react";
import {Card} from "../components/Card";
import {useParams} from "react-router-dom";
import {H2NPost} from "./News";

type Param = {
  allPosts: H2NPost[]
}

export const NewsDetail: FunctionComponent<Param> = ({allPosts}) => {
  const {id} = useParams();
  const [posts] = useState<H2NPost[]>(allPosts);
  const [postId, setPostId] = useState<string>('1');

  useEffect(() => {
    setPostId(id as string);
  }, [id])

  const findPostText = (id: string): string => {
    const post = posts.find(post => post.id === id);
    return post ? post.postText : '';
  }

  const findSummarizeText = (id: string): string => {
    const post = posts.find(post => post.id === id);
    return post ? post.summarizeText : '';
  }

  return (
    <Card id={postId} postText={findPostText(postId)} summarizeText={findSummarizeText(postId)}/>
  );
}