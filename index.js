// set up packages
//Built in Package
const fs = require('fs');
//3rd party package
const inquirer = require('inquirer');
// custom packages
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
// const questions = require('./questions');


//init function creation in es6 version
const init = () => {
    firstQuestion()
    .then((ans) => {
        switch (ans.firstChoice) {
            case 'Manager':
                managerQueries();
                break;
            case 'Engineer':
                engineerQueries();
                break;
            case 'Intern':
                internQueries();
                break;
            case 'Exit':
                console.log(`Your HTML file is ready!`);
                lastHalfHTML();
                break;
            default:
                break;
        }
    })
}

//Employee adding first question function
let firstQuestion = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            message: 'Please choose your job title:',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
            name: 'firstChoice',
        },
    ])
}

//Employee queries and calling another employee function to roster
let managerQueries = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter your name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please enter your employee ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Please enter your email:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter your office number:',
            name: 'officeNumber',
        },
    ]).then((ans) => {
        managerCardInfo(ans);
        init();
    })
}

let engineerQueries = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter your name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please enter your employee ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Please enter your email:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username:',
            name: 'github',
        },
    ]).then((ans) => {
        engineerCardInfo(ans);
        init();
    })
}

let internQueries = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter your name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please enter your employee ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Please enter your email:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter your graduate school:',
            name: 'school',
        },
    ]).then((ans) => {
        internCardInfo(ans);
        init();
    })
}



// Employee info and rendering card information functions
let managerCardInfo = (ans) => {
    let {name, id, email, officeNumber} = ans;
    let manager = new Manager(name, id, email, officeNumber);
    fs.appendFile('./dist/index.html', manager.renderCard() , (err) => err ? console.error(err) : console.log('Success!'));
}

let engineerCardInfo = (ans) => {
    let {name, id, email, github} = ans;
    let engineer = new Engineer(name, id, email, github);
    fs.appendFile('./dist/index.html', engineer.renderCard() , (err) => err ? console.error(err) : console.log('Success!'));
}

let internCardInfo = (ans) => {
    let {name, id, email, school} = ans;
    let intern = new Intern(name, id, email, school);
    fs.appendFile('./dist/index.html', intern.renderCard() , (err) => err ? console.error(err) : console.log('Success!'));
}


//Beginning of HTML
const firstHalfHTML = () => {
    fs.writeFile('./dist/index.html', 
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster Generator</title>
    <!-- bootstrap link -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <!-- style.css link -->
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="jumbotron jumbotron-fluid hero-background">
        <div class="container">
            <h1 class="display-4 title-center-text">My Team</h1>
        </div>
    </div>

    <div class="card-placement-area">
        `, (err) => err ? console.error(err) : console.log('Success'));
}

//End of HTML
const lastHalfHTML = () => {
    fs.appendFile('./dist/index.html', `
    </div>

    <!-- index.js link (main code) -->
    <script src="index.js"></script>

</body>

</html>

`, (err) => err ? console.error(err) : console.log('Success!'));
}

//Calling this function first in order to create the html file
firstHalfHTML();

//Calling the initial function
init();
