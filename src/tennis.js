function getScore(playerOneScore, playerTwoScore) {
    let score = "";

    if (playerOneScore == 0 && playerTwoScore == 0) {
        score = "Love - Love";
    } else {
        score = `${incrementScore(playerOneScore)} - ${incrementScore(playerTwoScore)}`;
    }

    return score;
}

function incrementScore(playerScore) {
    let newScore;
    switch (playerScore) {
        case 1:
            newScore = 15;
            break;
        case 2:
            newScore = 30;
            break;
        case 3:
            newScore = 40;
            break;
        default:
            newScore = playerScore;
            break;
    }
    return newScore;
}

export default getScore;
