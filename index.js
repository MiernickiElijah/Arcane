const fs = require('fs');
const inquirer = require('inquirer');

function license(license) {
    switch (license) {
        case 'MIT':
            return '[MIT](https://choosealicense.com/licenses/mit/)'
            break;
        case 'Apache':
            return '[Apache](https://www.apache.org/licenses/LICENSE-2.0.txt)'
            break;
        case 'GNU':
            return '[GNU](https://www.gnu.org/licenses/fdl-1.3.txt)'
            break;
        default:
            return '[MIT](https://choosealicense.com/licenses/mit/)'
    }
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the TITLE of the project? ',
            name: 'title',
        },
        {
            type: 'input',
            message: 'DESCRIBE the project (motivation?, what problem did it solve?, what did you learn?), be detailed:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Provide instructions for USAGE',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Provide name of file for SCREENSHOT and its extension: example---> screenshot.png',
            name: 'screenshot',
        },
        {
            type: 'input',
            message: 'CREDITS: List your collaborators, if any, with links to their GitHub profiles. If you followed tutorials, include links to those here as well.',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'Choose a LICENSE from the list below:',
            choices: ['MIT', 'Apache', 'GNU'],
            name: 'license',
        },
    ]).then((data) => {
        let markdown = `
#${data.title}
-------------
#Description
${data.description}
-------------
#Table of Contents
[${data.title}](#${data.title})
[Description](#Description)
[Usage](#Usage)
[Screenshot](#Screenshot)
[Credits](#Credits)
[License](#License)
--------------
#Usage
${data.usage}
--------------
#Screenshot
![Screenshot](assets/images/${screenshot})
--------------
#Credits
${data.credits}
--------------
#License
${license(data.license)}`
        return fs.writeFileSync('README.md', markdown);
        ;
    });