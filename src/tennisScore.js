const TennisScore = {
    0: "0",
    1: "15",
    2: "30",
    3: "40"
};

Object.freeze(TennisScore);

function getValue(score) {
    return TennisScore[score];
}

export {getValue}