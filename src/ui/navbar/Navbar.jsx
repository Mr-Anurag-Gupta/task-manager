import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const context = useContext(AuthContext);

  return (
    <div>
      <nav className={styles.nav__container}>
        <header className={styles.nav__heading}>
          <h2>Task Manager</h2>
        </header>
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
        </ul>
      </nav>
    </div>
  );
}
