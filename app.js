// DOM - Document Object Model

// HTML teg nomi bilan ulanish
const title_with_HTML_tag = document.getElementsByTagName("h2");
// console.log(title_with_HTML_tag);

// class yordamida ulanish
const title_with_class = document.getElementsByClassName("title");
// console.log(title_with_class);

// ID yordamida ulanish
const title_with_ID = document.getElementById("myTitle");
// console.log(title_with_ID);

// querySelector - querySelectorAll

const titles = document.querySelectorAll(".title");
console.log(titles);

// JS da HTML elementlarini yasash
// createElement = HTML elementlarini yasab beradi
const text = document.createElement("p");
text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
// textContent = HTML elementlarining ichiga text qo'shadi

const card = document.querySelector(".card");
card.appendChild(text);
// appendChild - HTML elementlarining ichiga boshqa bir HTML elementini joylaydi

// Style yozish
text.style.color = "red";
text.style.fontFamily = "system-ui";
text.style.textAlign = "center";
