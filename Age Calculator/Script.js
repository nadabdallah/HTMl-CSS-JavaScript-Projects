const dateOfBirth= document.getElementById("date-of-birth-id");
const currentDate=document.getElementById("current-date-id");
const result=document.getElementById("result-id");
const calcBtn= document.querySelector(".calc-btn");

calcBtn.addEventListener("click", ()=>{
    const dateBirth=dateOfBirth.value;
    const currDate= currentDate.value;
    let date= new Date(dateBirth);
    let curr= new Date(currDate);
    let res= curr-date;
    res= Math.floor(res*(3.171e-11/1));
    result.innerHTML= `Your age is ${res} years`;
})

