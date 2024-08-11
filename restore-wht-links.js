// ==UserScript==
// @name         还原 wht 链接
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  还原 wht 链接
// @author       Butcher
// @match        https://0x3.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0x3.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // 搜索 desktop
    var desktop = {
        "淘宝网": "https://www.taobao.com/",
        "天猫": "https://www.tmall.com/",
        "天猫超市": "https://chaoshi.tmall.com/",
        "京东": "https://www.jd.com/",
        "唯品会": "https://www.vip.com/",
        "飞猪旅行": "https://www.fliggy.com/",
        "携程旅行": "https://www.ctrip.com/",
        "当当": "https://www.dangdang.com/",
    }

    setTimeout(() => {
        const la = document.getElementsByClassName("la")[0];
        la.addEventListener("click", function (e) {
            const target = e.target;
            if (target.tagName === "A" && target.classList.contains("xa")) {
                const span = target.querySelector("span.Ca");
                const name = span?.textContent;
                if (desktop.hasOwnProperty(name) && target.href !== desktop[name]) {
                    target.href = desktop[name];
                }
            }
        })
    }, 2000);
})();