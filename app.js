const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Baowiwowi4255!",
  database: "employee_tracker"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});

function firstQuery() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                // "View All Employees by Manager",
                "Add Employee",
                // "Remove Employee",
                "Update Employee Roles",
                // "Update Employee Manager",
                "View all roles",
            ],
            name: "employeeType"
        }
    ]).then(answers => {
        if (answers.type === "View All Employees") {
            viewAllEmployees()

        } else if (answers.type === "View All Employees by Department") {
            viewAllEmployeesByDepartments()

        } else if (answers.type === "Add Employee") {
            addEmployee()

        } else if (answers.type === "Update Employee Roles") {
            addEmployeeRoles()

        } else {
            viewAllRoles()
        }
    })
};

function addEmployee() {
    inquirer
        .prompt([
        {
            type: "input",
            message: "What is the employees first name??",
            name: "firstName"
        },
        {
            type: "input",
            message: "What is the employees last name??",
            name: "lastName"
        },
        {
            type: "input",
            message: "What is the employees role??",
            name: "role"
        },
        {
            type: "input",
            message: "Who is the employees manager?",
            name: "employeesManager"
        }
    ])
}

function addEmployeeRoles() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "Which role?",
            choices: [
                "Sales Lead",
                "Salesperson",
                "Lead Engineer",
                "Software Engineer",
                "Account Manager",
                "Accountant",
                "Legal Team Lead",
            ],
            name: "roleType"
        },
    ]).then(answers => {
        if (answers.type === "Engineer") {
            addEngineer()
        } else if (answers.type === "Intern") {
            addIntern()
        } else {
            
        }
    })
}