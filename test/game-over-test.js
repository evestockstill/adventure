import gameOver from '../data/game-over.js';
const test = QUnit.test;
QUnit.module('game is over');
test('true', function(assert) {
    const ally = {
        wp: 0
    };
    const over = gameOver(ally);
    assert.equal(over, true);
});
test('false', function(assert) {
    const ally = {
        wp: 10
    };
    const over = gameOver(ally);
    assert.equal(over, false);
});