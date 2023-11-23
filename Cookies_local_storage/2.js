const setCookies = () => {
  let FirstName = document.getElementById('firstname').value;
  let email = document.getElementById('email').value;

  let expDate = new Date();
  expDate.setDate(expDate.getDate() + 10);
  let expires = `expires=${expDate.toUTCString()}`;

  document.cookie = `firstname=${FirstName};${expires}`;
  document.cookie = `email=${email};${expires}`;
};

const showCookies = () => {
  const displayCookies = document.createElement('p');
  displayCookies.innerHTML = `<p>Cookies: ${document.cookie}</p>`;
  document.body.appendChild(displayCookies);
};
