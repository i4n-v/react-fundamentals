import PropTypes from "prop-types";
import React from "react";
import Button from "../Button";

export default function PostHeader({ post, onRemove, onRead }) {
  return (
    <>
      <strong>{post.read ? <s>{post.title}</s> : post.title}</strong>
      {!post.read && !post.removed && <Button onClick={() => onRead(post.id)}>Ler</Button>}
      {!post.removed && <Button onClick={() => onRemove(post.id)}>Remover</Button>}
    </>
  );
}

PostHeader.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
};
