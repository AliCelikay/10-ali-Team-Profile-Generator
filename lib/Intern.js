const Employee = require("./Employee.js");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }

    renderCard() {
        return `<div class="card" style="width: 18rem;">
            <div class="card-body employee-header-background">
                <h3 class="card-title employee-header-text">${this.name}</h5>
                <h3 class="card-title employee-header-text">${this.getRole}</h5>
            </div>
            <div class="card-body employee-info-card">
                <li class="list-group-item">ID: ${this.id}</li>

                <li class="list-group-item">Email: <a href="#" class="card-link">${this.email}</a></li>

                <li class="list-group-item">GitHub: <a href="#" class="card-link">${this.getSchool}</a>
                </li>
            </div>
        </div>
        `
    }
    
}

module.exports = Intern;
