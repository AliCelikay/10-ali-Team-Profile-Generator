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
const questions = require('./questions');

var firstAns;

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
                managerQueries();
                break;
            default:

                break;
        }
    })
}

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
    })
}

let engineerQueries = () => {
    return inquirer
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
    })
}

let internQueries = () => {
    return inquirer
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
    })
}





const managerCardInfo = (ans) => {
    let {name, id, email, officeNumber} = ans;
    let manager = new Manager(name, id, email, officeNumber);
    fs.appendFile('./dist/index.html', manager.renderCard() , (err) => err ? console.error(err) : console.log('Success!'));
}

const engineerCardInfo = (ans) => {
    let {name, id, email, officeNumber} = ans;
    let engineer = new Engineer(name, id, email, officeNumber);
    fs.appendFile('./dist/index.html', engineer.renderCard() , (err) => err ? console.error(err) : console.log('Success!'));
}

const internCardInfo = (ans) => {
    let {name, id, email, officeNumber} = ans;
    let intern = new intern(name, id, email, officeNumber);
    fs.writeFile('./dist/index.html', intern.renderCard() , (err) => err ? console.error(err) : console.log('Success!'));
}






// const init = () => {
//     inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 message: 'Please choose your job title:',
//                 choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
//                 name: 'firstChoice',
//             }
//         ])
//         .then((ans) => {
//             if(ans.firstChoice === "Manager"){
//                 inquirer
//                 .prompt([
//                     {
//                     type: 'input',
//                     message: 'Please enter your name:',
//                     name: 'managerName',
//                     },
//                     {
//                         type: 'input',
//                         message: 'Please enter your employee id:',
//                         name: 'managerID',
//                     },
//                     {
//                         type: 'input',
//                         message: 'Please enter your email address:',
//                         name: 'managerEmail',
//                     },
//                     {
//                         type: 'input',
//                         message: 'Please enter your office number:',
//                         name: 'managerOfficeNum',
//                     },
//                 ])
//                 .then((ans) =>{
//                     console.log(ans);
//                 })
//             }
//             else if(ans.firstChoice === "Engineer"){
//                 inquirer
//                 .prompt([
//                     {
//                     type: 'input',
//                     message: 'Please enter your name:',
//                     name: 'engineerName',
//                     },
//                     {
//                         type: 'input',
//                         message: 'Please enter your employee id:',
//                         name: 'enginID',
//                     },
//                     {
//                         type: 'input',
//                         message: 'Please enter your GitHub username:',
//                         name: 'enginGitHub',
//                     },
//                 ])
//                 .then((ans) =>{
//                     console.log(ans);
//                 })
//             }
//             else if(ans.firstChoice === "Intern"){
//                 inquirer
//                 .prompt([
//                     {
//                     type: 'input',
//                     message: 'Please enter your name:',
//                     name: 'internName',
//                     },
//                     {
//                         type: 'input',
//                         message: 'Please enter your employee id:',
//                         name: 'internID',
//                     },
//                     {
//                         type: 'input',
//                         message: 'Please enter your email address:',
//                         name: 'internEmail',
//                     },
//                     {
//                         type: 'input',
//                         message: 'Please enter your graduate school:',
//                         name: 'internSchool',
//                     },
//                 ])
//                 .then((ans) =>{
//                     console.log(ans);
//                 })
//             }
//             else if(ans.firstChoice === "Exit"){
//                 console.log(`Thankyou! Your html file is ready`);
//                 // print html
//             }
//         })

// }

init();
