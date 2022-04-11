// reusable card component
import react from 'react';
import CartButton from './CartButton'
import styles from './GroceryItem.module.css';

const GroceryItem = (props) => {

 
  const {id, title,discount,mrp,sellingPrice,imgURL} = props
  
  
  return (<>

  <div className={styles.container}>
    <div className={styles.product}>
    <div>
      <div className={styles.discount}>{discount}</div>
      <img src={imgURL} alt={title}/>
    </div>
    <h2>{title}</h2>
    <div className={styles.price}>
      <h3>{sellingPrice}</h3>
      <p>M.R.P: {mrp}</p>
    </div>
    
  </div>
  
  <div>
    <CartButton />
  </div>
  </div>
  </>);
};
export default GroceryItem;
