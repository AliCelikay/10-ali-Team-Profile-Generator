1) Make classes per ReadMeinstructions
2) Aline folders per ReadMeinstructions

3) Make an html page and create the outline similar to instructions
    *create template card

4) Add and update temp card to role classes

5)Create Employee array questions
    *Create manager questions
    *Create engineer questions
    *Create intern questions
    *if 'Exit' was chosen then print html

6) Create a firstQuestion() function
    *returns M E I or Exit
7) set var firstAns = firstQuestion();

8)switch (firstAns)
9) in: case 'M'
    we set: var managAns = managerQueries(); //managerQueries asks manager questions and return ans object

11) //deconstruct managAns

12) set: var managerCardInfo = managerRenderFunction(); // this function is from the manager class
        // the var stores the renderCard string literal

13) call firstQuestion(); // this will allow return to main menu

14) return; and repeat for E and I

15) for: case 'Exit'
    return a writeFile??


```md
GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
