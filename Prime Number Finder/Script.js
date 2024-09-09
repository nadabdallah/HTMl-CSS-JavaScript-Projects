function checkPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2; i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
document.getElementById("submit_id").addEventListener("click", function(){
    let num = document.getElementById("input_id").value; 
    let res= checkPrime(num);
    const result =document.querySelector(".result_text");
    if(res===true){
        result.innerHTML= `${num} is a prime number`
    }
    else{
        result.innerHTML= `${num} is not a prime number`
    }
})
document.getElementById("clear_id").addEventListener("click", function(){
    let result=document.querySelector(".result_text");
    document.getElementById("input_id").value="";
    result.innerHTML= "Result";
})
