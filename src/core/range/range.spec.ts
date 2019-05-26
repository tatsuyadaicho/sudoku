import range from './range';

describe('range', () => {
    test('create value range', () => {
        const values = range(5);
        expect(values).toEqual([0, 1, 2, 3, 4]);
    });

    test('offset start pos', () => {
        const values = range(3, 5);
        expect(values).toEqual([5, 6, 7]);
    });
});
