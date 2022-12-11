// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

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
            type: 'confirm',
            name: 'confirmLicenses',
            message: 'Would you like to include a license?',
            default: false
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to include?',
            choices: ['Apache_2.0', 'GPLv3', 'MIT', 'BSD_2--Clause', 'BSD_3--Clause', 'Boost_1.0', 'CC0_1.0', 'EPL_2.0', 'AGPL_v3', 'GPL_v2', 'MPL_2.0', 'Unlicense'],
            when: ({ confirmLicenses }) => {
                if (confirmLicenses) {
                    return true;
                } else {
                    return false;
                }
            }
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
        },
    ])
        .then((data) => {
            const content = generateMarkdown(data)

            fs.writeFile('README.md', content, (err) =>
                err ? console.log(err) : console.log('Successfully Created ReadMe!'))
        })
}

// Function call to initialize app
init();
