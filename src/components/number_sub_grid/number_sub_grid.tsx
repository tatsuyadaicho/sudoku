import React from 'react';
import styles from './style.css';
import NumberBox from '../number_box';
import { NumberBoxProps } from '../number_box/number_box';
import range from '../../core/range/range';

export interface SubGridProps {
    gridPos: number;
    values: Array<NumberBoxProps['value']>;
    memos: Array<NumberBoxProps['memo']>;
}

export default function NumberSubGrid(props: SubGridProps) {
    return (
        <div className={styles.numberSubGrid}>
            {range(9).map(v => (
                <NumberBox
                    key={`subgrid-${props.gridPos}-${v}`}
                    boxPos={v}
                    value={props.values[v]}
                    memo={props.memos[v]}
                />
            ))}
        </div>
    );
}
