import { getAlly } from '../data/saveAlly.js';
import { adventureArray } from '../data/meta-data.js';
import loadProfile from '../data/load-profile.js';
import createAdventureLink from './ create-adventure-link.js';
import createCompletedAdventure from './create-completed-adventure.js';
import hasCompletedAllAdventures from './completed-all-adventures.js';
// import completedAllAdventure from './completed-all-adventures.js';
import gameOver from '../data/game-over.js';
loadProfile();
const ally = getAlly();
if (gameOver(ally) || hasCompletedAllAdventures(adventureArray, ally)) {
    window.location = '../results';
}
const nav = document.getElementById('adventures');
for (let i = 0; i < adventureArray.length; i++) {
    const adventure = adventure[i];
    let adventureDisplay = null;
    if (ally.completed[adventure.id]) {
        adventureDisplay = createCompletedAdventure(adventure);
    } else {
        adventureDisplay = createAdventureLink(adventure);
    }
    nav.appendChild(adventureDisplay);
} 














// loadProfile(); // i predict we'll load the header on every page but the home page

// // go grab the user from localStorage
// const user = getUser();

// // if they're dead, or if they've completed all the quests
// if (isDead(user) || hasCompletedAllQuests(quests, user)) {
//     // send them to the results page
//     window.location = '../results';
// }
// // getting some quest element from DOM
// const nav = document.getElementById('quests');

// for (let i = 0; i < quests.length; i++) {
//     // for every quest
//     const quest = quests[i];
//     let questDisplay = null;
//     // if the user has completed it
//     if (user.completed[quest.id]) {
//         // make a completed quest display (with a checkmark)
//         questDisplay = createCompletedQuest(quest);
//     }
//     else {
//         // otherwiese, make a link to the quest
//         questDisplay = createQuestLink(quest);
//     }
//     nav.appendChild(questDisplay); // add the quest display to the nav
// }