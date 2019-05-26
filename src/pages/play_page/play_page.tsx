import React from 'react';
import NumberGrid from '../../components/number_grid';
import { Store } from '../../components/number_grid/number_grid';

const range = (length: number) => Array.from({ length }, (v, k) => k);

export default function PlayPage() {
    const store: Store = {
        values: Array(9).fill(range(9)),
        memos: Array(9).fill(Array(9).fill(Array(9).fill(null))),
    };

    return <NumberGrid {...store} />;
}
