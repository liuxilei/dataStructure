/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    for (let i = asteroids.length - 1; i >= 0; i--) {
        if (asteroids[i] < 0 && asteroids[i - 1] > 0) {
            if (Math.abs(asteroids[i]) === Math.abs(asteroids[i - 1])) {
                asteroids.splice(i, 1);
                asteroids.splice(i - 1, 1);
                i = asteroids.length;
            } else if (Math.abs(asteroids[i]) > Math.abs(asteroids[i - 1])) {
                asteroids[i - 1] = asteroids[i];
                asteroids.splice(i, 1);
                i = asteroids.length;
            } else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i - 1])) {
                asteroids.splice(i, 1);
                i = asteroids.length;
            }
        }
    }
    return asteroids;
};

module.exports = asteroidCollision;
