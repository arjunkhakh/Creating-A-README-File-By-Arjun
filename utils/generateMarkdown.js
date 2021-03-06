// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license) {
    return `<img src=https://img.shields.io/badge/License-${license.split(' ').join('_')}-orange.svg>`
  } else {
    return " "
  }
}

// Creating a function that returns the license link
function renderLicenseLink(license) {
  return `[License](#license) `;
}

// Creating a function that returns the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `This is Licensed by ${license}`
  } else {
    return " ";
  }
}

// Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${ data.title }

  ${renderLicenseBadge(data.license)}

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
  ${renderLicenseSection(data.license) }
  
  ## Tests
  ${ data.test }
  
  ## Questions
  You can check out my user profile on Github: ${ "https://github.com/" + data.github }.
  
  Or you can email me: ${ data.email }.
  `;
}

module.exports = generateMarkdown;
