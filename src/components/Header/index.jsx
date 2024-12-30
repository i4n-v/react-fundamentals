import PropTypes from "prop-types";
import React, { useContext } from "react";
import Button from "../Button";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Header({ title, children }) {
  const { handleToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>{title}</h1>
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
