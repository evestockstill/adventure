function findById(adventures, id) {
    for (let index = 0; index < adventures.length; index++) {
        const adventure = adventures[index];
        if (adventure.id === id) {
            return adventure;
        }
    }
    return null;
}
export default findById;