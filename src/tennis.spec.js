import getScore from './tennis';

describe('Score to the game', () => {

    test('If the game starts, score is in Love', () => {
        expect(getScore(0, 0)).toBe('Love - Love');
    });

    test('If some player made a point, score increases for the player', () => {
        expect(getScore(1, 0)).toBe('15 - 0');
    });

    test('If some player made a point, score increases for the player', () => {
        expect(getScore(2, 1)).toBe('30 - 15');
    });

    test('If some player made a point, score increases for the player', () => {
        expect(getScore(3, 3)).toBe('40 - 40');
    });
});