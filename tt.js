const form = document.querySelector("form");
let taskinput = document.getElementById("taskinput");
let tasklist = document.getElementById("tasklist");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let task = taskinput.value.trim();

    if (task.length > 0) {
        let li = document.createElement("li");
        

        li.textContent = task;




        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Del";
        deleteBtn.style.marginLeft = "100px"; 

        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";
        deleteBtn.style.border = "none";
        deleteBtn.style.borderRadius = "3px";
        deleteBtn.style.cursor = "pointer";


        deleteBtn.addEventListener("click", function () {
            tasklist.removeChild(li);
        });
        li.appendChild(deleteBtn);
        tasklist.appendChild(li);
        taskinput.value = "";
    } 
        
    else {
        alert("Please enter your text");
        }
});






