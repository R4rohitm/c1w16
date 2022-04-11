import React from "react"
import data from '../data.json'
import GroceryItem from './GroceryItem'
import styles from './Grocerydetails.module.css'

// let newData = JSON.parse(data)

// console.log(newData)

const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className={styles.container}>
            {data.map(item=>{
                return(
                    <GroceryItem key={item.id} {...item} />
                )
            })}
        </div>
        </>
    )
}
export default GroceryDetails