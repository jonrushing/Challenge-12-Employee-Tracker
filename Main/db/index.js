const connection = require('./connections');

//index of all the main queries that will be used 
class DB {
    constructor(connection){
        this.connection = connection
    }
//query function that gets all the required data for get all employees
    getAllEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
            
        );
    }
//query function that gets all the required data for get all roles
    getAllRoles() {
        return this.connection.promise().query(
            "SELECT role.title, role.role_id, department.name, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
            
        )
    }
//query function that gets all the required data for get all departments    
    getAllDepartments() {
        return this.connection.promise().query(
            `SELECT * 
            FROM department`
        );
    }
//query to insert a new employee into the database
    makeEmployee(employee) {
        return this.connection.promise().query(
            `INSERT INTO employee SET ?`, employee
        ); 
    }
}  

module.exports = new DB(connection)