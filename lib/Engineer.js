const Employee = require("./Employee.js");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }

    renderCard() {
        return `<div class="card" style="width: 18rem;">
            <div class="card-body employee-header-background">
                <h3 class="card-title employee-header-text">${this.name}</h3>
                <h3 class="card-title employee-header-text">${this.getRole()}</h3>
            </div>
            <div class="card-body employee-info-card">
                <li class="list-group-item">ID: ${this.id}</li>

                <li class="list-group-item">Email: <a href="#" class="card-link">${this.email}</a></li>

                <li class="list-group-item">GitHub: <a href="#" class="card-link">https://github.com/${this.getGithub()}</a>
                </li>
            </div>
        </div>
        `
    }
}

module.exports = Engineer;
