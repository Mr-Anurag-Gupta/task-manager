import styled from "styled-components";
import logo from "../../assets/notebook64.png";
import classes from "./NavHeading.module.css";

export default function NavHeading({ className }) {
  return (
    <header className={`${classes.nav__heading} ${className}`}>
      <div className={classes.nav__logo}>
        <img
          src={logo}
          alt='Task Manager Logo'
          aria-label='Task manager logo'
        />
      </div>
      <h2>Task Manager</h2>
    </header>
  );

  //text-shadow: 2px 3px 0px ${(props) => props.theme.navbar.icon.border};
}

export const StyledNavHeading = styled(NavHeading)`
  div {
    background-color: ${(props) => props.theme.navbar.icon.background};
    border-color: ${(props) => props.theme.navbar.icon.border};
  }
  h2 {
    line-height: 1.2;
  }
`;
