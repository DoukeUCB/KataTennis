function getScore(playerOneScore, playerTwoScore) {

    let score = "";

    if (playerOneScore == 0 && playerTwoScore == 0)
        score = "Love - Love";

    return score;
}

export default getScore;