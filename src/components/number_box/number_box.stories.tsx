// tslint:disable: no-implicit-dependencies
import React from 'react';
import { storiesOf } from '@storybook/react';

import NumberBox from './number_box';

const range = (length: number) => Array.from({ length }, (v, k) => k + 1);

storiesOf('NumberBox', module).add('values', () => (
    <div style={{ width: '40px', height: '40px', backgroundColor: 'darkblue' }}>
        <NumberBox value={1} memo={[]} boxPos={0} />
    </div>
));

storiesOf('MemoBox', module).add('values', () => (
    <div style={{ width: '40px', height: '40px', backgroundColor: 'darkblue' }}>
        <NumberBox value={null} memo={range(9)} boxPos={0} />
    </div>
));
