const asteroidCollision = require('./asteroidCollision');

describe('行星碰撞', () => {
    test('asteroidCollision', () => {
        expect(asteroidCollision([5, 10, -5])).toEqual([5, 10]);
        expect(asteroidCollision([8, -8])).toEqual([]);
        expect(asteroidCollision([10, 2, -5])).toEqual([10]);
        expect(asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2]);
        expect(asteroidCollision([-2, 1, -2, -1])).toEqual([-2, -2, -1]);
        expect(asteroidCollision([-2, 1, -1, -2])).toEqual([-2, -2]);
        expect(asteroidCollision([-2, 2, -1, -2])).toEqual([-2]);
    });
});
