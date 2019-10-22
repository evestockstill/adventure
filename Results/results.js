import loadProfile from '../data/load-profile.js';
import { getAlly } from '../data/saveAlly.js';
import scoreWp from './scoreWp.js';
import scoreSc from './scoreSc.js';
import { wpMessages, gameOverMessages, scMessages } from './messages.js';

loadProfile();
const user = getAlly();
const storyDisplay = document.getElementById('story-display');
const wpResult = scoreWp(user.wp);
const scResult = scoreSc(user.sc);

if (wpResult === 'gameOver') {
    wpMessages = gameOverMessages;
}
else if (wpResult === wpMessages) {
    wpMessages;
}
else {
    scResult === scMessages;
} 
let story = 'After your adventures, ';
story += user.name ;
wpMessages; 

storyDisplay.textContent = story;
