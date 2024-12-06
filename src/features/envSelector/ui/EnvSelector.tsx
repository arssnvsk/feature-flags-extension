import type {FC} from 'react';
import {EnvSelectorProps} from "./types";

export const EnvSelector: FC<EnvSelectorProps> = (props) => {
    return (
        <select {...props}>
            <option value="">Определить автоматически</option>
            <option value={process.env.REACT_APP_BETA_URL_02}>02</option>
            <option value={process.env.REACT_APP_BETA_URL_09}>09</option>
            <option value={process.env.REACT_APP_BETA_URL_10}>10</option>
        </select>
    );
};
