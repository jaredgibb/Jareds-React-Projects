import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/auth-slice";


const Header = () => {
  const dispatch = useDispatch();

  const isAuthed = useSelector((state) => state.user.isAuthenticated)


  function logOutHandler(event) {
    event.preventDefault();
    dispatch(userActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={logOutHandler}>{isAuthed ? 'Logout' : 'Log In'}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
