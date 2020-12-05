const template = (response) => {
    const {title, description, installation, usage, licence, contributing, tests, questions} = response;
    return `## ${title} 
   
## Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[Licence](#Licence)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)


## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Licence
${licence}

## Contributing
${contributing}

## Tests
${test}

## Questions
${questions}`;
};

// how do we break this up?
// title functionz
// title(response) => {
//     ${response.title}
// };

// ----------  Layout of README page-------------------------------------------------------------//

// ## title

// ### description

// ### table of contents



// ### installation

// usage
    // gif




module.exports = template;
