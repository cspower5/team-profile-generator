function generateHtml(employees) {
    let html = `
    <!doctype html>
    <html>
    <head>
    <title>The Team</title>
    <style>
    body {
        margin: 0;
          background-color: aliceblue;
          text-align: center;
    }
    header {
        padding: 15px;
          background-color: navy;
          color: white;
          margin-bottom: 25px;
    }
    section {
        display: inline-block;
          vertical-align: top;
          margin: 10px;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0 0 5px black;
    }
    .Manager {
        background-color: lightyellow;
    }
    .Engineer {
        background-color: mintcream;
    }
    .Intern {
        background-color: honeydew;
    }
    </style>
    </head>
    <body>
    <header>
    <h1>The Team</h1>
    <main>
    `;
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
            text = emp.getGithubUser();
            break;
        case "Intern":
            label = "School Name";
            text = emp.getSchool();
            break;
    }
    html += `
    <section class="${role}">
    <h3>${role}</h3>
    <h2>${emp.getName()}</h2>
    <p>id: ${emp.getId()}</p>
    <p>email: ${emp.getEmail()}</p>
    <p>${label}: ${text}</p>
    </section>
    `;
}
html += `
</main>
</body>
</html>
`;
return html;
}

module.exports = generateHtml;