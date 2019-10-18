import { saveAlly } from '../data/saveAlly.js';
import { makeAlly } from './make-ally.js';
const submitBtn = document.getElementById('submit');
const allySignIn = document.getElementById('ally-sign-in');

allySignIn.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(allySignIn);
    const ally = makeAlly(formData);
    saveAlly(ally);
    window.location = '../map/index.html';
});