/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let currentScore = 0;
let currentRank = 0;

const answerOne = "THE NILE"; 
const answerTwo = "JOHNNY DEPP";
const answerThree = "1945";
const answerFour = "MADRID";
const answerFive = "CHRIS MARTIN";

// 2. Store the rank of a player
const rankOne = "Gold";
const rankTwo = "Silver";
const rankThree = "Bronze";
const noRank = "No Rank";

// Asks five questions and logs the answers
const questionOne = prompt("What is the name of the river that runs through Egypt?");
  console.log(questionOne);
const questionTwo = prompt("Who played Jack Sparrow in Pirates of the Caribbean?");
  console.log(questionTwo);
const questionThree = prompt("What year did World War 2 end?");
  console.log(questionThree);
const questionFour = prompt("What is the capital of Spain?");
  console.log(questionFour);
const questionFive = prompt("Who is the lead singer of Coldplay?");
  console.log(questionFive);

// Keep track of players rank
if (questionOne.toUpperCase() === answerOne) {
  currentScore = currentScore + 1;
  console.log(`1. Correct`);
  document.querySelector(".answerOne").innerHTML = `1. Congratulations, you got this question right!`
} else {
  console.log(`1. Incorrect`);
  document.querySelector(".answerOne").innerHTML = `1. Sorry, you answered this question incorrectly. The correct answer was ${answerOne}`
}

if (questionTwo.toUpperCase() === answerTwo) {
  currentScore = currentScore + 1;
  console.log(`2. Correct`);
  document.querySelector(".answerTwo").innerHTML = `2. Congratulations, you got this question right!`
} else {
  console.log(`2. Incorrect`);
  document.querySelector(".answerTwo").innerHTML = `2. Sorry, you answered this question incorrectly. The correct answer was ${answerTwo}`
}

if (questionThree.toUpperCase() === answerThree) {
  currentScore = currentScore + 1;
  console.log(`3. Correct`);
  document.querySelector(".answerThree").innerHTML = `3. Congratulations, you got this question right!`
} else {
  console.log(`3. Incorrect`);
  document.querySelector(".answerThree").innerHTML = `3. Sorry, you answered this question incorrectly. The correct answer was ${answerThree}`
}

if (questionFour.toUpperCase() === answerFour) {
  currentScore = currentScore + 1;
  console.log(`4. Correct`);
  document.querySelector(".answerFour").innerHTML = `4. Congratulations, you got this question right!`
} else {
  console.log(`4. Incorrect`);
  document.querySelector(".answerFour").innerHTML = `4. Sorry, you answered this question incorrectly. The correct answer was ${answerFour}`
}

if (questionFive.toUpperCase() === answerFive) {
  currentScore = currentScore + 1;
  console.log(`5. Correct`);
  document.querySelector(".answerFive").innerHTML = `5. Congratulations, you got this question right!`
} else {
  console.log(`5. Incorrect`);
  document.querySelector(".answerFive").innerHTML = `5. Sorry, you answered this question incorrectly. The correct answer was ${answerFour}`

}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (currentScore === 5)
{
  currentRank = rankOne
} else if (currentScore === 4 || currentScore === 3) {
  currentRank = rankTwo
} else if (currentScore === 2 || currentScore === 1) {
  currentRank = rankThree
} else {
  currentRank = noRank
}


// 6. Output results to the <main> element

document.querySelector("main").innerHTML = `<h2>You got ${currentScore} out of 5 questions correct!</h2>
                                            <p>Rank earned: ${currentRank}</p>`