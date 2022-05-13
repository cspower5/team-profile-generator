const Manager = require("../lib/Manager");

test("Set office number as constructor argument", () => {
  const testValue = 22;
  const employee = new Manager("Test", 1, "cb@gmail.com", testValue);
  expect(employee.officeNumber).toBe(testValue);
});

test("getRole() returns \"Manager\"", () => {
  const testValue = "Manager";
  const employee = new Manager("Test", 1, "cb@gmail.com", 22);
  expect(employee.getRole()).toBe(testValue);
});

test("Get office number with getOffice()", () => {
  const testValue = 22;
  const employee = new Manager("Test", 1, "cb@gmail.com", testValue);
  expect(employee.getOfficeNumber()).toBe(testValue);
});