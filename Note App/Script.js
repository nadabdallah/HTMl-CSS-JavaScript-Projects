const createBtn= document.querySelector(".btn");
const textContainer=document.querySelector(".text_container");
createBtn.addEventListener("click", function(){
    let textArea= document.createElement("p");
    let deleteImg= document.createElement("img");
    textArea.className="text_field";
    textArea.setAttribute("contenteditable","true");
    deleteImg.src="img/delete.png";
    textContainer.appendChild(textArea).appendChild(deleteImg);
})
textContainer.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
    }
})
