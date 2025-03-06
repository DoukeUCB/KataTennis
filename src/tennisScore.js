const TennisScore = {
    
    15: 1,
    30: 2,
    40: 3
};

Object.freeze(TennisScore);

function getValue(score) {
    return TennisScore[score];
}