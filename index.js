import inquirer from "inquirer";
//declare a constant "answers" and assign it to th result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentance",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.sentance.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the word counter of the sentence to the console
console.log(`your sentence word count is ${words.length}`);
