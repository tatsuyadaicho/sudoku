import React from 'react';
import styles from './style.css';

export interface NumberBoxProps {
    boxPos: number;
    memo: Array<number | null>;
    value: number | null;
}

export default function NumberBox(props: NumberBoxProps) {
    const memo = (
        <div className={styles.memoBox}>
            {props.memo.map(v => (
                <div key={`memo-${props.boxPos}-${v}`} className={styles.memo}>
                    {v}
                </div>
            ))}
        </div>
    );

    const value = <div className={styles.valueLabel}>{props.value}</div>;

    return (
        <div className={styles.numberBox}>
            {memo}
            {value}
        </div>
    );
}
