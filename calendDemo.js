import {createCalendar} from "./createCalendar.js";

const container = document.querySelector(".calend");
const input = document.querySelector(".month-input");

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;

createCalendar(container, year, month);

input.value = `${year}-` + `0${month}`.slice(-2);
input.addEventListener("change", () => {
    [year, month] = input.value.split("-");
    createCalendar(container, +year, +month);
})

