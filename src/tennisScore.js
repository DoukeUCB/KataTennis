const TennisScore = {
    0: "Love",
    1: "15",
    2: "30",
    3: "40"
};

Object.freeze(TennisScore);

function getValue(score, isInitial = false) {
    if (isInitial && score === 0) {
        return "Love";
    }
    return score === 0 ? "0" : TennisScore[score];
}

export { getValue }