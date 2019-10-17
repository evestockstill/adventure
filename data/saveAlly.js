export function saveAlly(ally) {
    const json = JSON.stringify(ally);
    localStorage.setItem('ally', json);
}

export function getAlly() {
    const json = localStorage.getItem('ally');
    if (!json) return null;
    const ally = JSON.parse(json);
    return ally;
}