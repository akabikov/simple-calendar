export function genMonthArray (year, month) {
       
    const days = [];

    month++;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    let firstWeekDay = getWeekDay(firstDay);
    for (let i = 1; i < firstWeekDay; i++) {
        days.push("");
    }
    
    for (let i = 1; i <= lastDay.getDate(); i++) {
        days.push(i);
    }

    let lastWeekDay = getWeekDay(lastDay);
    for (let i = lastWeekDay + 1; i <= 7; i++) {
        days.push("");
    }
    
    return days;

    function getWeekDay(day) {
        let weekDay = day.getDay();
        if (weekDay === 0) weekDay = 7;
        return weekDay;
    }
}
