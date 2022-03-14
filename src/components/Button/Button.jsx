//React
import * as React from 'react';

//Styles
import * as styles from './Button.module.scss';

const Button = ({children, style})=>{
    return(
        <div style={style} className={styles.button} >{children}</div>
    )
}

export default Button;