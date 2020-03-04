import {genMonth} from "./genMonth.js";

export function createCalendar(elem, year, month) {
    
    const daysOfTheWeek = ["пн","вт","ср","чт","пт","сб","вс"];
    daysOfTheWeek.forEach(day => {
        addCell(elem, day);
    })

    const monthArr = genMonth(year, month);
    
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
