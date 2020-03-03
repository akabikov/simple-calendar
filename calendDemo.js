import {createCalendar} from "./createCalendar.js";

const container = document.querySelector(".container");

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();

createCalendar(container, year, month);
