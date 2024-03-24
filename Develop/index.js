// install inquirer8.2.4
// install colors

const fs = require('fs');
const inquirer = require('inquirer');

const generateREADME = ({ title, repoLink, deployedLink, description, installation, usage, license, author, tests, username, email }) =>



    `# ${title}

## Description\n
${description}

## Table of Contents\n
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation\n
${installation}

## Usage\n
${usage}

## License\n
This project is licensed under the ${license} license.

## Contributing\n
${author}

## Tests\n
${tests}

## Questions\n
For questions about this project, please contact me by either option below:\n
GitHub: [${username}](https://github.com/${username})\n
Email: ${email}.\n

## Repository Link\n
Here is the repository link for the application: ${repoLink}

## Deployed Link\n
Here is the link to the application: ${deployedLink}

`;


inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the Title of your project?",
        },
        {
            type: "input",
            name: "repoLink",
            message: "What is the link to your GitHub repository?",
        },
        {
            type: "input",
            name: "deployedLink",
            message: "What is the link to your deployed and active application?",
        },
        {
            type: "input",
            name: "description",
            message: "What is a description of your application?",
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide instructions for installation of your application.",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide instructions on how to operate your application.",
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license to include on the README:",
            choices: ["Apache License - see License file for details", "ISC License - see License file for details",
                "MIT License - see License file for details", "GNU General Public License - see License file for details"]
        },
        {
            type: "input",
            name: "author",
            message: "Who contributed to the application and can be considered the 'author'?",
        },
        {
            type: "input",
            name: "tests",
            message: "Were any tests completed on the application to show proper functionality?",
        },
        {
            type: "input",
            name: "username",
            message: "Please provide your GitHub username so a user could reach out if they had any questions.",
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email so a user could reach out if they had any questions.",
        },

    ])

    .then((answers) => {
        const READMEContent = generateREADME(answers);

        fs.writeFile('README.md', READMEContent, (err) =>
            err ? console.log(err) : console.log('Successfully created your README')
        );
    });
