import React from 'react';
import styles from './MyButton.module.css'
console.log(styles)
const MyButton = ({ title }) => {
    console.log(title)
    return (
        <div className={styles.myButton}>
            <button>{title}</button>
        </div>
    );
}

export default MyButton;