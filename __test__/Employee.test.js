const Employee = require('../lib/Employee.js');

describe("Employee", () => {
  it("Instantiates Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).tobe("object");
  });
});
  it("Sets name as constructor argument", () => {
    const name = "Christopher";
    const employee = new Employee(name);
    expect(typeof(employee.name)).tobe(name);
  });
  
