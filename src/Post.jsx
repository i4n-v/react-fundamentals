import React from "react";
import PropTypes from "prop-types";

export default function Post({ post, likes, onRemove }) {
  return (
    <>
      <article>
        <strong>{post.title}</strong>
        <button onClick={() => onRemove(post.id)}>Remover</button>
        <br />
        <small>{post.subtitle}</small>
        <br />
        Média: {likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};
