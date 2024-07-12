// ==UserScript==
// @name         Oracle javase 教程页面优化
// @namespace    http://tampermonkey.net/
// @version      2024-07-12
// @description  Oracle Swing 教程代码片段增加 code 标签
// @author       You
// @match        https://docs.oracle.com/javase/tutorial/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=oracle.com
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    const pres = document.querySelectorAll(".codeblock pre");
    for (const pre of pres) {
        const code = document.createElement("code");
        code.innerHTML = pre.outerHTML;
        pre.replaceWith(code);
    }
})();
