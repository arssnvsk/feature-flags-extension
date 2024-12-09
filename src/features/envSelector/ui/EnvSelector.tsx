import type {FC} from 'react';
import {EnvSelectorProps} from "./types";

export const EnvSelector: FC<EnvSelectorProps> = (props) => {
    const {options} = props
    return (
        <select {...props}>
            <option value="">Определить автоматически</option>
            {options?.map(({url, name}) => <option key={url} value={url}>{name}</option>)}
        </select>
    );
};
