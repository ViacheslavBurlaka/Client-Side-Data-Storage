/**
 *
 *
 *
 * Cookie-manager.js
 * simple, easy, lightweight cookie management library
 * version 1.0
 *
 * Copyright 2018 Burlakaviacheslav@gmail.com
 *
 *
 */

(function (window, document) {
  'use strict';

  const CookieManager = {

    /**
     *
     * Create cookie with given parameters
     * @param {String} name cookie name
     * @param {String} value cookie value
     * @param {Number} [expires] cookie expiration in days
     * @param {String} [domain] cookie domain
     * @param {String} [path] cookie path
     * @param {Boolean} [secure] cookie ssl flag
     *
     */


    set: function (name, value, expires, domain, path, secure) {

      let cookieStr = `${name}=${value}`;

      if (expires) {
        let now = new Date();
        now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000);
        cookieStr += `;expires=${now.toUTCString()}`;
      }

      if (domain) {
        cookieStr += `;domain=${domain}`;
      }

      if (path) {
        cookieStr += `;path=${path}`;
      }

      if (secure) {
        cookieStr += `;secure`;
      }

      // Create Cookie
      document.cookie = cookieStr;
    },

    /**
     *
     * Retrieve the cookie value with given cookie name
     * @param {String} name cookie name
     *
     */


    get: function (name) {
      let cookies = document.cookie.split(';').map(function (cookie) {
        return cookie.trim();
      });

      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split('=');
        let key = cookie[0];
        let value = cookie[1];

        if (key === name) {
          return value;
        }
      }

      return undefined;
    },

    update: function (name, value, expires, domain, path, secure) {
      this.set(name, value, expires, domain, path, secure);
    },

    remove: function (name) {
      this.set(name, '', -1);
    },

    /**
     *
     * Retrieve all cookies
     * @returns {Array} cookiesList
     *
     */


    getAll: function () {
      let cookies = document.cookie.split(';').map(function (cookie) {
        return cookie.trim();
      });

      let cookiesList = [];

      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split('=');
        let key = cookie[0];
        let value = cookie[1];

        cookiesList.push({key: key, value: value})

      }

      return cookiesList;
    },

    /**
     *
     * Remove all cookies
     *
     */

    clear: function () {
      let cookies = document.cookie.split(';').map(function (cookie) {
        return cookie.trim();
      });

      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split('=');
        let key = cookie[0];
        let value = cookie[1];
        this.remove(key);
      }

    }


  };


// https://auth0.com/blog/javascript-module-systems-showdown/
  // https://gist.github.com/CrocoDillon/9990078

  // AMD support
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return CookieManager;
    });
    // CommonJS and Node.js module support.
  } else if (typeof exports !== 'undefined') {
    // Support Node.js specific `module.exports` (which can be a function)
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = CookieManager;
    }
    // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
    exports.CookieManager = CookieManager;
  } else {
    window.CookieManager = CookieManager;
  }

})(window, document);


