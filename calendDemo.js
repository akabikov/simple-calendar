import {createCalendar} from "./createCalendar.js";

const container = document.querySelector(".calend");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();

createCalendar(container, year, month);

monthInput.value = month;
yearInput.value = year;

monthInput.addEventListener("change", e => {
    month = e.target.value;
    createCalendar(container, +year, +month);
})

yearInput.addEventListener("change", e => {
    year = e.target.value;
    createCalendar(container, +year, +month);
})