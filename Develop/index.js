// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of you project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description of your project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please provide any installation instructions for your project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide any relevant usage information.',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Please provide any contribution guidelines.',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please provide any test instructions.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is being used, if any?',
            choices: ['Apache License 2.0', 'GNU General Public License', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v 2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unilicense']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github Username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }])
}

// Function call to initialize app
init();
