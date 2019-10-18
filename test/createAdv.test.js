import createCompletedAdventure from '../map/create-completed-adventure.js';
const test = QUnit.test;
QUnit.module('create completed adventure');
test('creates correct html', (assert) => {
    // arrange
    const adventure = {
        id: 'misogyny',
        title: 'Sexism',
        map: {
            top: '89%',
            left: '44%'
        }
    };
    const expected = '<span class="adventure completed" style="top: 89%; left: 44%;">Sexism</span>';
    // act
    const dom = createCompletedAdventure(adventure);
    // assert
    assert.equal(dom.outerHTML, expected);
});