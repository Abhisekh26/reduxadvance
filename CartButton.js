import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';
const CartButton = (props) => {
  const disptach = useDispatch();
  const selector=useSelector((state)=>state.cart.totalQuantity)
  function toggleCartHandler() {
    disptach(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{selector}</span>
    </button>
  );
};

export default CartButton;
