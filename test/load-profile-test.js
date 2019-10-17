import { makeAlly } from '../home/make-ally.js';
const test = QUnit.test;
QUnit.module('make ally character');
test('create ally object from form data', (assert) => {
    // arrange
    const formData = new FormData();
    formData.set('animal', 'raccoon');
    const expected = {
        animal: 'raccoon',
        name: null,
        wp: 35,
        sc: 20,
        completed: {}
    };
    // act
    const ally = makeAlly(formData);
    // assert
    assert.deepEqual(ally, expected);
});