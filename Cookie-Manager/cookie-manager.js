/**
 *
 *
 *
 * Cookie-manager.js
 * simple, easy, lightweight cookie management library
 * version 1.0
 *
 * Copyright 2018 Burlakaviacheslav@gmail.com
 * Released by MIT license
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


  window.CookieManager = CookieManager;


})(window, document);


