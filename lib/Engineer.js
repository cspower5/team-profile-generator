const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, githubuser) {
        super(name, id, email);
        this.githubuser = githubuser;
    }
    getRole() {
        return "Engineer";
    }
    getGithubUser() {
        return this.githubuser;
    }

};

module.exports = Engineer;