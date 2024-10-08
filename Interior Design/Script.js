const counters = document.querySelectorAll('.counter');
const speed = 100;

counters.forEach((counter)=>{
    const updateCount=()=>{
        const target=+counter.getAttribute('data-target');
        const count=+counter.innerText;
        const inc = target/speed;
        console.log(count);
        if(count<target){
            counter.innerText=count+inc;
            setTimeout(updateCount,1);
        }
        else{
            count.innerText=target;
        }
    }
    updateCount();
});
