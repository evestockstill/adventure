export const makeAlly = (formData) => {
    const ally = {

        name: formData.get('name'),
        animal: formData.get('animal'),
        wp: 35,
        sc: 20,
        completed: {}
    };
    return ally;
};
