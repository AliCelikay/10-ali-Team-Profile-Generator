const Employee = require("./Employee.js");

class Manager extends Employee{
    constructor(name, id, email , officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    renderCard() {
        return `<div class="card" style="width: 18rem;">
            <div class="card-body employee-header-background">
                <h3 class="card-title employee-header-text">${this.name}</h3>
                <h3 class="card-title employee-header-text">☕${this.getRole()}</h3>
            </div>
            <div class="card-body employee-info-card">
                <li class="list-group-item">ID: ${this.id}</li>

                <li class="list-group-item">Email: <a href="mailto:${this.email}" class="card-link">${this.email}</a></li>

                <li class="list-group-item">Office Number: ${this.getOfficeNumber()}
                </li>
            </div>
        </div>
        `
    }

}

module.exports = Manager;
