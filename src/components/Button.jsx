import PropTypes from "prop-types";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      style={{
        color: theme === "dark" ? "#FFF" : "#000",
        backgroundColor: theme === "dark" ? "#000" : "#FFF",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
