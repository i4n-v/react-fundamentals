import React, { useMemo } from "react";
import PropTypes from "prop-types";
import PostHeader from "../PostHeader";
import styles from "./index.scss";
import mountClassName from "../../utils/mountClassName";

export default function Post({ post, onRemove, onRead }) {
  const postClassName = useMemo(() => {
    const className = mountClassName([styles.post, styles.removed], (classItem) => {
      return (post.removed && classItem === styles.removed) || classItem !== styles.removed;
    });

    return className;
  }, [post.removed]);

  return (
    <>
      <article className={postClassName}>
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
