// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache_2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  if (license === 'GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === 'BSD_2--Clause') {
    return `https://opensource.org/licenses/BSD-2-Clause`
  }
  if (license === 'BSD_3--Clause') {
    return `https://opensource.org/licenses/BSD-3-Clause`
  }
  if (license === 'Boost_1.0') {
    return `https://www.boost.org/LICENSE_1_0.txt`
  }
  if (license === 'CC0_1.0') {
    return `http://creativecommons.org/publicdomain/zero/1.0/`
  }
  if (license === 'EPL_2.0') {
    return `https://opensource.org/licenses/EPL-2.0`
  }
  if (license === 'AGPL_v3') {
    return `https://www.gnu.org/licenses/agpl-3.0`
  }
  if (license === 'GPL_v2') {
    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  }
  if (license === 'MPL_2.0') {
    return `https://opensource.org/licenses/MPL-2.0`
  }
  if (license === 'Unilicense') {
    return `http://unlicense.org/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## License
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents:
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage Information](#Usage)
  * [Contribution](#Contribution)
  * [Test Instructions](#Tests)
  * [License](#License)
  * [GitHub](#GitHub)
  * [Email](#Email)

  ## Description 
  ${data.description}

  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## Contribution 
  ${data.guidelines}

  ## Tests 
  ${data.instructions}

  ${renderLicenseSection(data.license)}

  ## Questions
  Have questions about this project?  
  #GitHub https://github.com/${data.username}  
  #Email ${data.email}

`;
}

module.exports = generateMarkdown;
