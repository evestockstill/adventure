function scoreWp(wp) {
    if (wp === 0) {
        return 'poor';
    }
    else if (wp < 50) {
        return 'try better';
    }
    return 'excellent';
}

export default scoreWp;