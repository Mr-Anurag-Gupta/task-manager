import { createContext, useState } from "react";

export const theme = {
  blue: {
    body: { background: "#655DBB", border: "#444c56", text: "#BFACE2" },
    navbar: {
      background: "#655DBB",
      text: "#BFACE2",
      icon: { background: "#655DBB", border: "#BFACE2" },
    },
    main: {
      background: "#655DBB",
      login: {
        background: "#655DBB",
        border: "#BFACE2",
        text: "#BFACE2",
        button: {
          background: "#BFACE2",
          border: "#655DBB",
          text: "#655DBB",
          hover: {
            background: "#655DBB",
            border: "#BFACE2",
            text: "#BFACE2",
          },
        },
      },
      input: {
        background: "#655DBB",
        border: "#BFACE2",
        text: "#ECF2FF",
        focus: {
          text: "#adbac7",
        },
      },
      card: {
        background: "#655DBB",
        border: "#3E54AC",
        text: "#BFACE2",
        button: {
          background: "#655DBB",
          border: "#BFACE2",
          text: "#FFFFFF",
          hover: {
            background: "#BFACE2",
            border: "#768390",
            text: "#655DBB",
          },
        },
      },
      filter: {
        button: {
          background: "#BFACE2",
          text: "#655DBB",
          hover: {
            background: "#655DBB",
            border: "#BFACE2",
            text: "#FFFFFF",
          },
        },
      },
    },
  },
  light: {
    body: { background: "#FFF6EB", border: "#FFFFFF", text: "#404040" },
    navbar: {
      background: "#FFF0DE",
      text: "#404040",
      icon: { background: "#FFF0DE", border: "#FFFFFF" },
    },
    main: {
      background: "#FFF6EB",
      login: {
        background: "#FDBBAC",
        border: "#BFACE2",
        text: "#444C56",
        button: {
          background: "#404040",
          border: "#404040",
          text: "#FFFFFF",
          hover: {
            background: "#171513",
            border: "#FFFFFF",
            text: "#FFFFFF",
          },
        },
      },
      input: {
        background: "#FFFFFF",
        border: "#BFACE2",
        text: "#404040",
        focus: {
          text: "#adbac7",
        },
      },
      filter: {
        button: {
          background: "#404040",
          text: "#FFFFFF",
          hover: {
            background: "#171513",
            border: "#FFFFFF",
            text: "#FFFFFF",
          },
        },
      },
      card: {
        background: "#FDBBAC",
        border: "#FFFFFF",
        text: "#444C56",
        button: {
          background: "#404040",
          // border: "#404040",
          text: "#FFFFFF",
          hover: {
            background: "#171513",
            border: "#FFFFFF",
            text: "#FFFFFF",
          },
          disabled: {
            background: "rgba(64, 64, 64, 0.75)",
            text: "rgba(255, 255, 255, 0.75)",
          },
        },
      },
    },
  },
  dark: {
    body: { background: "#22272e", border: "#444c56", text: "#adbac7" },
    navbar: {
      background: "#2d333b",
      text: "#cdd9e5",
      icon: { background: "#2d333b", border: "#444c56" },
    },
    main: {
      background: "#22272e",
      login: {
        text: "#cdd9e5",
        background: "#444c56",
        border: "#adbac7",
        button: {
          background: "#373e47",
          border: "rgba(205, 217, 229, 0.1)",
          text: "#adbac7",
          hover: {
            background: "#444c56",
            border: "#768390",
          },
        },
      },
      input: {
        background: "#22272e",
        border: "#444c56",
        text: "#cdd9e5",
        focus: {
          text: "#adbac7",
        },
      },
      filter: {
        button: {
          background: "#444c56",
          text: "#adbac7",
          hover: {
            background: "#373e47",
            border: "rgba(205, 217, 229, 0.1)",
            text: "#adbac7",
          },
        },
      },
      card: {
        background: "#444c56",
        border: "#222222",
        text: "#adbac7",
        button: {
          background: "#373e47",
          // border: "rgba(205, 217, 229, 1)",
          text: "#adbac7",
          hover: {
            background: "#444c56",
            border: "#768390",
          },
          disabled: {
            background: "#525860",
            text: "rgba(173, 186, 199, 0.75)",
          },
        },
      },
    },
  },
};

const initialState = {
  theme: theme.dark,
  isDark: true,
  handleThemeChange: (isdark) => {},
};

const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme.dark);
  const [isDark, setIsDark] = useState(true);

  const handleThemeChange = (isDark) => {
    const newCurrentTheme = isDark ? theme.dark : theme.light;
    setIsDark(isDark);
    setCurrentTheme(newCurrentTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        isDark: isDark,
        handleThemeChange: handleThemeChange,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
