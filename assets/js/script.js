const myList = document.getElementById("listForm");
const insertItem = document.getElementById("insertItem");
const btn = document.getElementById("btn");
const taskContainer = document.getElementById("task-container");
const divs = [];

btn.addEventListener("click", function (e) {
    e.preventDefault();
    creation();
    popolateContainer();
    myList.reset();
});

function checkInput() {
    if (insertItem.value === "") return false; else return true;
};

function addArray(div) {
    divs.push(div);
}

function creation() {
    if (checkInput()) {
        const elemento = document.createElement("div");
        const paragrafo = document.createElement("p");
        const cestino = document.createElement("span");
        cestino.classList.add("material-symbols-outlined");
        cestino.innerText = "delete_forever";
        paragrafo.innerText = insertItem.value;

        cestino.addEventListener("click", function (e) {
            const divDaEliminare = e.target.closest("div");
            taskContainer.removeChild(divDaEliminare);
            divs.splice(divs.indexOf(divDaEliminare), 1);
        });

        paragrafo.addEventListener("click", function (e) {
            if (e.target.style.textDecoration === "none")
                e.target.style.textDecoration = "line-through";
            else
                e.target.style.textDecoration = "none"
        });

        elemento.appendChild(paragrafo);
        paragrafo.appendChild(cestino);
        addArray(elemento);
    }
};

function popolateContainer() {
    taskContainer.innerHTML = "";
    for (let i = 0; i < divs.length; i++)
        taskContainer.appendChild(divs[i]);
};
