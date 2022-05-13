const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHtml = require("./generateHtml");

//data
const employees = [];


function init() {
	mainMenu();
}

async function mainMenu(){
  	const response = await inquirer.prompt({
    	name: "action",
      	message: "what would you like to do?",
      	type: "list",
      	choices: ["create manager", "create engineer", "create intern", "exit"]
    });
     	switch (response.action){
        case "create manager": return createManager();
        case "create engineer": return createEngineer();
        case "create intern": return createIntern();
        default: return end();
    }
}

async function createManager(){
  	const {name, id, email, officeNumber} = await inquirer.prompt([
      {name: "name", message: "manager's name?"},
      {name: "id", message: "manager's id?"},
      {name: "email", message: "manager's email?"},
      {name: "officeNumber", message: "manager's office number?"}
    ]);
    const manager = new Manager(name, id, email, officeNumber);
    console.log("this is the current manager " + manager);
  	employees.push(manager);
    mainMenu();
}

async function createEngineer(){
    const {name, id, email, githubuser} = await inquirer.prompt([
        {name: "name", message: "engineer's name?"},
        {name: "id", message: "engineers's id?"},
        {name: "email", message: "engineers's email?"},
        {name: "githubuser", message: "engineers's github user name?"}
      ]);
        const manager = new Engineer(name, id, email, githubuser);
        employees.push(manager);
        mainMenu(); 
}

async function createIntern(){
    const {name, id, email, school} = await inquirer.prompt([
        {name: "name", message: "interns's name?"},
        {name: "id", message: "interns's id?"},
        {name: "email", message: "interns's email?"},
        {name: "school", message: "interns's school name?"}
      ]);
        const manager = new Intern(name, id, email, school);
        employees.push(manager);
        mainMenu(); 
}

function end(){
    const html = generateHtml(employees);
  	fs.writeFileSync("./dist/team.html", html);
  	console.log("check the dist folder for your html file");
  	console.log("thanks!");
}

init();





