//task 13

const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Buillaume",
  lastName: "Ialva",
  location: "Telaviv",
  occupation: "Engineer"
};

const logWelcomeUser = bindWelcomeUser(user);
logWelcomeUser("Hello");

function bindWelcomeUser(user) {
  return welcomeString => console.log(`${welcomeString}, ${user.firstName}. Your occupation is: ${user.occupation}`);
}
