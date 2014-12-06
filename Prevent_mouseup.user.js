// ==UserScript==
// @name         Prevent 'mouseup'
// @namespace    https://github.com/michalradziwon
// @version      0.1
// @description  Stops propagation of 'mouseup' event. I found it usefull when developing reactjs app and onClick handler was executed twice (for mouseup and click event). It could be use as a temporary solution.
// @author       michalradziwon
// @match        http://localhost:9000/*
// @grant        none
// ==/UserScript==


console.log("STARTING_ ");

document.addEventListener("mouseup", function (e) {
    console.log("Stoping mouseup propagation for the event:", e);
    e.stopPropagation();
}, true);