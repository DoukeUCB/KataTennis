import getScore from './tennis';

describe('Add points correctly un score', () => {

    test('If the game starts', () => {
        expect(getScore(0, 0)).toBe('Love - Love');
    });
});