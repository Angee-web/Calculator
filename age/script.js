
// to get the elements to append the function to 
let userInput= document.getElementById("date");
let result = document.getElementById("result");

// to set maximum date for the input and change the date to an ISO string
userInput.max= new Date().toISOString().split("T")[0];

// function to work on the calculate button
function calculateAge(){
// date of birth
let birthDate = new Date (userInput.value);

let d1= birthDate.getDate();
let m1= birthDate.getMonth() + 1;
let y1= birthDate.getFullYear();

// present date
let today= new Date();

let d2= today.getDate();
let m2= today.getMonth() +1;
let y2= today.getFullYear();

console.log('Birth year: ', d1, m1, y1, 'present: ', d2, m2, y2)

// calculation for new date
let d3, m3, y3;   

// to get new year
y3= y2 - y1;

// to get new month
// if the present month is greater than the birth month then the new month is the present month minus the birth month
if (m2 >= m1){
    m3=m2 - m1;
// else if the birth month is greater than the present month then one year is subtracted, 12 is added to the present month and the birth month is subtracted from it to get the new month i.e counting backwards from the year
}else{
   y3--;
   m3= 12 + m2 - m1;
}

// to get new day
// if the present day is greater than the birth day then the new day is the present day minus the birth day
if(d2>= d1){
    d3= d2 = d1;
// else if the birth day is greater than the present day then one month is subtracted, 
}else{
    m3--;
    d3= getDateInMonth(y1, m1) + d2 - d1;
}

if(m3 < 0){
    m3= 11;
    y3--;
}
result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old`
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}