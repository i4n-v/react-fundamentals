import PropTypes from "prop-types";
import React, { useContext } from "react";
import Button from "../Button";
import { ThemeContext } from "../../contexts/ThemeContext";
import Title from "../Title";

export default function Header({ title, children }) {
  const { handleToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{title}</Title>
      <Button onClick={handleToggleTheme}>Mudar tema</Button>
      {children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: "JStack's Blog",
};
