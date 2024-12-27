import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";

const staticPosts = [
  {
    id: 1,
    title: "Title#01",
    subtitle: "Sub#01",
    likes: 10,
    read: true,
  },
  {
    id: 2,
    title: "Title#02",
    subtitle: "Sub#02",
    likes: 20,
    read: false,
  },
  {
    id: 3,
    title: "Title#03",
    subtitle: "Sub#03",
    likes: 30,
    read: false,
  },
  {
    id: 4,
    title: "Title#04",
    subtitle: "Sub#04",
    likes: 40,
    read: false,
  },
];

export default function App() {
  const [posts, setPosts] = useState(staticPosts);

  function handleRefresh() {
    const lastPost = posts.at(-1);
    const id = lastPost ? lastPost.id + 1 : 1;
    const counter = id > 9 ? id : `0${id}`;

    const newPost = {
      id,
      title: `Titlte#${counter}`,
      subtitle: `Sub#${counter}`,
      likes: 10 * id,
    };

    setPosts((posts) => [...posts, newPost]);
  }

  function handleRemovePost(id) {
    setPosts((posts) => {
      const filteredPosts = posts.filter((post) => post.id !== id);
      return filteredPosts;
    });
  }

  function handleRead(id) {
    setPosts((posts) => {
      const newPosts = [...posts];
      const postIndex = posts.findIndex((post) => post.id === id);
      newPosts[postIndex].read = true;

      return newPosts;
    });
  }

  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />
      {posts.map((post) => (
        <Post key={post.id} post={post} onRead={handleRead} onRemove={handleRemovePost} />
      ))}
    </>
  );
}
