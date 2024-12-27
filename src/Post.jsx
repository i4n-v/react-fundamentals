import React from "react";
import PropTypes from "prop-types";

export default function Post({ post, onRemove, onRead }) {
  return (
    <>
      <article>
        <strong>{post.read ? <s>{post.title}</s> : post.title}</strong>
        {!post.read && <button onClick={() => onRead(post.id)}>Ler</button>}
        <button onClick={() => onRemove(post.id)}>Remover</button>
        <br />
        <small>{post.subtitle}</small>
        <br />
        Média: {post.likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
};
