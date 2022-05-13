const Employee = require('../lib/Employee.js');

describe("Employee", () => {
  it("Instantiates Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });
});
  it("Sets name as constructor argument", () => {
    const name = "Christopher";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });
  it("Sets id as constructor argument", () => {
    const testValue = 22;
    const employee = new Employee("Test", testValue);
    expect(employee.id).toBe(testValue);
});

it("Sets email as constructor argument", () => {
    const testValue = "cb@gmail.com";
    const employee = new Employee("Test", 1, testValue);
    expect(employee.email).toBe(testValue);
});

describe("getName", () => {
    it("Get name with getName()", () => {
        const testValue = "Christopher";
        const employee = new Employee(testValue);
        expect(employee.getName()).toBe(testValue);
    });
});
    
describe("getId", () => {
    it("Get id with getId()", () => {
        const testValue = 22;
        const employee = new Employee("Test", testValue);
        expect(employee.getId()).toBe(testValue);
    });
});
    
describe("getEmail", () => {
    it("Get email with getEmail()", () => {
        const testValue = "cb@gmail.com";
        const employee = new Employee("Test", 1, testValue);
        expect(employee.getEmail()).toBe(testValue);
    });
});
    
describe("getRole", () => {
    it("getRole() returns \"Employee\"", () => {
        const testValue = "Employee";
        const employee = new Employee("Christopher", 1, "cb@gmail.com");
        expect(employee.getRole()).toBe(testValue);
    });
});