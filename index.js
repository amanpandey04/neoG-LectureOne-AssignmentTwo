// packages
const readlineSync = require("readline-sync");
const chalk = require('chalk');


let score = 0;

// highscore array
const highScore = [
  {
    name: "Pepper",
    score: 10
  },
  {
    name: "Rhodey",
    score: 8
  },
  {
    name: "Steve",
    score: 6
  }
];

// questions array
const questions = [
  {
    question: `1. What is Tony Stark's field of study?
    (a) Biotechnology
    (b) Physics and electrical engineering
    (c) Mechanical engineering
    `,
    answer: "b"
  },
  {
    question: `2. At what age did Tony Stark enter MIT?
    (a) 10
    (b) 25
    (c) 15
    `,
    answer: "c"
  },
  {
    question: `3. Who is Tony Stark's best friend?
     (a) Steve Rogers 
     (b) James 'Rhodey' Rhodes
     (c) Bruce Banner
    `,
    answer: "b"
  },
  {
    question: `4. When Tony Stark said 'Sometimes you gotta run before you can walk', who was he talking to?
     (a) JARVIS
     (b) Pepper
     (c) Rhodey
    `,
    answer: "a"
  },
  {
    question: `5. What's the name of Tony Stark's daughter?
     (a) Natasha
     (b) Rachel
     (c) Morgan
    `,
    answer: "c"
  },
  {
    question: `6. Who killed Tony Stark's parents?
     (a) James 'Bucky' Barnes
     (b) Thanos
     (c) Loki
    `,
    answer: "a"
  },
  {
    question: `7. Where was Tony Stark captured?
     (a) Iraq
     (b) Afghanistan
     (c) Somalia
    `,
    answer: "b"
  },
  {
    question: `8. Who put the electromagnet inside Tony Stark's chest?
     (a) Ho Yinsen
     (b) Nick Fury
     (c) Bruce Banner
    `,
    answer: "a"
  },
  {
    question: `9. Who is Tony Stark's bodyguard?
     (a) JARVIS
     (b) Vision
     (c) Happy Hogan
    `,
    answer: "c"
  },
  {
    question: `10. What is Tony Stark's net worth?
     (a) $10.2 billion
     (b) $12.4 billion
     (c) $4.8 billion
    `,
    answer: "b"
  }
];

console.log(chalk.black.bgGreenBright.bold.underline("Tony Stark Quiz!\n"));

const player = readlineSync.question("What's your name?\n");

console.log(chalk.bgYellow(`\nWelcome to the 'Tony Stark quiz', ${player}!
Below are some questions about Tony Stark aka Ironman.
Every correct answer will get you 1 point.
And don't worry, you won't be penalized for the wrong answers.
Have fun!\n`));

// play function
function play(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("\nNice! That's correct. You get 1 point.\n"));
    score = score + 1;
  } else {
    console.log(chalk.red("\noops! That's a wrong answer.\n"));
  }

  console.log(chalk.black.bgGreen.bold("Your current score is: ", score + " "));
  console.log("\n================\n")
}

// loop for play function
for (let i = 0; i < questions.length; i++) {
  currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

// highscore conditional loop
if (score > highScore[2].score) {
  console.log(chalk.bold.bgYellow(`Genius, Billionaire, Playboy, Philanthropist. You've beaten a highscore. Your score is: ${score} `));
} else {
  console.log(chalk.bold.bgYellow(`Your total score is: ${score}
Do you wanna try again?`));
}

console.log("\n================\n")

console.log("Below are the highscores of other players. If you've beaten it, send me the screenshot.\n")

// loop for displaying highscores
for (let i = 0; i < highScore.length; i++) {
  currentHighScore = highScore[i];
  console.log(chalk.bold.green(currentHighScore.name, currentHighScore.score));
}

console.log("\n================\n")
console.log(chalk.bold("\nThank you for taking this quiz!😊"));