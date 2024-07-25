// ==UserScript==
// @name         猫眼票房
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  猫眼票房页面文字可选
// @author       Butcher
// @match        https://piaofang.maoyan.com/dashboard**
// @icon         https://www.google.com/s2/favicons?sz=64&maoyan.com
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    window.addEventListener("load", () => {
        setTimeout(() => {
            const nodeList = document.querySelectorAll("*:not(input)");
            nodeList.forEach((node) => {
                node.style.userSelect = "auto";
            })
        }, 1000);
    });
})();