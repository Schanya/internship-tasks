// Will always receive the date in dd-mm-yyyy format. i.e: 01-02-5
function getGoodOldDay(input) {

    const dateArr = input.split('-').map(el => Number(el));
    let date = new Date(dateArr[2], dateArr[1] - 1, dateArr[0] - 1);

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
};

console.log(getGoodOldDay('5-7-53'));  