import React, {FC} from "react";
import type {FlagItemProps} from "./types";
import styles from './styles.module.css';

export const FlagItem: FC<FlagItemProps> = ({flag}) => {
    return (
        <li>
            <details tabIndex={flag.description ? undefined : -1}>
                <summary
                    className={`${styles.summary} ${flag.enabled ? styles.summaryEnabled : ''}`}>
                    {!!flag.description && <img height={20} width={20} src={chrome.runtime.getURL("SVG/chevronDown.svg")} alt="down"/>}
                    <p>{flag.name}</p>
                </summary>
                {!!flag.description && <div className={styles.description}>
                    <p>{flag.description}</p>
                </div>}
            </details>
        </li>
    );
};
