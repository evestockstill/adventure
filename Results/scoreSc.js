function scoreSc(sc) {
    if (sc === 0) {
        return 'prety good';
    }
    else if (sc < 50) {
        return 'you gotta do you';
    }
    return 'rich';
}

export default scoreSc;