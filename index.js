// TODO: Include packages needed for this application
const fs = require("fs")
const inq = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const gen = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input

const questions = [
        {
          type: "input",
          message: "What is the title of your README File?",
          name: "title",
        },
        {
          type: "input",
          message: "What is the Description of your README File?",
          name: "description",
        },
        {
          type: "input",
          message: "How do we install your application?",
          name: "installation",
        },
        {
            type: "input",
            message: "How do we use your application?",
            name: "usage",
        },
        {
            type: "input",
            message: "What is the licence on your application?",
            name: "license",
        },
        {
            type: "input",
            message: "How can other developers contribute to your application?",
            name: "contribution",
        },
        {
            type: "input",
            message: "How can developers test your application?",
            name: "test",
        },
        {
            type: "input",
            message: "What is your github profile?",
            name: "github",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },
      ]


// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, generateMarkdown(data), function (err) {
        if (err) throw err;
        console.log("Saved!");
      });
}

// TODO: Create a function to initialize app
function init() {
  inq.prompt(questions).then((answers) => {
    writeToFile("TestReadME.md", answers);
  }
  )
}

// // Function call to initialize app
init();
