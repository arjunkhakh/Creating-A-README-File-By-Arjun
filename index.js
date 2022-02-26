// Including packages needed for this application
const fs = require("fs")
const inq = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const gen = require("./utils/generateMarkdown")

// Creating an array of questions for user input

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
            type: "list",
            message: "What is the licence on your application?",
            name: "license",
            choices: [
            'Academic Free License v3.0',
            'Apache license 2.0',
            'Artistic license 2.0',
            'Boost Software License 1.0',
            'BSD 3-clause Clear license',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck You Want To Public License',
            'Educational Community License v2.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License family',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License family',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'University of Illinois/NCSA Open Source License',
            'The Unlicense',
            'zLib License',
            'None',
            ]
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


// Creating a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, generateMarkdown(data), function (err) {
        if (err) throw err;
        console.log("Saved!");
      })

      ;
}

// Creating a function to initialize app
function init() {
  inq.prompt(questions).then((answers) => {
    writeToFile("TheReadME.md", answers);
  }
  )
}

// Function call to initialize app
init();
