// tslint:disable: no-implicit-dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';

import NumberGrid, { Store } from './number_grid';
import range from '../../core/range/range';

storiesOf('Show Values', module).add('values', () => {
    const store: Store = {
        values: Array(9).fill(range(9)),
        memos: Array(9).fill(Array(9).fill(Array(9).fill(null))),
    };

    return (
        <div
            style={{
                width: '360px',
                height: '360px',
                backgroundColor: 'darkblue',
            }}
        >
            <NumberGrid {...store} />
        </div>
    );
});

storiesOf('Show Memos', module).add('values', () => {
    const store: Store = {
        values: Array(9).fill(Array(9).fill(null)),
        memos: Array(9).fill(Array(9).fill(range(9))),
    };

    return (
        <div
            style={{
                width: '360px',
                height: '360px',
                backgroundColor: 'darkblue',
            }}
        >
            <NumberGrid {...store} />
        </div>
    );
});
