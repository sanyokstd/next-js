import Heading from "./Heading";
import { FC } from "react";
import { postType } from "../types";

type PostInfo = {
  post: postType,
}

const PostInfo:FC<PostInfo> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
}

export default PostInfo;