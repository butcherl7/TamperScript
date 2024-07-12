// ==UserScript==
// @name         iqiyi 文字可选
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  iqiyi 文字可选
// @author       Butcher
// @match        https://www.iqiyi.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=iqiyi.com
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    window.addEventListener("load", () => {
        setTimeout(() => {
            const body = document.body;
            body.style.userSelect = "auto";
        }, 2000);
    });
})();