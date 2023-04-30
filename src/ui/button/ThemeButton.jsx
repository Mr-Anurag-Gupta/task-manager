import { useContext } from "react";
import ThemeContext from "../../context/theme-context";
import classes from "./ThemeButton.module.css";

const ThemeButton = () => {
  const themeContext = useContext(ThemeContext);

  let extraClasses = themeContext.isDark
    ? classes.th__button_dark
    : classes.th__button_light;

  return (
    <div className={classes.th__container}>
      <button
        className={`${classes.th__button} ${extraClasses}`}
        onClick={() => themeContext.handleThemeChange(!themeContext.isDark)}
        type='button'></button>
    </div>
  );
};

export default ThemeButton;
