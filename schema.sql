-- Create the database employee_tracker and specified it for use.
CREATE DATABASE employee_tracker;

USE employee_tracker;
-- Create the table department.
CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

-- Create the table role.
CREATE TABLE employee_role (
    id INT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)
);

-- Create the table employee.
CREATE TABLE department (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
);