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
const { log } = require('console');
// const displayQuestions = require('./questions');

//init function creation in es6 version
const init = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Please choose your job title:',
                choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
                name: 'firstChoice',
            }
        ])
        .then((ans) => {
            if(ans.firstChoice === "Manager"){
                inquirer
                .prompt([
                    {
                    type: 'input',
                    message: 'Please enter your name:',
                    name: 'managerName',
                    },
                    {
                        type: 'input',
                        message: 'Please enter your employee id:',
                        name: 'managerID',
                    },
                    {
                        type: 'input',
                        message: 'Please enter your email address:',
                        name: 'managerEmail',
                    },
                    {
                        type: 'input',
                        message: 'Please enter your office number:',
                        name: 'managerOfficeNum',
                    },
                ])
                .then((ans) =>{
                    console.log(ans);
                })
            }
            else if(ans.firstChoice === "Engineer"){
                inquirer
                .prompt([
                    {
                    type: 'input',
                    message: 'Please enter your name:',
                    name: 'engineerName',
                    },
                    {
                        type: 'input',
                        message: 'Please enter your employee id:',
                        name: 'enginID',
                    },
                    {
                        type: 'input',
                        message: 'Please enter your GitHub username:',
                        name: 'enginGitHub',
                    },
                ])
                .then((ans) =>{
                    console.log(ans);
                })
            }
            else if(ans.firstChoice === "Intern"){
                inquirer
                .prompt([
                    {
                    type: 'input',
                    message: 'Please enter your name:',
                    name: 'internName',
                    },
                    {
                        type: 'input',
                        message: 'Please enter your employee id:',
                        name: 'internID',
                    },
                    {
                        type: 'input',
                        message: 'Please enter your email address:',
                        name: 'internEmail',
                    },
                    {
                        type: 'input',
                        message: 'Please enter your graduate school:',
                        name: 'internSchool',
                    },
                ])
                .then((ans) =>{
                    console.log(ans);
                })
            }
            else if(ans.firstChoice === "Exit"){
                console.log(`Thankyou! Your html file is ready`);
                // print html
            }
        })

}

init();
