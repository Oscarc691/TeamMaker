const Employee = require('./employee');

class Engineer extends Employee {
    constructor (github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        console.log(`Github Username: ${this.github}`)
    }
    getRole() {
        console.log(`Role: ${this}`)
    }
}

module.exports = Engineer;