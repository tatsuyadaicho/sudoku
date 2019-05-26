import React from 'react';
import styles from './style.css';

interface Props {
    label: string;
}

export default function Button(props: Props) {
    return <button className={styles.buttonBase}>{props.label}</button>;
}
