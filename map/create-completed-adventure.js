function createCompletedAdventure(adventures) {
    const span = document.createElement('span');
    span.classList.add('adventure');
    span.classList.add('completed');
    span.style.top = adventures.map.top;
    span.style.left = adventures.map.left;
    span.textContent = adventures.title;
    return span;
}
export default createCompletedAdventure;