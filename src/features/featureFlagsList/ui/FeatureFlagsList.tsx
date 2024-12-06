import React, {FC, useMemo, useState} from 'react';
import {FeatureFlagsListProps} from "./types";
import {Search} from "./components/Search";
import {FlagItem} from "./components/FlagItem";
import styles from './styles.module.css'

export const FeatureFlagsList: FC<FeatureFlagsListProps> = ({list}) => {
    const [search, setSearch] = useState('');

    const filteredList = useMemo(() => list.filter(flag => {
        const combined = flag.name + flag.description;
        return combined.toLowerCase().includes(search.toLowerCase());
    }), [search, list])

    return (
        <div className={styles.list}>
            <div className={styles["list-search"]}>
                <Search onSearch={setSearch}/>
            </div>
            <ul>
                {filteredList.map(featureFlag => <FlagItem key={featureFlag.id} flag={featureFlag}/>)}
            </ul>
        </div>
    );
};
