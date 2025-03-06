import { getValue } from './tennisScore.js';

function getScore(playerOneScore, playerTwoScore) {
    const scoreMap = {
        deuce: playerOneScore >= 3 && playerTwoScore >= 3 && playerOneScore === playerTwoScore,
        default: true
    };

    if (scoreMap.deuce) {
        return "Deuce";
    }

    const isInitial = playerOneScore === 0 && playerTwoScore === 0;
    return `${incrementScore(playerOneScore, isInitial)} - ${incrementScore(playerTwoScore, isInitial)}`;
}

function incrementScore(playerScore, isInitial) {
    return getValue(playerScore, isInitial);
}

export default getScore;