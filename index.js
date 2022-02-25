// TODO: Include packages needed for this application
const fs = require("fs")
const inq = require("inquirer")

// TODO: Create an array of questions for user input

    inq
    .prompt([
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
          message: "What will be in your Table of Contents",
          name: "contents",
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
      ])
.then((response => {

const data = `# ${response.title}

## Table of Contents

1. Description 
2. Installation
3. Usage 
4. License
5. Contribution 
6. Tests 


## Description
${response.description}


## Installation
${response.installation}


## Usage
${response.usage}


## License
${response.license}


## How to Contribute
${response.contribution}


## Tests
${response.test}

## Questions?
You can check out my user profile on Github: ${"https://github.com/" + response.github}.

Or you can email me: ${response.email}.
`;

fs.writeFile("TestREADME5.md", data, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}));

// TODO: Create a function to write README file
function writeToFile() {
    // fs.writeFile("TestREADME.md", data, function (err) {
    //     if (err) throw err;
    //     console.log("Saved!");
    //   });
}

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
