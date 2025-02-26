// To do List Script 
// © Shah Nabeel

let taskInput = document.querySelector("#taskInput");
let addButton = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

function addTask(){
    const taskText = taskInput.value.trim()
    const errorMsg = document.querySelector(".errorMsg");
    if(taskText === ''){
        errorMsg.style.opacity = "1";
        errorMsg.textContent = "Enter Task!"
        return;
    }else{
        errorMsg.style.opacity = "0";
        errorMsg.textContent = "";
    }

    // Create new List
    // ul > li
    const li = document.createElement("li");
    li.setAttribute("id", "task");
    // li > div
    const div = document.createElement("div");
    // div > checkbox
    const checkBX = document.createElement("input");
    checkBX.type = "checkbox";
    checkBX.setAttribute("id", "checkBox");
    // div > span
    const tasks = document.createElement("span");
    // li > remove Button
    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "fa-solid fa-xmark");
    removeBtn.setAttribute("id", "removeBtn");
    removeBtn.type = "button";

    // Append Li in Ul
    taskList.appendChild(li);
    // Append Div in Li
    li.appendChild(div);
    // Append div > checkbox
    div.appendChild(checkBX);
    // Append div > span
    div.appendChild(tasks);
    tasks.textContent = taskText;
    // Append li > button
    li.appendChild(removeBtn);

    // Clear input
    taskInput.value = "";

    // Delet specific task

    let rmvButton = document.querySelector(".fa-xmark");
    rmvButton = removeBtn;

    rmvButton.addEventListener("click", ()=>{
        li.remove();
    })
    

    // CheckBox value check

    let checkbox = document.querySelector("#checkBox");
    checkbox = checkBX;
    checkbox.addEventListener("click", ()=>{
        if(checkbox.checked){
            tasks.style.textDecoration = "line-through"
            tasks.style.color = "#ff3333"
        }else{
            tasks.style.textDecoration = "none"
            let themeContainer = document.querySelector(".lightContainer");
            if(themeContainer.classList.contains("darkContainer")){
                tasks.style.color = "#fff"
            }else{
                tasks.style.color = "#000"
            }
        }
    })
}

// Enter Key Event
taskInput.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        addTask()
    }
})


// CLear All Tasks
function clearAll(){
    taskList.innerHTML = "";
}


// Dark Mode
// Dark Mode
// Dark Mode
// Dark Mode
// Dark Mode

let modeBtn = document.querySelector("#theme-toggle");

let themeToggle = document.querySelector(".lightContainer");

modeBtn.addEventListener("click", ()=>{ 
    themeToggle.classList.toggle("darkContainer");
})