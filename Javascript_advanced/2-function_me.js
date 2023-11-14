//task 2

function welcomeMessage(fullName) {
  return function() {
    let message = "Welcome " + fullName;
    alert(message);
  };
}
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");
