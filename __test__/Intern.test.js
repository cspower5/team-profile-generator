const Intern = require("../lib/Intern");

test("Set school as constructor", () => {
  const testValue = "Hamline University";
  const employee = new Intern("Test", 1, "cb@gmail.com", testValue);
  expect(employee.school).toBe(testValue);
});

test("getRole() returns \"Intern\"", () => {
  const testValue = "Intern";
  const employee = new Intern("Test", 1, "cb@gmail.com", "Hamline University");
  expect(employee.getRole()).toBe(testValue);
});

test("Get school with getSchool()", () => {
  const testValue = "Hamline University";
  const employee = new Intern("Test", 1, "cb@gmail.com", testValue);
  expect(employee.getSchool()).toBe(testValue);
});