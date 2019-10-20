function hasCompletedAllAdventure(adventures, ally) {
    for (let i = 0; i < adventures.length; i++) {
        const adventure = adventures[i];
        if (!ally.completed[adventure.id]) {
            return false;
        }
    }
    return true;
}
export default hasCompletedAllAdventure;