import React, { useState } from "react";
import Post from "./components/Post";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import Button from "./components/Button";
import styles from "./index.scss";

const staticPosts = [
  {
    id: 1,
    title: "Title#01",
    subtitle: "Sub#01",
    likes: 10,
    read: false,
    removed: false,
  },
  {
    id: 2,
    title: "Title#02",
    subtitle: "Sub#02",
    likes: 20,
    read: false,
    removed: false,
  },
  {
    id: 3,
    title: "Title#03",
    subtitle: "Sub#03",
    likes: 30,
    read: false,
    removed: false,
  },
  {
    id: 4,
    title: "Title#04",
    subtitle: "Sub#04",
    likes: 40,
    read: false,
    removed: false,
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
      read: false,
      removed: false,
    };

    setPosts((posts) => [...posts, newPost]);
  }

  function handleRemovePost(id) {
    setPosts((posts) => {
      const newPosts = [...posts];
      const postIndex = posts.findIndex((post) => post.id === id);
      newPosts[postIndex].removed = true;

      return newPosts;
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
    <ThemeProvider>
      <Header>
        <h2 className={styles.title}>Posts da semana</h2>
        <Button onClick={handleRefresh}>Atualizar</Button>
      </Header>
      <hr />
      {posts.map((post) => (
        <Post key={post.id} post={post} onRead={handleRead} onRemove={handleRemovePost} />
      ))}
    </ThemeProvider>
  );
}
