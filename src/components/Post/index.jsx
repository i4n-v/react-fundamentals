import React from "react";
import PropTypes from "prop-types";
import PostHeader from "../PostHeader";
import { Subtitle, Rate, Container } from "./styles";

export default function Post({ post, onRemove, onRead }) {
  return (
    <>
      <Container removed={post.removed}>
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
        <Subtitle>{post.subtitle}</Subtitle>
        <Rate>Média: {post.likes / 2}</Rate>
      </Container>
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
