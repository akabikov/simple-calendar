import {genMonthArray} from "./genMonthArray.js";

export function createCalendar(elem, year, month) {
    
    const daysOfTheWeek = ["пн","вт","ср","чт","пт","сб","вс"];
    daysOfTheWeek.forEach(day => {
        addCell(elem, day);
    })

    const monthArr = genMonthArray(year, month-1);
    monthArr.forEach(day => {
        addCell(elem, day);
    })
    
    // let formatter = Intl.DateTimeFormat("ru", {weekday: "short"});
    // console.log(formatter.format(1));
    

    function addCell(elem, text = "") {
        let div = document.createElement("div");
        div.textContent = text;
        div.classList.add("calendar__day");
        elem.append(div);
    }

}

