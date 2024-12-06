import React, {FC} from 'react';
import {EnvSelector} from "../../features/envSelector";
import {getCurrentTabOrigin, httpClient} from "../../shared/httpClient";
import {EnvSelectorWidgetProps} from "./types";

export const EnvSelectorWidget: FC<EnvSelectorWidgetProps> = ({ refresh, isLoading }) => {

    const onChange = async  (event?: React.ChangeEvent<HTMLSelectElement>) => {
        const baseUrlInputValue = event?.target.value
        if (typeof baseUrlInputValue === 'string') {
            httpClient.defaults.baseURL = baseUrlInputValue || await getCurrentTabOrigin();
            refresh()
        }
    }
    return (
        <EnvSelector onChange={onChange} disabled={isLoading}/>
    );
};
