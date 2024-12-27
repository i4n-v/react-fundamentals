import PropTypes from "prop-types";
import React, { createContext, useState } from "react";

const defaultValues = {
  theme: "dark",
  handleToggleTheme: () => {},
};

const ThemeContext = createContext(defaultValues);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function handleToggleTheme() {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeProvider };
