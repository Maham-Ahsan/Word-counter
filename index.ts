#! /usr/bin/env node

//this line is called shebang, it tell the OS to run it with nodejs

//import the 'inquirer' module,which is a command line interface for node.js
import inquirer from "inquirer";

//declare a constant "answers" and assign it to th result of inquirer.prompt function

const answers:{
    sentance: string
    } = await inquirer.prompt([
        {
            name: "sentance",
            type: "input",
            message: "Enter your sentence to count the word:"
        }
]);

const words = answers.sentance.trim().split(" ")

//print the array of words to the console
console.log(words);

//print the word counter of the sentence to the console

console.log(`your sentence word count is ${words.length}`);