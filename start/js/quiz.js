/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let currentScore = 0;
let currentRank = 0;

const egypt = "THE NILE"; 
const pirate = "JOHNNY DEPP";
const war = "1945";
const spain = "MADRID";
const coldplay = "CHRIS MARTIN";



// 2. Store the rank of a player
const rankOne = "Gold";
const rankTwo = "Silver";
const rankThree = "Bronze";
const noRank = "No Rank";

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
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
if (questionOne.toUpperCase() === egypt) {
  currentScore = currentScore + 1;
  console.log(`1. Correct`);
} else {
  console.log(`1. Incorrect`);
}

if (questionTwo.toUpperCase() === pirate) {
  currentScore = currentScore + 1;
  console.log(`2. Correct`);
} else {
  console.log(`2. Incorrect`);
}

if (questionThree.toUpperCase() === war) {
  currentScore = currentScore + 1;
  console.log(`3. Correct`);
} else {
  console.log(`3. Incorrect`);
}

if (questionFour.toUpperCase() === spain) {
  currentScore = currentScore + 1;
  console.log(`4. Correct`);
} else {
  console.log(`4. Incorrect`);
}

if (questionFive.toUpperCase() === coldplay) {
  currentScore = currentScore + 1;
  console.log(`5. Correct`);
} else {
  console.log(`5. Incorrect`);
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