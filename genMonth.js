export function genMonth (year, month) {
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const firstWeekDay = getWeekDay(firstDay);
    const lastWeekDay = getWeekDay(lastDay);

    const lastDayDate = lastDay.getDate();
    
    const arrSize = (firstWeekDay - 1) + lastDayDate + (7 - lastWeekDay);
    
    const days = new Array(arrSize).fill("");
    
    for (let i = 1; i <= lastDayDate; i++) {
        days[i + firstWeekDay - 2] = i;
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
