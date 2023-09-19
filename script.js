const inputBox= document.querySelector("#input-box");
const listContainer= document.querySelector("#list-container");
const li=document.querySelector("li");
const span=document.querySelector("span");
 function createTask(task){
    if(inputBox.value==''){
        alert("Enter task first");
    }else{
        const li = document.createElement("li");
       li.innerHTML=task;
        listContainer.appendChild(li);
        const span = document.createElement("span");
       span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
 }
document.querySelector("button").onclick=()=>{createTask(inputBox.value)};
listContainer.onclick=(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    saveData();
    }
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    saveData();
    }
}
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){ 
    listContainer.innerHTML= localStorage.getItem("data");
}
showData();