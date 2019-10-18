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
        gold: false,
        silver: false,
        bronze: false,
        completed: {}
    };
    const ally = makeAlly(formData);
    assert.deepEqual(ally, expected);
});