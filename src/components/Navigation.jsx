import { Link, withRouter } from "react-router-dom";
import styles from "../styles/navigation.module.css";

function Navigation(props) {
  const back = () => {
    props.history.goBack();
  };
  const forward = () => {
    props.history.goForward();
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img
              className={styles["logo"]}
              src="https://www.freeiconspng.com/uploads/blogger-logo-icon-png-1.png"
              alt="Blog Logo"
            />
          </Link>
        </li>
        {props.location.pathname === "/" ? (
          <h1>Home Page</h1>
        ) : (
          <>
            <li className={styles["nav-links"]}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles["nav-links"]}>
              <button className={styles["nav-button"]} onClick={back}>
                {"<"}
              </button>
              <button className={styles["nav-button"]} onClick={forward}>
                {">"}
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default withRouter(Navigation);
