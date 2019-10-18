import loadProfile from '../common/load-profile.js';
import { getAlly, saveAlly } from '../data/save-ally.js';
import adventure from '../data/meta-data.js';
import createChoice from './create-choice.js';
import findById from '../common/find-by-id.js';
import scoreAdventure from './score-adventure.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);

const adventureId = searchParams.get('id');

const adventurePicked = findById(adventure, adventureId);

if (!adventure) {
    window.location = '../map/index.html';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = adventurePicked.title;
image.src = '../assets/' + adventurePicked.image;
description.textContent = adventurePicked.description;

for (let index = 0; index < adventurePicked.choices.length; index++) {
    const choice = adventurePicked.choices[index];
    const choiceDOM = createChoice(choice);
    choices.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(adventurePicked.choices, choiceId);
    const ally = getAlly();
    scoreAdventure(choice, adventurePicked.id, ally);
    saveAlly(ally);
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    loadProfile();

}); 