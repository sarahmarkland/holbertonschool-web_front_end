//task 0
function welcome(firstName, lastName) {
  let fullName = (firstName + " " + lastName);

  function displayFullName() {
    var message = "Welcome " + fullName + "!";

    alert(message);
  }

  displayFullName();
}
