import type { FC } from 'react';
import {ButtonProps} from "./types";
import styles from './styles.module.css'

export const Button: FC<ButtonProps> = (props) => {
    return (
        <button {...props} className={styles.button}>
            {props.children}
        </button>
    );
};
