const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_tracker_db'
    },
    console.log ('Successful conection to the employee_tracker_db database!')
);


module.exports = db;
