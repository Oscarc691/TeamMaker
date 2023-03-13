const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
    super(name, id, email);
    this.school = school;
    }
    getSchool() {
        console.log(`School: ${this.school}`)
    }
    getRole() {
        console.log(`Role: ${this}`)
    }
}

module.exports = Intern;