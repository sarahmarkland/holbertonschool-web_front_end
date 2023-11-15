//task 14

function createElement(data) {
  let p = document.createElement('p');
  p.innerHTML = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  let req = new XMLHttpRequest();
  req.open('GET', 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Holberton_School&format=json', true);

  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      callback(JSON.parse(req.responseText)[2][0]);
    }
  };

  req.send();
}

queryWikipedia(createElement);
