window.onload = function () {

  CookieManager.set('viacheslav', 'burlaka', 3,);
  CookieManager.set('viacheslav1', 'burlaka1', 3,);

  console.log(CookieManager.get('viacheslav'));
  // CookieManager.remove('viacheslav1');
  CookieManager.update('viacheslav1', 'burlaka111');

  console.log(CookieManager.getAll());

  CookieManager.clear();
};