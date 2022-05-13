const Employee = require ("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officenNumber) {
        super(name, id, email)
        this.officeNumber = officenNumber;
    }
    getRole() {
    return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;