(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(n){n.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});let c=document.getElementById("menu-open-button"),o=document.getElementById("header-menu"),u=document.getElementById("menu-close-button");c.addEventListener("click",function(){o.classList.toggle("is-open")});u.addEventListener("click",function(){o.classList.toggle("is-open")});document.addEventListener("click",function(r){let n=o.contains(r.target)||c.contains(r.target);!n&&!o.classList.contains("is-open")||!n&&o.classList.contains("is-open")&&o.classList.remove("is-open")});
//# sourceMappingURL=commonHelpers.js.map