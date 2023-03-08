let myElem = document.getElementById("valHala");
let myNav = document.getElementById("navMenu");

// ----------------------------------------------------------- Start The Burgler Nav -----------------------------------------------

myElem.addEventListener(
  "click",
  () => {
    myNav.classList.toggle("helloHello");
  },
  true
);

myElem.addEventListener(
  "blur",
  () => {
    setTimeout(function () {
      myNav.classList.remove("helloHello");
    }, 100);
  },
  true
);

// --------------------------------------------------------- End The Burgler Nav ---------------------------------------------------

// --------------------------------------------------------- Start The Scroll Function ---------------------------------------------

let container = document.getElementById("skills");
let one = document.querySelectorAll(".main-list");
let hello = document.querySelectorAll(".newCounter");
let trust = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= container.offsetTop - 300) {
    one.forEach(function (elem) {
      containerAll(elem);
    });

    if (!trust) {
      hello.forEach((el) => {
        helloCounter(el);
      });
      trust = true;
    }
  }
});

function containerAll(test) {
  let targetting = test.parentElement.dataset.couter;
  test.style.width = targetting;
}

function helloCounter(test) {
  let targetting = test.parentElement.dataset.couter;
  let mi = setInterval(() => {
    test.textContent = `${parseInt(test.textContent) + 1}%`;
    if (test.textContent === targetting) {
      clearInterval(mi);
    }
  }, 3000 / targetting);
}

// --------------------------------------------------------- End The Scroll Function ---------------------------------------------

// --------------------------------------------------------- Start The Function For Our Stats Section ---------------------------

let ourStats = document.querySelector(".our-stats");
let elementH = document.querySelectorAll(".our-stats .counting");
let startTow = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= ourStats.offsetTop - 400) {
    if (!startTow) {
      elementH.forEach((elem) => {
        let valueTotal = elem.getAttribute("data-value");
        let setinter = setInterval(() => {
          elem.textContent++;
          if (valueTotal === elem.textContent) {
            clearInterval(setinter);
          }
        }, 1500 / valueTotal);
      });
    }
    startTow = true;
  }
});

// ---------------------------------------------- Start Counter ---------------------------------

let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
const dateStart = new Date("Apr 30, 2023 23:59:59");

const counter = setInterval(() => {
  const dateNow = new Date().getTime();
  let dateDeff = dateStart - dateNow;

  let daysCount = Math.floor(dateDeff / (1000 * 60 * 60 * 24));
  let hoursCount = Math.floor(
    (dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  let minutesCount = Math.floor(
    ((dateDeff % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) / (1000 * 60)
  );

  let secondesCount = Math.floor(
    (((dateDeff % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60)) % (1000 * 60)) /
      1000
  );

  days.innerHTML = daysCount < 10 ? `0${daysCount}` : daysCount;
  hours.innerHTML = hoursCount < 10 ? `0${hoursCount}` : hoursCount;
  minutes.innerHTML = minutesCount < 10 ? `0${minutesCount}` : minutesCount;
  seconds.innerHTML = secondesCount < 10 ? `0${secondesCount}` : secondesCount;

  if (dateDeff < 0) {
    clearInterval(counter);
  }
}, 1000);
