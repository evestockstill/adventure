function hasCompletedAllAdventure(adventure, ally) {
    for (let i = 0; i < adventure.length; i++) {
        const adventure = adventure[i];
        if (!ally.completed[adventure.id]) {
            return false;
        }
    }
    return true;
}
export default hasCompletedAllAdventure;