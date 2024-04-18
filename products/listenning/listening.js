const list = document.querySelectorAll(".header__nav-ul-li");
const content = document.querySelectorAll(".listItems1");

list.forEach((item, index) => {
  item.addEventListener("click", function () {
    list.forEach((item) => {
      item.classList.remove("active");
    });

    content.forEach((item) => {
      item.classList.remove("active");
    });
    content[index].classList.add("active");
    item.classList.add("active");
  });
});

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
  let count = Math.ceil(listItem.length / 10);
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
//phân trang part1

let thisPage2 = 1;
let limit2 = 10;
let listItem2 = document.querySelectorAll(".listItems2 .testListening2");

function loadItem2() {
  let beginGet2 = limit2 * (thisPage2 - 1);
  let endGet2 = limit2 * thisPage2 - 1;
  listItem2.forEach((item2, key2) => {
    if (key2 >= beginGet2 && key2 <= endGet2) {
      item2.style.display = "block";
    } else {
      item2.style.display = "none";
    }
  });
  listPage2();
}
loadItem2();
function listPage2() {
  let count = Math.ceil(listItem2.length / 10);
  document.querySelector(".arrowDistanari1").innerHTML = "";
  for (i = 1; i <= count; i++) {
    let newPage2 = document.createElement("arrow1");
    newPage2.innerText = i;
    if (i == thisPage2) {
      newPage2.classList.add("active1");
    }
    newPage2.setAttribute("onclick", "changePage2(" + i + ")");
    document.querySelector(".arrowDistanari1").appendChild(newPage2);
  }
}
function changePage2(i) {
  thisPage2 = i;
  loadItem2();
}

// phân trang part2

let thisPage3 = 1;
let limit3 = 10;
let listItem3 = document.querySelectorAll(".listItems3 .testListening3");

function loadItem3() {
  let beginGet3 = limit3 * (thisPage3 - 1);
  let endGet3 = limit3 * thisPage3 - 1;
  listItem3.forEach((item3, key3) => {
    if (key3 >= beginGet3 && key3 <= endGet3) {
      item3.style.display = "block";
    } else {
      item3.style.display = "none";
    }
  });
  listPage3();
}
loadItem3();
function listPage3() {
  let count = Math.ceil(listItem3.length / 10);
  document.querySelector(".arrowDistanari2").innerHTML = "";
  for (i = 1; i <= count; i++) {
    let newPage3 = document.createElement("arrow2");
    newPage3.innerText = i;
    if (i == thisPage3) {
      newPage3.classList.add("active");
    }
    newPage3.setAttribute("onclick", "changePage3(" + i + ")");
    document.querySelector(".arrowDistanari2").appendChild(newPage3);
  }
}
function changePage3(i) {
  thisPage3 = i;
  loadItem3();
}

//phân trang part3

let thisPage4 = 1;
let limit4 = 10;
let listItem4 = document.querySelectorAll(".listItems4 .testListening4");

function loadItem4() {
  let beginGet4 = limit4 * (thisPage4 - 1);
  let endGet4 = limit4 * thisPage4 - 1;
  listItem4.forEach((item4, key4) => {
    if (key4 >= beginGet4 && key4 <= endGet4) {
      item4.style.display = "block";
    } else {
      item4.style.display = "none";
    }
  });
  listPage4();
}
loadItem4();
function listPage4() {
  let count = Math.ceil(listItem4.length / 10);
  document.querySelector(".arrowDistanari3").innerHTML = "";
  for (i = 1; i <= count; i++) {
    let newPage4 = document.createElement("arrow3");
    newPage4.innerText = i;
    if (i == thisPage4) {
      newPage4.classList.add("active");
    }
    newPage4.setAttribute("onclick", "changePage4(" + i + ")");
    document.querySelector(".arrowDistanari3").appendChild(newPage4);
  }
}
function changePage4(i) {
  thisPage4 = i;
  loadItem4();
}

// phân trang part4
