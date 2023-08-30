let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log(inp.value);
  console.log("task added");

  let lst = document.createElement("li");
  lst.innerText = inp.value;
  lst.style.color="Purple"

  let lst1 = document.querySelector("ul");
  lst1.appendChild(lst);
  inp.value = "";

  let del = document.createElement("button");
  del.innerText = "delete";
  del.classList.add("button");
  del.style.marginLeft="1rem";
  del.style.backgroundColor=" pink"

  lst.appendChild(del);
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let dlt = event.target.parentElement;
    dlt.remove();
    console.log("deleted");
  }
});

// let btn1 = document.querySelectorAll(".del");
// for (del of btn1) {
//   del.addEventListener("click", function () {
//     console.log("task remove");
//     let deletee= this.parentElement;
//     deletee.remove();
//   });
// }
