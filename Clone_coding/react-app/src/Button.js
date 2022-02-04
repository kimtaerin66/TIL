import PropsTypes from "prop-types";
import styles from "./Button.module.css"


function Button({text}){ ///text를 받는다
    return <button className={styles.btn}>{text}</button>
}

Button.PropsTypes ={
    text : PropsTypes.string.isRequired,
};

export default Button;