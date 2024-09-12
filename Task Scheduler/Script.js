const taskName= document.getElementById("text_id");
const taskPriority = document.getElementById("priority_id");
const deadlineDate= document.getElementById("deadline");
const addBtn= document.querySelector(".btn");
const taskList= document.getElementById("task_list_id");

addBtn.addEventListener("click", function(){
    const task= taskName.value;
    const priority= taskPriority.value;
    const deadline= deadlineDate.value;
    if(task.trim===""||deadline===""){
        alert("Please select an upcoming date for the deadline.");
        return;
    }
    if(new Date(deadline) < new Date()){
        alert("Please select an upcoming date for the deadline.");
        return;
    }
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerHTML=`<p>${task}</p>
    <p>Priority: ${priority}</p>
    </p>Deadline: ${deadline} </p>
    <button class="mark-done"> Mark Done </button>
    `
    taskList.appendChild(taskItem);
    taskName.value="";
    taskPriority.value="Top";
    deadlineDate.value="";
    taskItem.addEventListener("click", (event)=>{
        if(event.target.classList.contains("mark-done")){
            const taskItem= event.target.parentElement;
            taskItem.style.background= "#f2f2f2";
            event.target.disabled= true;
        }
    })
    
})