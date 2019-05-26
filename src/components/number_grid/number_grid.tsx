import React from 'react';
import styles from './style.css';
import NumberSubGrid from '../number_sub_grid';
import { SubGridProps } from '../number_sub_grid/number_sub_grid';
import range from '../../core/range/range';

export interface Store {
    values: Array<SubGridProps['values']>;
    memos: Array<SubGridProps['memos']>;
}

export default function NumberGrid(props: Store) {
    return (
        <div className={styles.numberGrid}>
            {range(9).map(v => (
                <NumberSubGrid
                    key={`grid-${v}`}
                    values={props.values[v]}
                    memos={props.memos[v]}
                    gridPos={v}
                />
            ))}
        </div>
    );
}
