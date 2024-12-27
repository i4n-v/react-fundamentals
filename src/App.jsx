import React from "react";
import Post from "./Post";
import Header from "./Header";

const posts = [
  {
    title: "Title#01",
    subtitle: "Sub#01",
    likes: 10,
  },
  {
    title: "Title#02",
    subtitle: "Sub#02",
    likes: 20,
  },
  {
    title: "Title#03",
    subtitle: "Sub#03",
    likes: 30,
  },
  {
    title: "Title#04",
    subtitle: "Sub#04",
    likes: 40,
  },
];

export default function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>
      <hr />
      {posts.map(({ likes, ...post }) => (
        <Post key={post.title} post={post} likes={likes} />
      ))}
    </>
  );
}
