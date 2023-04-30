import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import ThemeButton from "../button/ThemeButton";

import styles from "./Navbar.module.css";
import styled from "styled-components";
import { StyledNavHeading } from "./NavHeading";

export default function Navbar({ className }) {
  const context = useContext(AuthContext);

  return (
    <div className={`${styles.nav__wrapper} ${className}`}>
      <nav className={`${styles.nav__container} `}>
        <StyledNavHeading />
        <ul className={styles.nav__navbar}>
          <li>
            {context.isLoggedIn === true ? (
              <a href='/' onClick={context.handleLogout}>
                Logout
              </a>
            ) : (
              ""
            )}
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export const StyledNavbar = styled(Navbar)`
  background-color: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.navbar.text};
  nav {
    background-color: ${(props) => props.theme.navbar.background};
    color: ${(props) => props.theme.navbar.text};
  }
`;
