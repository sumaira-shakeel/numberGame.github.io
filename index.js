#! /usr/bin/env node
import inquirer from "inquirer";
let roundNum = Math.floor((Math.random() * 6) + 1);
let userInput = await inquirer.prompt({
    type: "number",
    name: "guessNumber",
    message: "guess a number between 1 - 6:"
});
if (userInput.guessNumber === roundNum) {
    console.log('congratulation you guess correctly!');
}
else {
    console.log(`sorry try next time,correct answer is ${roundNum}`);
}
