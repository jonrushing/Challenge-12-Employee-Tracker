const { prompts } = require('inquirer');
const db = require('./db');
require('console.table');


function mainPrompts() {
    prompts([
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
    ]).then(res =>{
        let input = res.input;

        switch(input) {
            case 'ALL_EMPLOYEES':
                allEmployee();
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