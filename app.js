hour = document.getElementById("hour");
minute = document.getElementById("minute");
second = document.getElementById("second");
date = document.querySelector(".date");

monthList = {1: "January", 2:"Fabuary", 3: "March", 4:"April", 5:"May",
6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December"};

dayList = {0:"Monday", 1:"Tuesday", 2:"Wednesday", 3:"Thursday", 4:"Friday", 5:"Saturday", 6:"Sunday"};
const d = new Date();

date.textContent = `${dayList[d.getDay()]} ${monthList[d.getMonth()-1]} ${d.getDate()}`;

window.setInterval(()=>{
    let date= new Date();
    hour.textContent = date.getHours();
    minute.textContent = date.getMinutes();
    second.textContent = date.getSeconds();
    //console.log("time")

}, 100);