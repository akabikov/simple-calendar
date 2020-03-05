import {genMonth} from "./genMonth.js";

export function createCalendar(elem, year, month) {
    
    elem.innerHTML = "";

    const daysOfTheWeek = ["пн","вт","ср","чт","пт","сб","вс"];
    daysOfTheWeek.forEach(day => {
        let cell = addCell(elem, day);
        cell.classList.add("calend__week_day");
    })

    const monthArr = genMonth(year, month - 1);
    
    monthArr.days.forEach(day => {
        let cell = addCell(elem, day);

        if (day === monthArr.currentDay) {
            cell.classList.add("calend__day--current");
        }
    })
    
    function addCell(elem, text) {
        let div = document.createElement("div");
        div.textContent = text;
        div.classList.add("calend__day");
        elem.append(div);
        return div;
    }
}
