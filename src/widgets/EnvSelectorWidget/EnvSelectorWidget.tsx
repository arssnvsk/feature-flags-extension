import React, {FC, useEffect, useState} from 'react';
import {EnvSelector} from "@/features/envSelector";
import {getCurrentTabOrigin, httpClient} from "@/shared/httpClient";
import type {EnvSelectorWidgetProps} from "./types";
import type {Environment} from "@/entities/environment";
import {mapOptionsFromString} from "@/entities/environment";

export const EnvSelectorWidget: FC<EnvSelectorWidgetProps> = ({ refresh, isLoading }) => {
    const [environments, setEnvironments] = useState<Array<Environment>>();
    const onChange = async  (event?: React.ChangeEvent<HTMLSelectElement>) => {
        const baseUrlInputValue = event?.target.value
        if (typeof baseUrlInputValue === 'string') {
            httpClient.defaults.baseURL = baseUrlInputValue || await getCurrentTabOrigin();
            refresh()
        }
    }

    useEffect(() => {
        setEnvironments(mapOptionsFromString(process.env.REACT_APP_BETA_URLS))
    }, [])
    return (
        <EnvSelector onChange={onChange} disabled={isLoading} options={environments}/>
    );
};
