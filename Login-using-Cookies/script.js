window.onload = function () {


  let loginBtn = document.getElementById('login');
  let logoutBtn = document.getElementById('logout');
  let user = document.getElementById('user');
  let visits = getCookieValue('visits');



  logoutBtn.addEventListener('click', function () {
    console.log('You are logout');
    createCookie('loggedIn', true, -1);
    createCookie('loginUsername', getCookieValue('loginUsername'), -1);
    createCookie('visits', visits, -1);
    window.location = 'index.html';
  });

  if (getCookieValue('loggedIn')) {
    console.log('You are logged In');
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
    user.innerHTML = getCookieValue('loginUsername');

    createCookie('loggedIn', true, 2);
    createCookie('loginUsername', getCookieValue('loginUsername'), 2);

    let visits = +getCookieValue('visits');
    visits++;

    createCookie('visits', visits, 2);

  } else {
    console.log('hello guest');
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
    user.innerHTML = 'Guest!';
  }


  function getCookieValue(cookieKey) {
    var cookiesList = document.cookie.split(';').map(function (cookie) {
      return cookie.trim();
    });

    for (var i = 0; i < cookiesList.length; i++) {
      var cookie = cookiesList[i].split('=');
      var key = cookie[0];
      var value = cookie[1];
      if (key === cookieKey) {
        return value;
      }
    }
    return undefined;
  }

  function createCookie(name, value, day) {
    // Key Value Pairs
    var keyValue = name + '=' + value;

    // Expiration
    var now = new Date();
    now.setTime(now.getTime() + day * 24 * 60 * 60 * 1000);

    var expires = 'expires=' + now.toUTCString();

    // Cookie String
    var cookieStr = keyValue + ';' + expires;

    // Create cookie
    document.cookie = cookieStr;
  }


};
