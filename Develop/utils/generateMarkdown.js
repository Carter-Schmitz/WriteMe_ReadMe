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
  return `# ${data.title}

  ## Table of Contents:
  -[Description] (#Description:)
  -[Installation] (#Installation Instructions:)
  -[Usage Information] (#Usage Information:)
  -[Contribution] (#Contribution Guidelines:)
  -[Test Instructions] (#Test Instructions:)
  -[License] (#License:)
  -[GitHub] (#GitHub:)
  -[Email] (#Email:)

  ## Description: ${data.description}

  ## Installation Instructions: ${data.install}

  ## Usage Information: ${data.usage}

  ## Contribution Guidelines: ${data.guidelines}

  ## Test Instructions: ${data.instructions}

  ## License: ${data.license}
  ### [${license.badge}] ()

  ## GitHub: ${data.username}

  ## Email: ${data.email}

`;
}

module.exports = generateMarkdown;
