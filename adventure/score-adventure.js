function scoreAdventure(choice, adventureId, ally) {
    ally.wp += choice.wp;
    ally.sc += choice.sc;
    ally.completed[adventureId] = true;
}
export default scoreAdventure; 