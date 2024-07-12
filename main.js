import { codesArr } from "./codes.js";

function screenCode () {
  const toSort = codesArr.sort((a, b) => {
    if(a.name > b.name) {
      return 1
    }else {
      return -1
    }
  })

  toSort.map((c) => {
    const asideCodeContainer = document.querySelector('.aside__code-container');
    const div = document.createElement("div");
    div.classList.add("aside__code-names");
    div.innerText = c.name;

    asideCodeContainer.append(div);
    
    div.addEventListener("click", ()=> {
      document.querySelector(".code-container").innerHTML = c.codeName;
    })
  })
}

screenCode();

const navBtn = document.querySelector(".nav__btn");

navBtn.addEventListener("click", () => {
  document.querySelector(".aside").classList.toggle("aside--show");
})