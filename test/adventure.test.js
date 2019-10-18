import createAdventureLink from '../map/ create-adventure-link.js';
const test = QUnit.test;
QUnit.module('create adventure link');
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
    const expected = '<a class="adventure" href="../adventure/?id=misogyny" style="top: 89%; left: 44%;">Sexism</a>';
    // act
    const dom = createAdventureLink(adventure);
    // assert
    assert.equal(dom.outerHTML, expected);
});