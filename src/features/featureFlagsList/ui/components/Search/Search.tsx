import type { FC } from 'react';
import type { SearchProps } from "./types";
import styles from "./styles.module.css";

export const Search: FC<SearchProps> = ({ onSearch }) => {
    return (
        <>
            <label htmlFor="search" className={styles.form__label}>Фичи-флаг</label>
            <input
                id="search"
                onChange={(e) => onSearch(e.target.value)} placeholder="Введите название или описание"
                className={styles.form__input}
            />
        </>
    );
};
