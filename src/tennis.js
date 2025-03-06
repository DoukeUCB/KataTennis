import { getValue } from './tennisScore.js';

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
    return getValue(playerScore);
}

export default getScore;