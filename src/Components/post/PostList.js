import React from "react";
import { useSelector } from "react-redux";
import { selectAlllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

const PostList = () => {
  // const posts = useSelector(state=>state.posts)  or
  const posts = useSelector(selectAlllPosts);
  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  ));

  return (
    <>
      <h2>Posts</h2>
      {renderedPosts}
    </>
  );
};

export default PostList;
