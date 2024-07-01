const h1Title = document.getElementById("title");
h1Title.innerHTML = "Book My Class";
document.getElementById("title").style.backgroundColor = "aqua";
console.log(h1Title);

const h3Element = document.createElement("h3");
h3Element.innerHTML = "Nikhil Kulkarni";

const headingSection = document.querySelector(".heading-section");
headingSection.appendChild(h3Element);

// Change Theme

let isDarkMode = false;
// Function for enabling dark mode
function darkenBackground() {
  const bodyBgRef = document.querySelector("body");
  //   bodyBgRef.style.backgroundColor = "black";
  bodyBgRef.classList.add("black");
  bodyBgRef.classList.remove("white");
  isDarkMode = true;
}

function lightenBackground() {
  const bodyBgRef = document.querySelector("body");
  //   bodyBgRef.style.backgroundColor = "white";
  bodyBgRef.classList.add("white");
  bodyBgRef.classList.remove("black");
  isDarkMode = false;
}
//Show alert message upon clicking Dark mode
const showalertMsg = document.querySelector(".darkModeButton");
console.log(showalertMsg);

showalertMsg.addEventListener("click", function () {
  //   alert("Hi, You clicked Dark Mode button");
  if (!isDarkMode) {
    darkenBackground();
  } else {
    lightenBackground();
  }
});

function increaseFontSize() {
  const titleRef = document.getElementById("title");
  titleRef.style.fontSize = "100px";
}

const textConfigRef = document.querySelector(".textConfig");
textConfigRef.addEventListener("click", function () {
  increaseFontSize();
});

// Change font background color on hover
function backTitleColor() {
  const titleRef = document.getElementById("title");
  titleRef.style.backgroundColor = "green";
}

function resetTitleColor() {
  const titleRef = document.getElementById("title");
  titleRef.style.backgroundColor = "transparent";
}

document.querySelector("#title").addEventListener("mouseover", function () {
  backTitleColor();
});

document.querySelector("#title").addEventListener("mouseout", function () {
  resetTitleColor();
});

// Add eventlistner to each element in the List
const moviesRef = document.querySelectorAll(".movies");

moviesRef.forEach(function (itemref) {
  itemref.addEventListener("click", function (event) {
    alert(event.currentTarget.querySelector(".price").innerText);
  });
});
