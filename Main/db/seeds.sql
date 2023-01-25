INSERT INTO department (name)
VALUES ('Sales'),('Legal'),('R&D'),('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
    ('Salesmen', 60000,1),
    ('Lawyer', 150000,2),
    ('Legal Aid', 70000,2),
    ('Research Lead', 90000,3),
    ('Research Aid', 60000,3),
    ('Marketing Head', 120000,4),
    ('Graphic Designer', 50000,4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jane', 'Doe', 1, null),
    ('John', 'Doe', 2, 1 ),
    ('Bob', 'Smith', 3, null ),
    ('Bill', 'Jones', 4, 3),
    ('Dave', 'Something', 5, null ),
    ('Sue', 'Brown', 3, 5),
    ('Martha', 'Siple', 4, null ),
    ('Tom', 'Lake', 4, 7 );
