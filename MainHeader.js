import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { uiActions } from "../store/ui-slice";
import { UseDispatch, useDispatch } from "react-redux";

const MainHeader = (props) => {
  const disptach = useDispatch();
  function toggleCartHandler() {
    disptach(uiActions.toggle());
  }
  return (
    <header className={classes.header} onClick={toggleCartHandler}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
