// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${ data.title }

  ## Table of Contents
  
  1. [Description](#description)
  2. [Contribution](#how-to-contribute) 
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [License](#license)
  6. [Tests](#tests)
  7. [Questions](#questions)
  
  ## Description
  ${ data.description }
  
  ## How to Contribute
  ${ data.contribution }
  
  ## Installation
  ${ data.installation }
  
  ## Usage
  ${ data.usage }
  
  ## License
  ${ data.license }
  
  ## Tests
  ${ data.test }
  
  ## Questions
  You can check out my user profile on Github: ${ "https://github.com/" + data.github }.
  
  Or you can email me: ${ data.email }.
  `;
}

module.exports = generateMarkdown;
