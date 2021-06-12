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

function badge(badge) {
    switch (badge) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'Apache':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'GNU':
            return '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)'
            break;
        default:
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
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
            message: 'Provide fileName.extension for the SCREENSHOT , note: this file should be located in assets/images/: example---> screenshot.png',
            name: 'screenshot',
        },
        {
            type: 'input',
            message: 'CREDITS: List your collaborators, if any, with links to their GitHub profiles. If you followed tutorials, include links to those here as well.',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'Enter the link to your GITHUB:',
            name: 'gitHub',
        },
        {
            type: 'input',
            message: 'Enter your EMAIL address:',
            name: 'email',
        },
        {
            type: 'list',
            message: 'Choose a LICENSE from the list below:',
            choices: ['MIT', 'Apache', 'GNU'],
            name: 'license',
        },
    ]).then((data) => {
        let markdown = `${badge(data.license)}
#${data.title}
-------------
## Description\  
${data.description}
-------------
<<<<<<< HEAD
## Table of Contents\  
* [${data.title}](#${data.title})

* [Description](#description)

* [Usage](#usage)

* [Screenshot](#screenshot)

* [Credits](#credits)

* [Questions](#questions)

* [License](#license)
=======
#Table of Contents\  
[${data.title}](#${data.title})  
[Description](#Description)  
[Usage](#Usage)  
[Screenshot](#Screenshot)  
[Credits](#Credits)  
[Questions](#Questions)  
[License](#License)  
>>>>>>> 141bc397e63a9de1768c8f5db950013f3b59cd50
--------------
## Usage\  
${data.usage}
--------------
## Screenshot\  
![Screenshot](assets/images/${data.screenshot})
--------------
## Credits\  
${data.credits}
--------------
## Questions\  
Connect on [github](${data.gitHub}) or email me at ${data.email} with any questions or comments. 
--------------
## License\  
This project is covered under the ${license(data.license)} license.`
        return fs.writeFileSync('README.md', markdown);
        ;
    });
