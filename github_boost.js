// ==UserScript==
// @name         Github Enhancement - High Speed Download
// @version      2.5.24
// @author       Edhic1
// @description  High-speed download of Git Clone/SSH, Release, Raw, Code(ZIP) and other files (Based on public welfare), project list file quick download (☁)
// @match        *://github.com/*
// @match        *://hub.incept.pw/*
// @match        *://hub.nuaa.cf/*
// @match        *://hub.yzuu.cf/*
// @match        *://hub.scholar.rr.nu/*
// @match        *://dgithub.xyz/*
// @match        *://kkgithub.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACEUExURUxpcRgWFhsYGBgWFhcWFh8WFhoYGBgWFiUlJRcVFRkWFhgVFRgWFhgVFRsWFhgWFigeHhkWFv////////////r6+h4eHv/// xcVFfLx8SMhIUNCQpSTk/r6+jY0NCknJ97e3ru7u+fn51BOTsPCwqGgoISDg6empmpoaK2srNDQ0FhXV3eXcCcAAAAXdFJOUwCBIZXMGP70BuRH2Ze/LpIMUunHkpQR34sfygAAAVpJREFUOMt1U+magjAMDAVb5BDU3W25b9T1/d9vaYpQKDs/rF9nSNJkArDA9ezQZ8wPbc8FE6eAiQUsOO1o19JolFibKCdHGHC0IJezOMD5snx/yE +KOYYr42fPSufSZyazqDoseTPw4lGJNOu6LBXVUPBG3lqYAOv/5ZwnNUfUifzBt8gkgfgINmjxOpgqUA147QWNaocLniqq3QsSVbQHNp45N/BAwoYQz9oUJEiE4GMGfoBSMj5gjeWRIMMqleD/CAzUHFqTLyj OA5zjNnwa4UCEZ2YK3khEcBXHjVBtEFeIZ6+NxYbPqWp1DLKV42t6Ujn2ydyiPi9nX0TTNAkVVZ/gozsl6FbrktkwaVvL2TRK0C8Ca7Hck7f5OBT6FFbLATkL2ugV0tm0RLM9fedDvhWstl8 Wp9AFDjFX7yOY/lJrv8AkYuz7fuP8dv9izCYH+x3/LBnj9fYPBTpJDNzX+7cAAAAASUVORK5CYII=
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @grant        window.onurlchange
// @sandbox      JavaScript
// @license      GPL-3.0 License
// @run-at       document-end
// @supportURL   https://github.com/Edhic1/Github-Download-Booster
// @homepageURL  https://github.com/Edhic1/Github-Download-Booster
// ==/UserScript==

(function() {
    'use strict';
    var backColor = '#ffffff', fontColor = '#888888', menu_rawFast = GM_getValue('xiu2_menu_raw_fast'), menu_rawFast_ID, menu_rawDownLink_ID, menu_gitClone_ID, menu_feedBack_ID;
    const download_url_us = [
    ['https://gh.h233.eu.org/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [@XIU/XIU2] '],
    //['https://gh.api.99988866.xyz/https://github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [hunshcn/gh-proxy] '], // Too many people use the official demonstration site
    ['https://gh.ddlc.top/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [@mtr-static-official] '],
    //['https://gh2.yanqishui.work/https://github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [@HongjieCN] '], // Parsing error
    ['https://dl.ghpig.top/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [feizhuqwq.com] '],
    //['https://gh.flyinbug.top/gh/https://github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [Mintimate] '], // Error
    ['https://slink.ltd/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [ Zhiliao Station ] '],
    //['https://git.xfj0.cn/https://github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [ Anonymous ] '], // No resolution
    ['https://gh.con.sh/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [ Anonymous ] '],
    //['https://ghps.cc/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [ Anonymous ] '], // prompt blocked
    //['https://gh-proxy.com/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [ Anonymous ] '], // 502
    ['https://cors.isteed.cc/github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [@Lufs\'s] '],
    ['https://hub.gitmirror.com/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [GitMirror] '],
    ['https://sciproxy.com/github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [sciproxy.com] '],
    ['https://ghproxy.cc/https://github.com', ' United States ', '[ United States Los Angeles ] - This public welfare acceleration source is provided by [@yionchiii lau] '],
    ['https://cf.ghproxy.cc/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [@yionchiii lau] '],
    ['https://www.ghproxy.cc/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [@yionchiii lau] '],
    ['https://ghproxy.cn/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [@yionchiii lau] '],
    ['https://www.ghproxy.cn/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [@yionchiii lau] '],
    ['https://gh.jiasu.in/https://github.com', ' United States ', '[ US Cloudflare CDN] - This public welfare acceleration source is provided by [@0-RTT] '],
    ['https://dgithub.xyz', ' United States ', '[ United States Seattle ] - This public welfare acceleration source is provided by [dgithub.xyz] '],
    ['https://download.ixnic.net', ' United States ', '[ United States Los Angeles ] - This public welfare acceleration source is provided by [FastGit group member ] '],
    ['https://download.nuaa.cf', ' United States ', '[ United States Los Angeles ] - This public welfare acceleration source is provided by [FastGit group member ] '],
    ['https://download.scholar.rr.nu', ' United States ', '[ United States New York ] - This public welfare acceleration source is provided by [FastGit group member ] '],
    ['https://download.yzuu.cf', ' United States ', '[ United States New York ] - This public acceleration source is provided by [FastGit group member ] ']
    ], download_url = [
    //['https://download.fastgit.org', ' Germany ', '[ Germany ] - This public welfare acceleration source is provided by [FastGit] &#10;&#10; Tip: I hope everyone will use the previous US nodes as much as possible ( 4 random nodes each time for load balancing), &#10; avoid traffic concentrating on Asian public welfare nodes, reduce cost pressure, and make public welfare more sustainable ~', 'https://archive.fastgit.org'], // Certificate expired
    ['https://mirror.ghproxy.com/https://github.com', 'South Korea', '[ Japan, Korea, Germany, etc. ] ( CDN is not fixed) - This public welfare acceleration source is provided by [ghproxy] &#10;&#10; Tip: I hope everyone will try to use the previous US node as much as possible (randomly each time Load balancing), &#10; Avoid all traffic from being concentrated on the Asian charity node, reduce cost pressure, and make charity more sustainable ~'],
    ['https://ghproxy.net/https://github.com', ' Japan ', '[ Japan Osaka ] - This public welfare acceleration source is provided by [ghproxy] &#10;&#10; Tip: I hope everyone will use the previous American nodes as much as possible (randomly each time Load balancing), &#10; avoid traffic concentration on Asian charity nodes, reduce cost pressure, and charity can be more sustainable ~'],
    ['https://kkgithub.com', 'Hongkong', '[ Hong Kong, China, Japan, Singapore, etc. ] - This public welfare acceleration source is provided by [help.kkgithub.com] &#10;&#10; Tip: I hope everyone will use the previous US nodes as much as possible ( 4 random nodes each time for load balancing), &#10; avoid traffic concentrating on Asian public welfare nodes, reduce cost pressure, and make public welfare more sustainable ~'],
    //['https://download.incept.pw', 'Hongkong', '[Hongkong,China] - This public welfare acceleration source is provided by [FastGit group member ] &#10;&#10; Tip: I hope everyone will use the previous US nodes as much as possible ( 4 random nodes each time for load balancing), &#10; avoid traffic concentrating on Asian public welfare nodes, reduce cost pressure, and make public welfare more sustainable ~'] // ERR_SSL_PROTOCOL_ERROR
    ], clone_url = [
    ['https://gitclone.com', ' Domestic ', '[ China Domestic ] - This public welfare acceleration source is provided by [GitClone] &#10;&#10; - Cache: Yes &#10; - Slower for the first time , faster after caching '],
    ['https://kkgithub.com', 'Hongkong', '[ Hong Kong, China, Japan, Singapore, etc. ] - This public welfare acceleration source is provided by [help.kkgithub.com] &#10;&#10; - Cache: None (or very short time) '],
    ['https://hub.incept.pw', 'Hongkong', '[Hongkong,China、USA] - This public welfare acceleration source is provided by [FastGit group members ] '],
    ['https://mirror.ghproxy.com/https://github.com', ' Korea ', '[ Japan, Korea, Germany, etc. ] ( CDN is not fixed) - This public welfare acceleration source is provided by [ghproxy] &#10;&#10; - Cache: None (or very short time) '],
    //['https://gh-proxy.com/https://github.com', 'South Korea', '[South Korea] - This public welfare acceleration source is provided by [ghproxy] &#10;&#10; - Cache: None (or very short time) '],
    ['https://githubfast.com', 'South Korea', '[South Korea] - This public welfare acceleration source is provided by [Github Fast] &#10;&#10; - Cache: None (or very short time) '],
    ['https://ghproxy.net/https://github.com', ' Japan ', '[ Japan Osaka ] - This public welfare acceleration source is provided by [ghproxy] &#10;&#10; - Cache: None (or very short time) '],
    ['https://github.moeyy.xyz/https://github.com', ' Singapore ', '[ Singapore, Hong Kong, China, Japan, etc. ] ( CDN is not fixed) - This public welfare acceleration source is provided by [Moeyy] &#10;&#10; - Cache: None (or very short time) '],
    //['https://slink.ltd/https://github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [ Zhi Liao Xiao Zhan ] '] // Not necessary for now
    //['https://hub.gitmirror.com/https://github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [GitMirror] '], // Not necessary for now
    //['https://sciproxy.com/github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [sciproxy.com] '], // Not necessary for now
    //['https://ghproxy.cc/https://github.com', ' United States ', '[ United States Los Angeles ] - This public welfare acceleration source is provided by [@yionchiii lau] '], // Not necessary yet
    //['https://cf.ghproxy.cc/https://github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [@yionchiii lau] '], // Not necessary for now
    //['https://www.ghproxy.cc/https://github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [@yionchiii lau] '], // Not necessary for now
    //['https://ghproxy.cn/https://github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [@yionchiii lau] '], // Not necessary for now
    //['https://www.ghproxy.cn/https://github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [@yionchiii lau] '], // Not necessary for now
    //['https://gh.jiasu.in/https://github.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [@0-RTT] '], // Not necessary for now
    //['https://dgithub.xyz', ' United States ', '[ United States Seattle ] - This public welfare acceleration source is provided by [dgithub.xyz] '], // Not necessary yet
    //['https://hub.fgit.cf', ' United States ', '[ United States Los Angeles ] - This public welfare acceleration source is provided by [FastGit group member ] '], // Being complained about and hung up
    //['https://hub.nuaa.cf', ' United States ', '[ United States Los Angeles ] - This public welfare acceleration source is provided by [FastGit group member ] '], // Not necessary for now
    //['https://hub.scholar.rr.nu', ' United States ', '[ United States New York ] - This public welfare acceleration source is provided by [FastGit group member ] '], // Not necessary for now
    //['https://hub.njuu.cf', ' United States ', '[ United States New York ] - This public welfare acceleration source is provided by [FastGit group member ] '], // The domain name is down
    //['https://hub.yzuu.cf', ' United States ', '[ United States New York ] - This public welfare acceleration source is provided by [FastGit group member ] '], // Not necessary for now
    //['https://hub.0z.gs', ' United States ', '[ US Cloudflare CDN]'], // Domain name not resolved
    //['https://hub.shutcm.cf', ' United States ', '[ US Cloudflare CDN]'] // Connection timed out
    ], clone_ssh_url = [
    ['ssh://git@ssh.github.com:443/', 'Github native ', '[ Japan, Singapore, etc. ] - SSH on port 443 provided by Github (still SSH protocol), suitable for network environments with restricted access to port 22 '],
    ['git@ssh.fastgit.org:', ' Hong Kong ', '[ China Hong Kong ] - This public welfare acceleration source is provided by [FastGit] ']
    //['git@git.zhlh6.cn:', ' United States ', '[ United States Los Angeles ]'] // Hang up
    ], raw_url = [
    ['https://raw.githubusercontent.com', 'Github native ', '[ Japan Tokyo ]'],
    ['https://raw.kkgithub.com', 'Hongkong', '[ Hong Kong, China, Japan, Singapore, etc. ] - This public welfare acceleration source is provided by [help.kkgithub.com] &#10;&#10; - Cache: None (or very short time) '],
    ['https://mirror.ghproxy.com/https://raw.githubusercontent.com', ' Korea ', '[ Japan, Korea, Germany, etc. ] ( CDN is not fixed) - This public welfare acceleration source is provided by [ghproxy] &#10;&#10; - Cache: None (or very short time) '],
    //['https://gh-proxy.com/https://raw.githubusercontent.com', 'South Korea2', '[South Korea] - This public welfare acceleration source is provided by [ghproxy] &#10;&#10; - Cache: None (or very short time) '],
    ['https://ghproxy.net/https://raw.githubusercontent.com', 'Japan1', '[Japan Osaka ] - This public welfare acceleration source is provided by [ghproxy] &#10;&#10; - Cache: None (or very short time) '],
    ['https://fastly.jsdelivr.net/gh', 'Japan2', '[Japan Tokyo ] - This public welfare acceleration source is provided by [JSDelivr CDN] &#10;&#10; - Cache: Yes &#10; - Files larger than 50 MB are not supported &#10; - Branch names in version number format (such as v1.2.3 ) are not supported '],
    ['https://fastraw.ixnic.net', 'Japan3', '[Japan Osaka ] - This public welfare acceleration source is provided by [FastGit group member ] &#10;&#10; - Cache: None (or very short time) '], // There is also a raw.ixnic.net in Los Angeles, USA
    //['https://gcore.jsdelivr.net/gh', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [JSDelivr CDN] &#10;&#10; - Cache: Yes &#10; - Does not support files larger than 50 MB &#10; - Does not support branch names in version number format (such as v1.2.3 ) '], // becomes Cloudflare CDN in the United States
    ['https://cdn.jsdelivr.us/gh', ' Other 1', '[ South Korea, the United States, Malaysia, Romania, etc. ] ( CDN is not fixed) - This public welfare acceleration source is provided by [@ayao] &#10;&#10; - Cache: Yes '],
    ['https://jsdelivr.b-cdn.net/gh', ' Other 2', '[ Hong Kong, Taiwan, Japan, Singapore, etc. ] ( CDN is not fixed) - This public welfare acceleration source is provided by [@rttwyjz] &#10;&#10; - Cache: Yes '],
    ['https://github.moeyy.xyz/https://raw.githubusercontent.com', ' Other 3', '[ Singapore, Hong Kong, China, Japan, etc. ] ( CDN is not fixed) - Cache: None (or very short time) '],
    ['https://raw.cachefly.998111.xyz', ' Other 4', '[ Singapore, Japan, India, etc. ] ( Anycast CDN is not fixed) - This public welfare acceleration source is provided by [@XxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX0] &#10;&#10; - Cache: Yes (about 12 hours ) '],
    //['https://raw.incept.pw', 'Hongkong', '[ Hong Kong, China, the United States ] - This public welfare acceleration source is provided by [FastGit group members ] &#10;&#10; - Cache: None (or very short time) '], // ERR_SSL_PROTOCOL_ERROR
    //['https://ghproxy.cc/https://raw.githubusercontent.com', ' United States ', '[ United States Los Angeles ] - This public welfare acceleration source is provided by [@yionchiii lau] '], // Not necessary yet
    //['https://cf.ghproxy.cc/https://raw.githubusercontent.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [@yionchiii lau] '], // Not necessary for now
    //['https://www.ghproxy.cc/https://raw.githubusercontent.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [@yionchiii lau] '], // Not necessary for now
    //['https://ghproxy.cn/https://raw.githubusercontent.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [@yionchiii lau] '], // Not necessary for now
    //['https://www.ghproxy.cn/https://raw.githubusercontent.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [@yionchiii lau] '], // Not necessary for now
    //['https://gh.jiasu.in/https://raw.githubusercontent.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [@0-RTT] '], // Not necessary for now
    //['https://dgithub.xyz', ' United States ', '[ United States Seattle ] - This public welfare acceleration source is provided by [dgithub.xyz] '], // Not necessary yet
    //['https://raw.fgit.cf', ' United States ', '[ United States Los Angeles ] - This public welfare acceleration source is provided by [FastGit group member ] &#10;&#10; - Cache: None (or very short time) '], // Hanged due to complaint
    //['https://raw.nuaa.cf', ' United States ', '[ United States Los Angeles ] - This public welfare acceleration source is provided by [FastGit group member ] '], // Not necessary for now
    //['https://raw.scholar.rr.nu', ' United States ', '[ United States New York ] - This public welfare acceleration source is provided by [FastGit group member ] '], // Not necessary for now
    //['https://raw.njuu.cf', ' United States ', '[ United States New York ] - This public welfare acceleration source is provided by [FastGit group member ] &#10;&#10; - Cache: None (or very short time) '], // Domain name is down
    //['https://raw.yzuu.cf', ' United States ', '[ United States New York ] - This public welfare acceleration source is provided by [FastGit group member ] &#10;&#10; - Cache: None (or very short time) '], // Not necessary yet
    //['https://raw.gitmirror.com', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [GitMirror] &#10;&#10; - Cache: Yes '], // Not necessary for now
    //['https://cdn.54188.cf/gh', ' United States ', '[ United States Cloudflare CDN] - This public welfare acceleration source is provided by [PencilNavigator] &#10;&#10; - Cache: Yes '], // Not necessary for now
    //['https://raw.fastgit.org', ' Germany ', '[ Germany ] - This public welfare acceleration source is provided by [FastGit] &#10;&#10; - Cache: None (or very short time) '], // Hang up
    //['https://git.yumenaka.net/https://raw.githubusercontent.com', ' United States ', '[ United States San Jose ]&#10;&#10; - Cache: None (or very short time) '], // Connection timed out
    ], svg = [
            '<svg class="octicon octicon-cloud-download" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"></path></svg>'
        ], style = ['padding:0 6px; margin-right: -1px; border-radius: 2px; background-color: var(--XIU2-back-Color); border-color: rgba(27, 31, 35, 0.1); font-size: 11px; color: var(--XIU2-font-Color);'];
    
        if (menu_rawFast == null){menu_rawFast = 1; GM_setValue('xiu2_menu_raw_fast', 1)};
    if (GM_getValue('menu_rawDownLink') == null){GM_setValue('menu_rawDownLink', true)};
    if (GM_getValue('menu_gitClone') == null){GM_setValue('menu_gitClone', true)};
    registerMenuCommand();
    // Register script menu
    function registerMenuCommand() {
    // If the feedback menu ID is not null , delete all script menus
    if (menu_feedBack_ID) {GM_unregisterMenuCommand(menu_rawFast_ID); GM_unregisterMenuCommand(menu_rawDownLink_ID); GM_unregisterMenuCommand(menu_gitClone_ID); GM_unregisterMenuCommand(menu_feedBack_ID); menu_rawFast = GM_getValue('xiu2_menu_raw_fast');}
    // Avoid error reporting when the data stored by the user is larger than the array after reducing the raw array
    if (menu_rawFast > raw_url.length - 1) menu_rawFast = 0
    if (GM_getValue('menu_rawDownLink')) menu_rawFast_ID = GM_registerMenuCommand(`${['0️ ⃣ ' ,'1️ ⃣ ','2️ ⃣ ','3️ ⃣ ','4️ ⃣ ','5️ ⃣ ','6️ ⃣ ','7️ ⃣ ','8️ ⃣ ','9️ ⃣ ',' 🔟 '][menu_rawFast]} [ ${raw_url[menu_rawFast][1]} ] acceleration source ( ☁ ) - click to switch` , menu_toggle_raw_fast);
    menu_rawDownLink_ID = GM_registerMenuCommand(`${GM_getValue('menu_rawDownLink')?' ✅ ':' ❌ '} Project list single file quick download ( ☁ )`, function(){if (GM_getValue('menu_rawDownLink') == true) {GM_setValue('menu_rawDownLink', false); GM_notification({text: `The [ Project list single file quick download ( ☁ )] function has been closed \n ( Click to refresh the page to take effect) `, timeout: 3500, onclick: function(){location.reload();}});} else {GM_setValue('menu_rawDownLink', true); GM_notification({text: `The [ Project list single file quick download ( ☁ )] function has been opened \n ( Click to refresh the page to take effect) `, timeout: 3500, onclick: function(){location.reload();}});}registerMenuCommand();});
    menu_gitClone_ID = GM_registerMenuCommand(`${GM_getValue('menu_gitClone')?' ✅ ':' ❌ '} Add git clone command` , function(){if (GM_getValue('menu_gitClone') == true) {GM_setValue('menu_gitClone', false); GM_notification({text: ` The [ Add git clone command ] function has been turned off \n ( Click to refresh the page to take effect) `, timeout: 3500, onclick: function(){location.reload();}});} else {GM_setValue('menu_gitClone', true); GM_notification({text: `The [ Add git clone command ] function has been turned on \n ( Click to refresh the page to take effect) `, timeout: 3500, onclick: function(){location.reload();}});}registerMenuCommand();});
    menu_feedBack_ID = GM_registerMenuCommand(' 💬 Feedback & Suggestions [Github]', function () {window.GM_openInTab('https://github.com/XIU2/UserScript', {active: true,insert: true,setParent: true});window.GM_openInTab('https://greasyfork.org/zh-CN/scripts/412245/feedback', {active: true,insert: true,setParent: true});});
    }
    
    // Switch the acceleration source
    function menu_toggle_raw_fast() {
    // If the current acceleration source position is greater than or equal to the total number of acceleration sources, change to the first acceleration source, otherwise increment the next acceleration source
    if (menu_rawFast >= raw_url.length - 1) {menu_rawFast = 0;} else {menu_rawFast += 1;}
    GM_setValue('xiu2_menu_raw_fast', menu_rawFast);
    delRawDownLink(); // Delete the old acceleration source
    addRawDownLink(); // Add a new acceleration source
    GM_notification({text: " The acceleration source has been switched to: " + raw_url[menu_rawFast][1], timeout: 3000}); // Prompt message
    registerMenuCommand(); // Re-register script menu
    };
    
    colorMode(); // Adapt to daytime / nighttime theme mode
    setTimeout(addRawFile, 1000); // Raw acceleration
    setTimeout(addRawDownLink, 2000); // Quick download of a single Raw file ( ☁ ), delay execution by 2 seconds to avoid being deleted by pjax
    
    // The onurlchange event grant added in Tampermonkey v4.11 can monitor URL changes of pjax and other web pages
    if (window.onurlchange === undefined) addUrlChangeEvent();
    window.addEventListener('urlchange', function() {
    colorMode(); // Adapt to daytime / nighttime theme mode
    if (location.pathname.indexOf('/releases')) addRelease(); // Release acceleration
    setTimeout(addRawFile, 1000); // Raw acceleration
    setTimeout(addRawDownLink, 2000); // Quick download of a single Raw file ( ☁ ), delay execution by 2 seconds to avoid being deleted by pjax
    setTimeout(addRawDownLink_, 1000); // Re-add the Raw download link ( ☁ ) mouse event when the browser goes back / forward
    });
    
    
    // Github Git Clone/SSH , Release , Download ZIP are changed to dynamically load file lists, so it is necessary to monitor changes in web page elements
    const callback = (mutationsList, observer) => {
    if (location.pathname.indexOf('/releases') > -1) { // Release
    for (const mutation of mutationsList) {
                    for (const target of mutation.addedNodes) {
                        if (target.nodeType !== 1) return
                        if (target.tagName === 'DIV' && target.dataset.viewComponent === 'true' && target.classList[0] === 'Box') addRelease();
                    }
                }
            } else if (document.querySelector('#repository-container-header:not([hidden])')) { // Project Home
                for (const mutation of mutationsList) {
                    for (const target of mutation.addedNodes) {
                        if (target.nodeType !== 1) return
                        if (target.tagName === 'DIV' && target.parentElement.id === '__primerPortalRoot__') {
                            addDownloadZIP(target);
                            addGitClone(target);
                            addGitCloneSSH(target);
                        } else if (target.tagName === 'DIV' && target.className.indexOf('Box-sc-') != -1) {
                            if (target.querySelector('input[value^="https:"]')) {
                                addGitCloneClear('.XIU2-GCS'); addGitClone(target);
                            } else if (target.querySelector('input[value^="git@"]')) {
                                addGitCloneClear('.XIU2-GC'); addGitCloneSSH(target);
                            } else if (target.querySelector('input[value^="gh "]')) {
    addGitCloneClear('.XIU2-GC, .XIU2-GCS');
    }
    }
    }
    }
    }
    };
    const observer = new MutationObserver(callback);
    observer.observe(document, { childList: true, subtree: true });
    
    
    // download_url randomly selects 4 US acceleration sources
    function get_New_download_url() {
    //return download_url_us.concat(download_url) // full output for debugging
    let shuffled = download_url_us.slice(0), i = download_url_us.length, min = i - 4, temp, index;
    while (i-- > min) {index = Math.floor((i + 1) * Math.random()); temp = shuffled[index]; shuffled[index] = shuffled[i]; shuffled[i] = temp;}
    return shuffled.slice(min).concat(download_url); // Randomly shuffle the download_url_us array and take the first 4 , then merge them into the download_url array
    }
    
    // Release
    function addRelease() {
    let html = document.querySelectorAll('.Box-footer'); if (html.length == 0 || location.pathname.indexOf('/releases') == -1) return
    let divDisplay = 'margin-left: -90px;', new_download_url = get_New_download_url();
            if (document.documentElement.clientWidth > 755) {divDisplay = 'margin-top: -3px;margin-left: 8px;display: inherit;';}; // Adjust the style for small screen
            for (const current of html) {
                if (current.querySelector('.XIU2-RS')) continue
                current.querySelectorAll('li.Box-row a').forEach(function (_this) {
                    let href = _this.href.split(location.host),
                        url = '', _html = `<div class="XIU2-RS" style="${divDisplay}">`;
    
                    for (let i=0;i<new_download_url.length;i++) {
                        if (new_download_url[i][3] !== undefined && url.indexOf('/archive/') !== -1) {
                            url = new_download_url[i][3] + href[1]
                        } else {
                            url = new_download_url[i][0] + href[1]
                        }
                        _html += `<a style="${style[0]}" class="btn" href="${url}" title="${new_download_url[i][2]}" rel="noreferrer noopener nofollow">${new_download_url[i][1]}</a>`
                    }
                    _this.parentElement.nextElementSibling.insertAdjacentHTML('beforeend', _html + '</div>');
                });
            }
        }
    
    
        // Download ZIP
        function addDownloadZIP(target) {
            let html = target.querySelector('ul[class^=List__ListBox-sc-] ul[class^=List__ListBox-sc-]>li:last-child');if (!html) return
            let href_script = document.querySelector('react-partial[partial-name=repos-overview]>script[data-target="react-partial.embeddedData"]'),
                href_slice = href_script.textContent.slice(href_script.textContent.indexOf('"zipballUrl":"')+14),
                href = href_slice.slice(0, href_slice.indexOf('"')),
                url = '', _html = '', new_download_url = get_New_download_url();
    
            // Clone the original Download ZIP element and locate the <a> <span> tags
            let html_clone = html.cloneNode(true),
                html_clone_a = html_clone.querySelector('a[href$=".zip"]'),
                html_clone_span = html_clone.querySelector('span[id]');
    
            for (let i=0;i<new_download_url.length;i++) {
                if (new_download_url[i][3] === '') continue
    
                if (new_download_url[i][3] !== undefined) {
                    url = new_download_url[i][3] + href
                } else {
                    url = new_download_url[i][0] + href
                }
                html_clone_a.href = url
                html_clone_a.setAttribute('title', new_download_url[i][2].replaceAll('&#10;','\n'))
                html_clone_span.textContent = 'Download ZIP ' + new_download_url[i][1]
                _html += html_clone.outerHTML
            }
            html.insertAdjacentHTML('afterend', _html);
        }
    
        // Git Clone Switch Cleanup
        function addGitCloneClear(css) {
            document.querySelectorAll(css).forEach((e)=>{e.remove()})
        }
    
        // Git Clone
        function addGitClone(target) {
            let html = target.querySelector('input[value^="https:"]');if (!html) return
            let href_split = html.value.split(location.host)[1],
    html_parent = '<div style="margin-top: 4px;" class="XIU2-GC ' + html.parentElement.className + '">',
    url = '', _html = '', _gitClone = '';
    html.nextElementSibling.hidden = true; // Hide the copy button on the right (considering that you can click to copy directly, the copy button event will not be implemented repeatedly)
    if (GM_getValue('menu_gitClone')) {_gitClone='git clone '; html.value = _gitClone + html.value; html.setAttribute('value', html.value);}
    // Clone the original Git Clone element
    let html_clone = html.cloneNode(true);
    for (let i=0;i<clone_url.length;i++) {
                if (clone_url[i][0] === 'https://gitclone.com') {
                    url = clone_url[i][0] + '/github.com' + href_split
                } else {
                    url = clone_url[i][0] + href_split
                }
                html_clone.title = `${url}\n\n${clone_url[i][2].replaceAll('&#10;','\n')}\n\nTip: Click on the text to copy it directly`
                html_clone.setAttribute('value', _gitClone + url)
                _html += html_parent + html_clone.outerHTML + '</div>'
            }
            html.parentElement.insertAdjacentHTML('afterend', _html);
        }
    
    
        // Git Clone SSH
    function addGitCloneSSH(target) {
    let html = target.querySelector('input[value^="git@"]');if (!html) return
    let href_split = html.value.split(':')[1],
    html_parent = '<div style="margin-top: 4px;" class="XIU2-GCS ' + html.parentElement.className + '">',
    url = '', _html = '', _gitClone = '';
    html.nextElementSibling.hidden = true; // Hide the copy button on the right (considering that you can click to copy directly, the copy button event will not be implemented repeatedly)
    if (GM_getValue('menu_gitClone')) {_gitClone='git clone '; html.value = _gitClone + html.value; html.setAttribute('value', html.value);}
            // Clone the original Git Clone SSH element
            let html_clone = html.cloneNode(true);
            for (let i=0;i<clone_ssh_url.length;i++) {
                url = clone_ssh_url[i][0] + href_split
                html_clone.title = `${url}\n\n${clone_ssh_url[i][2].replaceAll('&#10;','\n')}\n\nTip: Click on the text to copy it directly`
                html_clone.setAttribute('value', _gitClone + url)
                _html += html_parent + html_clone.outerHTML + '</div>'
            }
            html.parentElement.insertAdjacentHTML('afterend', _html);
        }
    
    
        // Raw
        function addRawFile() {
            let html = document.querySelector('a[data-testid="raw-button"]');if (!html) return
            let href = location.href.replace(`https://${location.host}`,''),
                href2 = href.replace('/blob/','/'),
                url = '', _html = '';
    
            for (let i=1;i<raw_url.length;i++) {
                if ((raw_url[i][0].indexOf('/gh') + 3 === raw_url[i][0].length) && raw_url[i][0].indexOf('cdn.staticaly.com') === -1) {
                    url = raw_url[i][0] + href.replace('/blob/','@');
                } else {
                    url = raw_url[i][0] + href2;
                }
                _html += `<a href="${url}" title="${raw_url[i][2]}" target="_blank" role="button" rel="noreferrer noopener nofollow" data-size="small" class="${html.className} XIU2-RF">${raw_url[i][1].replace(/ \d/,'')}</a>`
            }
            if (document.querySelector('.XIU2-RF')) document.querySelectorAll('.XIU2-RF').forEach((e)=>{e.remove()})
            html.insertAdjacentHTML('afterend', _html);
        }
    
    
        // Raw single file quick download (☁)
        function addRawDownLink() {
            if (!GM_getValue('menu_rawDownLink')) return
    // If it is not a project file page, return; if the webpage has a Raw download link ( ☁ ), return
    let files = document.querySelectorAll('div.Box-row svg.octicon.octicon-file, .react-directory-filename-column>svg.color-fg-muted');if(files.length === 0) return;if (location.pathname.indexOf('/tags') > -1) return
    let files1 = document.querySelectorAll('a.fileDownLink');if(files1.length > 0) return;
    
    // Display when the mouse is pointing
    var mouseOverHandler = function(evt) {
    let elem = evt.currentTarget,
    aElm_new = elem.querySelectorAll('.fileDownLink'),
                    aElm_now = elem.querySelectorAll('svg.octicon.octicon-file, svg.color-fg-muted');
                aElm_new.forEach(el=>{el.style.cssText = 'display: inline'});
                aElm_now.forEach(el=>{el.style.cssText = 'display: none'});
            };
    
            // Hide when mouse leaves
            var mouseOutHandler = function(evt) {
                let elem = evt.currentTarget,
                    aElm_new = elem.querySelectorAll('.fileDownLink'),
                    aElm_now = elem.querySelectorAll('svg.octicon.octicon-file, svg.color-fg-muted');
                aElm_new.forEach(el=>{el.style.cssText = 'display: none'});
                aElm_now.forEach(el=>{el.style.cssText = 'display: inline'});
            };
    
            // Loop Add
            files.forEach(function(fileElm) {
                let trElm = fileElm.parentNode.parentNode,
                    cntElm_a = trElm.querySelector('[role="rowheader"] > .css-truncate.css-truncate-target.d-block.width-fit > a, .react-directory-truncate>a'),
                    Name = cntElm_a.innerText,
                    href = cntElm_a.getAttribute('href'),
                    href2 = href.replace('/blob/','/'), url = '';
                if ((raw_url[menu_rawFast][0].indexOf('/gh') + 3 === raw_url[menu_rawFast][0].length) && raw_url[menu_rawFast][0].indexOf('cdn.staticaly.com') === -1) {
                    url = raw_url[menu_rawFast][0] + href.replace('/blob/','@');
                } else {
                    url = raw_url[menu_rawFast][0] + href2;
                }
    
    fileElm.insertAdjacentHTML('afterend', ` <a href="${url}" download="${Name}" target="_blank" rel="noreferrer noopener nofollow" class="fileDownLink" style="display: none;" title=" 「 ${raw_url[menu_rawFast][1]} 」 &#10;&#10;[Alt + left button] or [right button - Save as...] to download the file. &#10;Note: click the [ ☁ ] icon with your mouse, not the file name on the left! &#10;&#10;${raw_url[menu_rawFast][2]}&#10;&#10;Tip: Click the Tampermonkey extension icon - [ ${raw_url[menu_rawFast][1]} ] acceleration source ( ☁ ) in the upper right corner of the browser to switch. "> ${svg[0]}</a>`);
    // Bind mouse events
    trElm.onmouseover = mouseOverHandler;
    trElm.onmouseout = mouseOutHandler;
    });
    }
    
    
    // Remove Raw single file quick download ( ☁ )
    function delRawDownLink() {
    if (!GM_getValue('menu_rawDownLink')) return
    let aElm = document.querySelectorAll('.fileDownLink');if(aElm.length === 0) return;
    aElm.forEach(function(fileElm) {fileElm.remove();})
    }
    
    
    // Re-add the Raw single file quick download ( ☁ ) mouse event when the browser returns / forwards
    function addRawDownLink_() {
    if (!GM_getValue('menu_rawDownLink')) return
    // If it is not a project file page, return; if the webpage does not have a Raw download link ( ☁ ), return
    let files = document.querySelectorAll('div.Box-row svg.octicon.octicon-file, .react-directory-filename-column>svg.color-fg-muted');if(files.length === 0) return;
    let files1 = document.querySelectorAll('a.fileDownLink');if(files1.length === 0) return;
    
    // Display when the mouse is pointing
    var mouseOverHandler = function(evt) {
    let elem = evt.currentTarget,
    aElm_new = elem.querySelectorAll('.fileDownLink'),
    aElm_now = elem.querySelectorAll('svg.octicon.octicon-file, svg.color-fg-muted');
    aElm_new.forEach(el=>{el.style.cssText = 'display: inline'});
    aElm_now.forEach(el=>{el.style.cssText = 'display: none'});
    };
    
    // Hide when mouse leaves
            var mouseOutHandler = function(evt) {
                let elem = evt.currentTarget,
                    aElm_new = elem.querySelectorAll('.fileDownLink'),
                    aElm_now = elem.querySelectorAll('svg.octicon.octicon-file, svg.color-fg-muted');
                aElm_new.forEach(el=>{el.style.cssText = 'display: none'});
                aElm_now.forEach(el=>{el.style.cssText = 'display: inline'});
            };
            // Loop Add
            files.forEach(function(fileElm) {
                let trElm = fileElm.parentNode.parentNode;
                // Binding Mouse Events
                trElm.onmouseover = mouseOverHandler;
    trElm.onmouseout = mouseOutHandler;
    });
    }
    
    
    // Adapt to daytime / nighttime theme mode
    function colorMode() {
    let style_Add;
    if (document.getElementById('XIU2-Github')) {style_Add = document.getElementById('XIU2-Github')} else {style_Add = document.createElement('style'); style_Add.id = 'XIU2-Github'; style_Add.type = 'text/css';}
    backColor = '#ffffff'; fontColor = '#888888';
    
    if (document.lastElementChild.dataset.colorMode === 'dark') { // If it is night mode
    if (document.lastElementChild.dataset.darkTheme === 'dark_dimmed') {
    backColor = '#272e37'; fontColor = '#768390';
    } else {
    backColor = '#161a21'; fontColor = '#97a0aa';
    }
    } else if (document.lastElementChild.dataset.colorMode === 'auto') { // If it is automatic mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches || document.lastElementChild.dataset.lightTheme.indexOf('dark') > -1) { // If the browser is in night mode or Day mode is dark
                    if (document.lastElementChild.dataset.darkTheme === 'dark_dimmed') {
                        backColor = '#272e37'; fontColor = '#768390';
                    } else if (document.lastElementChild.dataset.darkTheme.indexOf('light') == -1) { // Exclude the case where night mode is light
                        backColor = '#161a21'; fontColor = '#97a0aa';
                    }
                }
            }
    
            document.lastElementChild.appendChild(style_Add).textContent = `.XIU2-RS a {--XIU2-back-Color: ${backColor}; --XIU2-font-Color: ${fontColor};}`;
        }
    
    
    // Custom urlchange event (used to monitor URL changes) for non- Tampermonkey managers
    function addUrlChangeEvent() {
    history.pushState = ( f => function pushState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('urlchange'));
    return ret;
    })(history.pushState);
    
    history.replaceState = ( f => function replaceState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('urlchange'));
    return ret;
    })(history.replaceState);
    
    window.addEventListener('popstate',()=>{ // Trigger the urlchange event when clicking the browser's forward / back button
    window.dispatchEvent(new Event('urlchange'))
    });
    }
    })();
    