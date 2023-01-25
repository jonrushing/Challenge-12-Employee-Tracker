const inquirer = require('inquirer');
const DB = require('./db');
require('console.table');

//the main prompts to be asked by inquirer
function mainPrompts() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'mainChoice',
            message: "What Would you like to do?",
            choices:[
                {
                    name: "View all employees",
                    value: "ALL_EMPLOYEES",
                },
                {
                    name: "View all roles",
                    value: "ALL_ROLES",
                },
                {
                    name: "View all Departments",
                    value: "ALL_DEPARTMENTS",
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE",
                },
                {
                    name: "Update Employee",
                    value: "UPDATE_EMPLOYEE",
                },
                {
                    name: "Add role",
                    value: "ADD_ROLE",
                },
                {
                    name: "Add department",
                    value: "ADD_DEPARTMENT",
                },
                {
                    name: "Quit",
                    value: "QUIT",
                },
            ]
        }
    ]).then(res => {
        console.log(res);
//from the user selection a switch case is used to determin what function will be run
        switch(res.mainChoice) {
            case 'ALL_EMPLOYEES':
                allEmployees();
                console.log('is it working??')
                break;
            case 'ALL_ROLES':
                allRoles();
                break;
            case 'ALL_DEPARTMENTS':
                allDepartments();
                break;
            case 'ADD_EMPLOYEE':
                addEmployee();
                break;
            case 'UPDATE_EMPLOYEE':
                updateEmployee();
                break;
            case 'ADD_ROLE':
                addRole();
                break;
            case 'ADD_DEPARTMENT':
                addDepartment();
                break;
             default:
                quit();   
        }
    })
}
//function used to take the results from the all employee query and create a table to be displayed 
//after words returnes the user back to the main prompts
function allEmployees () {
    DB.getAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.table(employees);
    })
    .then(() => mainPrompts());
}
//function used to take the results from the all roles query and create a table to be displayed 
//after words returnes the user back to the main prompts
function allRoles () {
    DB.getAllRoles()
    .then(([rows]) =>{
        let roles = rows;
        console.table(roles);
    })
    .then(() => mainPrompts());
}
//function used to take the results from the all departments query and create a table to be displayed 
//after words returnes the user back to the main prompts
function allDepartments () {
    DB.getAllDepartments()
    .then(([rows]) =>{
        let roles = rows;
        console.table(roles);
    })
    .then(() => mainPrompts());
}

function addEmployee () {
    //promts to be used when add employee is selected
    prompts([
        { 
            name: "first_name",
            message: "What is thier first name?"
        },
        {
            name: "last_name",
            message: "what is their last name?"
        }
    ])
    .then 
}
mainPrompts();