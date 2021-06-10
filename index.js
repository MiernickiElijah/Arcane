const fs = require('fs');
const inquirer = require('inquirer');

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
            name: 'discription',
        },
        {
            type: 'input',
            message: 'Provide instructions for USAGE',
            name: 'usage:',
        },
        {
            type: 'input',
            message: 'Enter pathway to SCREENSHOT:',
            name: 'pathway',
        },
        {
            type: 'input',
            message: 'Enter ''ALT-TEXT'' for screenshot:',
            name: 'altText',
        },

        {
            type: 'input',
            message: 'Table of Contents',
            name: 'Contents',
        },
        //  what are your content titles? => create clickable table [inputed content title](#title)
        //  [Description](#description)
        //  [Usage](#usage)
        //  []
        //  ...

    ]).then((data) => {
        let HTML = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <title>Mini</title>
        </head>
        <body>
            <h1 id="name">${data.name}</h1>
            <h2 id="location">${data.location}</h2>
            <section id="bio">${data.bio}</section>
            <h3 id="gitHub">${data.gitHubUrl}</h3>
            <h3 id="linkedIn">${data.linkedInUrl}</h3>
        </body>
        </html>`
        return fs.writeFileSync('index.html', HTML);
        ;
    });
