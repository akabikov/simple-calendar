export function createCalendar(elem, year, month) {
    const firstDay = new Date(year, month, 1);

        
    let i = 1;
    let firstWeekDay = getWeekDay(firstDay);
    while(i < firstWeekDay) {
        addCell(elem);
        i++;
    }

    let currDay = firstDay;
    
    
    while(currDay.getMonth() === month) {
        addCell(elem, currDay.getDate());
        currDay.setDate(currDay.getDate() + 1);
    }

    // let formatter = Intl.DateTimeFormat("ru", {weekday: "short"});
    // console.log(formatter.format(1));
    

    function addCell(elem, text = "") {
        let div = document.createElement("div");
        div.textContent = text;
        div.classList.add("calendar__day");
        elem.append(div);
    }

    function getWeekDay(day) {
        let weekDay = day.getDay();
        if (weekDay === 0) weekDay = 7;
        return weekDay;
    }
}

