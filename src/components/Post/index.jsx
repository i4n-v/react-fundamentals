import React, { useMemo } from "react";
import PropTypes from "prop-types";
import PostHeader from "../PostHeader";

export default function Post({ post, onRemove, onRead }) {
  return (
    <>
      <article>
        <PostHeader
          post={{
            id: post.id,
            title: post.title,
            read: post.read,
            removed: post.removed,
          }}
          onRead={onRead}
          onRemove={onRemove}
        />
        <br />
        <small>{post.subtitle}</small>
        <br />
        Média: {post.likes / 2}
      </article>
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
    removed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
};
