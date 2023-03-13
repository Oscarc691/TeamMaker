const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        console.log(`Role: ${this}`)
    }
}

module.exports = Manager;