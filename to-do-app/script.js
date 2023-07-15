let inputBox = document.getElementById("inputBox");
let list = document.getElementById("list");

inputBox.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addItem(event.target.value);
    event.target.value = "";
  }
});

let addItem = (inputBox) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${inputBox}<i> </i>`;
  listItem.addEventListener("click", function(){
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", () => { 
    listItem.remove();
  })
  list.appendChild(listItem);
};
