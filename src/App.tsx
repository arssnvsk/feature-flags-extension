import React, {useEffect, useState} from 'react';
import {getFeatureFlags} from "./entities/featureFlags";
import type {FeatureFlagsList as FeatureFlagsListType} from './entities/featureFlags'
import {FeatureFlagsList} from './features/featureFlagsList'
import {Loader} from "./shared/uikit/Loader";
import {Button} from "./shared/uikit/Button";
import {EnvSelectorWidget} from "./widgets/EnvSelectorWidget";
import styles from './styles.module.css';

export const App = () => {
    const [list, setList] = useState<FeatureFlagsListType>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false)


    const fetchFlags = async () => {
        setIsLoading(true)
        setIsError(false)
        try {
            const res = await getFeatureFlags({limit: 10000});
            setList(res.data.data)
        } catch {
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchFlags()
    }, [])
    return (
        <div className={styles.app}>
            <div className={styles.header}>
                <EnvSelectorWidget refresh={fetchFlags} isLoading={isLoading}/>
                <Button onClick={fetchFlags} disabled={isLoading}>Refresh</Button>
            </div>
            <div className={styles.content}>
                {isLoading && <Loader/>}
                {!isLoading && !isError && <FeatureFlagsList list={list}/>}
                {isError && <p>Возникла ошибка. Попробуйте повторить или выберите среду из списка доступных выше</p>}
            </div>
        </div>
    );
}

