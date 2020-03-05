export function genMonth (year, month) {
       
    const days = [];

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

    let currentDay = getCurrentDay(year, month);
    
    return {days, currentDay};


    function getWeekDay(day) {
        let weekDay = day.getDay();
        if (weekDay === 0) weekDay = 7;
        return weekDay;
    }

    function getCurrentDay(year, month) {
        let today = new Date();
        let currentMonth = today.getMonth();
        let currentYear = today.getFullYear();
        let currentDay = 0;
        
        if ((month === currentMonth) && (year === currentYear)) {
            currentDay = today.getDate();
        }

        return currentDay;
    }
}
