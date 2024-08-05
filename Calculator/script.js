// let input = document.getElementById('inputbox');
// let buttons = document.querySelectorAll('button');
// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if(e.target.innerHTML== '='){
//             string = eval(string);
//             input.value=string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
// })


let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
var x=""; var y="";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
            string="";
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(e.target.innerHTML == '+/-'){
            string = -1*string;
            input.value= string;
        }
        else if(e.target.innerHTML== '1/x'){
            if(string== 0){
                string ="Math Error!"
                input.value=string;
            }
            else{
                string = 1/string;
                input.value= string;
            }
            string="";
        }
        else if(e.target.innerHTML=='x^2'){
            string = Math.pow(string, 2);
            input.value= string;
            string="";
        } 
        else if(e.target.innerHTML=='x^(1/2)'){
            string = Math.sqrt(string);
            input.value= string;
            string="";
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})