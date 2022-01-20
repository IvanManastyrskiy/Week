let week = [
    "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"
];
let myDate = new Date().getDay();
i = 0;
while (i < 7) {
    if (i == 0||i==6) {
        document.write((week[i] + "<br>").italics());

    }
    else if (myDate==i) {
        document.write((week[i] + "<br>").bold());

    }
    else {document.write(week[i] + "<br>");
}


    i++;
};


