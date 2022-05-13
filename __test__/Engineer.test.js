const Engineer = require("../lib/Engineer");

test("Set GitHUb account as constructor", () => {
  const testValue = "GitHubUser";
  const employee = new Engineer("Test", 1, "cb@gmail.com", testValue);
  expect(employee.githubuser).toBe(testValue);
});

test("getRole() returns \"Engineer\"", () => {
  const testValue = "Engineer";
  const employee = new Engineer("Test", 1, "cb@gmail.com", "GitHubUser");
  expect(employee.getRole()).toBe(testValue);
});

test("Get GitHub username with getGithubUser()", () => {
  const testValue = "GitHubUser";
  const employee = new Engineer("Test", 1, "cb@gmail.com", testValue);
  expect(employee.getGithubUser()).toBe(testValue);
});