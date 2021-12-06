/*!
  * code-generator v0.0.1
  * (c) 2021 biqi li
  * @license Apache-2.0
  */
function greeter(person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = {
  firstName: "Jane",
  lastName: "User"
};
var index = greeter(user);

export { index as default };
