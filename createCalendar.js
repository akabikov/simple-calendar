export function createCalendar(elem, year, month) {
    const firstDay = new Date(year, month, 1);

    
    let table = document.createElement("table");
    elem.append(table);
    let tr = addRow();
    
    let i = 1;
    let firstWeekDay = getWeekDay(firstDay);
    while(i < firstWeekDay) {
        addCell(tr);
        i++;
    }

    let currDay = firstDay;
    
    
    while(currDay.getMonth() === month) {
        addCell(tr, currDay.getDate());
        if (currDay.getDay() === 0) {
            tr = addRow();
        }
        currDay.setDate(currDay.getDate() + 1);
    }

    // let formatter = Intl.DateTimeFormat("ru", {weekday: "short"});



    function addRow() {
        let tr = document.createElement("tr");
        table.append(tr);
        return tr;
    }

    function addCell(tr, text = "") {
        let td = document.createElement("td");
        td.textContent = text;
        tr.append(td);
    }

    function getWeekDay(day) {
        let weekDay = day.getDay();
        if (weekDay === 0) weekDay = 7;
        return weekDay;
    }
}

