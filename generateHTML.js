function generateHtml(employees) {
//write the first part of the html file to append additional information.
    let html = `
    <!doctype html>
    <html>
    <head>
    <title>Team Borer</title>
    <style>
    body {
        margin: 0;
        background-color:rgba(183,208,217);
        text-align: center;
    }
    header {
        padding: 15px;
        background-image: linear-gradient(to right, rgba(58,95,120),rgba(58,60,120));
        color:rgba(225,222,21);
        margin-bottom: 25px;
    }
    section {
        display: inline-block;
          vertical-align: top;
          margin: 10px;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0 0 5px black;
          color:rgba(54,57,50);
          width: 15rem;
          height: 15rem;
    }
    .Manager {
        background-color:rgba(237,192,25);
    }
    .Engineer {
        background-color:rgba(236,233,59);
    }
    .Intern {
        background-color:rgba(199,231,21);
    }
    </style>
    </head>
    <body>
    <header>
    <h1>Team Borer</h1>
    <main>
    `;
//seperate out the employees by role.
for(let emp of employees){
    let role = emp.getRole()
    let label, text;
    switch(role){
        case "Manager":
            label = "Office Number";
            text = emp.getOfficeNumber();
            break; 
        case "Engineer":
            label = "Git Hub User";
            text = "https://github.com/" + emp.getGithubUser();
            break;
        case "Intern":
            label = "School Name";
            text = emp.getSchool();
            break;
    }
//appending the section data to the html.
    html += `
    <section class="${role}">
    <h3>${role}</h3>
    <h2>${emp.getName()}</h2>
    <p>id: ${emp.getId()}</p>
    <a href=mailto:${emp.getEmail()}>${emp.getEmail()}</a>
    `;
//allowing for git hub user to be linked to github profile.
    if(role === "Engineer") {
        html += `
        <p>${label}:</p>
        <a href=${text}>${emp.getGithubUser()}</a>
        </section>
        `;
    } else {
        html += `<p>${label}:</p>
        <p>${text}</p>
        </section>
        `;
    }
}
//complete the html code.
html += `
</main>
</body>
</html>
`;
return html;
}

module.exports = generateHtml;