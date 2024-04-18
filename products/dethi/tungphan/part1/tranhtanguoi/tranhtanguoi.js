// const list = document.querySelectorAll(".header__nav-ul-li");
// const content = document.querySelectorAll(".listItems1");
// const content2 = document.getElementById("content2");

// list.forEach((item, index) => {
//   item.addEventListener("click", function () {
//     list.forEach((item) => {
//       item.classList.remove("active");
//     });

//     content.forEach((item) => {
//       item.classList.remove("active");
//     });
//     content[index].classList.add("active");
//     item.classList.add("active");
//   });
// });

// function removeContent() {
//   content2.style.display = "none";
// }
// active

let thisPage = 1;
let limit = 10;
let listItem = document.querySelectorAll(".listItems .testListening");

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;
  listItem.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage();
}
loadItem();
function listPage() {
  let count = Math.ceil(listItem.length / 25);
  document.querySelector(".arrowDistanari").innerHTML = "";

  for (i = 1; i <= count; i++) {
    let newPage = document.createElement("arrow");
    newPage.innerText = i;
    if (i == thisPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changePage(" + i + ")");
    document.querySelector(".arrowDistanari").appendChild(newPage);
  }
}
function changePage(i) {
  thisPage = i;
  loadItem();
}

//phân trang
