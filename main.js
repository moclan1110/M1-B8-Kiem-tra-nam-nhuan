let year = parseInt(prompt('Enter a year'));
let isLeapyear = false;
if(year % 4 == 0) {
    if(year % 100 ==0) {
        if(year % 400 ==0) {
            isLeapyear = true;
        }
    } else {
        isLeapyear = true;
    }
}
if(isLeapyear) {
    alert(year + ' is leap year');
} else {
    alert(year + ' is NOT leap year');
}

