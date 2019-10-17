function loadProfile() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const wp = document.getElementById('wp');
    const sc = document.getElementById('sc');
    const user = getUser();
    if (!user) {
        window.location = './index.html';
    }
    name.textContent = user.name;
    avatar.src = '../assets/avatars/' + user.race + '.png';
    sc.textContent = user.sc;
    if (gameOver(user)) {
        wp.textContent = 'Better Try Again, my friend';
    }
    else {
        wp.textContent = user.wp;
    }
}
export default loadProfile;