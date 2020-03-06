import {genMonth} from "./genMonth.js";

export function createCalendar(elem, year, month) {
    
    elem.innerHTML = "";

    const daysOfTheWeek = ["пн","вт","ср","чт","пт","сб","вс"];
    daysOfTheWeek.forEach(day => {
        addCell(elem, day, ["calend__day", "calend__week_day"]);
    })

    const monthArr = genMonth(year, month - 1);
    
    monthArr.days.forEach(day => {
        let styles = ["calend__day"];

        if (day === monthArr.currentDay) {
            styles = [...styles, "calend__day--current"];
        }

        addCell(elem, day, styles);
    })
    
    
    function addCell(elem, text, styles) {
        let div = document.createElement("div");
        div.textContent = text;
        div.classList.add(...styles);
        elem.append(div);
        return div;
    }
}
