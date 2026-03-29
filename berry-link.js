// ==UserScript==
// @name         Berry Link
// @namespace    http://tampermonkey.net/
// @version      2026-03-28
// @description  BerryHub 【前往免费计划】 直接链接到节点内容页
// @author       You
// @match        https://berryhub.org/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=berryhub.org
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // 选择符合 class 的 a 标签
    const buttons = document.querySelectorAll('a.elementor-button.elementor-button-link.elementor-size-sm');

    buttons.forEach(btn => {
        // 查找内部包含 class="elementor-button-text" 的 span
        const span = btn.querySelector('span.elementor-button-text');

        // 匹配文本内容
        if (span && span.textContent.trim() === '前往免费计划') {
            // 仅在 href 不一致时修改，避免触发无限循环监听（如果有的话）
            if (btn.getAttribute('href') !== '/free/nodes/') {
                btn.href = '/free/nodes/';
                console.log('[油猴脚本] 成功将按钮链接修改为: /free/nodes/');
            }
        }
    });
})();