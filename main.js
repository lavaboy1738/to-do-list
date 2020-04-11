const inputText = document.querySelector(".inputText")
const list = document.querySelector(".list")

inputText.addEventListener("keypress", getInput)

function getInput(e){
    if(e.key === "Enter"){
        const text = e.target.value;
        insertList(list, text)
        e.target.value = "";
    }
}

function insertList(target, text){
    const newItem = document.createElement("li");
    const newItemText = document.createElement("p");
    const newCheckBox = document.createElement("input")
    const btn = document.createElement("button")
    newCheckBox.type = "checkbox"
    newCheckBox.classList.add("checkbox");
    btn.innerText = `×`
    btn.addEventListener("click", deleteItem)
    newCheckBox.addEventListener("click", lineThrough)
    newItemText.innerText = text;
    newItem.appendChild(newCheckBox);
    newItem.appendChild(newItemText);
    newItem.appendChild(btn);
    target.insertBefore(newItem, target.childNodes[0]);
}

function lineThrough(){
    this.parentElement.classList.toggle("checked");
}

function deleteItem(){
    this.parentElement.remove();
}