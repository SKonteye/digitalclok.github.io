const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const bgrd = document.getElementById("body");


function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h>12) {
        h = h - 12; 
        ampm = "PM" ;     
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        updateClock()
    }, 1000 )
    if (h==12) {
       bgrd = document.getElementById("body").style.background =url("https://images.unsplash.com/photo-1516569333566-9d463ccffd20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwbmlnaHR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");
        
    }
}
updateClock();