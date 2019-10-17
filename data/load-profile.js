import { getAlly } from './saveAlly.js';
import gameOver from './game-over.js';
function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const wp = document.getElementById('wp');
    const sc = document.getElementById('sc');
    const ally = getAlly();
    if (!ally) {
        window.location = './index.html';
    }
    name.textContent = ally.name;
    avatar.src = './assets/avatar' + ally.animal + '.png';
    sc.textContent = ally.sc;
    if (gameOver(ally)) {
        wp.textContent = 'Better Try Again, my friend';
    }
    else {
        wp.textContent = ally.wp;
    }
}
export default loadProfile;