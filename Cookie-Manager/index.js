window.onload = function () {

  CookieManager.set('viacheslav', 'burlaka', 3,);
  CookieManager.set('viacheslav1', 'burlaka1', 3,);
  CookieManager.set('test', 'testValue', 3,);

  console.log(CookieManager.get('viacheslav'));

  console.log(CookieManager.getAll());

};