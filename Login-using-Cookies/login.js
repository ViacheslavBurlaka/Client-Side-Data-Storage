window.onload = function () {

  var username = 'viacheslav';
  var password = '123456';


  // Handle Button Event
  document.getElementById('login-button').addEventListener('click', function () {
    var formUsername = document.getElementById('formUsername').value;
    var formPassword = document.getElementById('formPassword').value;

    if (username === formUsername && password === formPassword) {
      createCookie('loggedIn', true);
      createCookie('loginUsername', username);
      createCookie('visits', 1);
      window.location = 'index.html'; // redirect to home page
    } else if (formUsername === '' || formPassword === '') {
      alert('This fields cannot be empty!');
    } else {
      alert('Username or Password is wrong!');
    }

  });

  function createCookie(name, value) {
    // Key Value Pairs
    var keyValue = name + '=' + value;

    // Expiration
    var now = new Date();
    now.setTime(now.getTime() + 24 * 60 * 60 * 1000);

    var expires = 'expires=' + now.toUTCString();

    // Cookie String
    var cookieStr = keyValue + ';' + expires;

    // Create cookie
    document.cookie = cookieStr;
  }


};
