
import react from 'react';
import {useState} from 'react';
import styles from './CartButton.module.css'

// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    let [count, setCount] = useState(0)
    const [isAuth,setAuth] = useState(true)
    
    const handleAdd = () => {
      setCount((prevState)=>prevState+1)
    }

    const handleRemove = () => {
      setCount((prevState)=>prevState-1)
    }

    const handleCart = () => {
      setCount(1)
      setAuth(false)
    }

    if(count>0){
       return (
      <>
      {/* count with - and  + button */}
    <div className={styles.btns}>
      <button className={styles.btn2} onClick={handleRemove}>-</button>
      <p className="count-item">{count}</p>
      <button className={styles.btn2} onClick={handleAdd}>+</button>
    </div>
      </>
      )
    }
    return (
        <>
        <button className={styles.btn} onClick={handleCart}>Add To Cart</button>
        </>
      )
  }
export default CartButton
