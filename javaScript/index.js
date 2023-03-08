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
  }, 1000 / parseInt(targetting));
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
        }, 1000 / parseInt(valueTotal) );
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

// ---------------------------------------------- End Counter ---------------------------------


// ---------------------------------------------- Start Top Videos ----------------------------

let divKeys = document.querySelectorAll(".top-video .video-info");
let divValue = document.querySelectorAll(".top-video .image-content img");

// this for on the reload page
window.addEventListener("load", (e) => {
  gamesEventsOnload(e);
});

// this event for click elements
window.addEventListener("click", (e) => {
  gamesEvents(e);
});

// this is the main function to click
function gamesEvents(test) {
  if (test.target.hasAttribute("data-key")) {
    let attr = test.target.getAttribute("data-key");

    //trager fucntion reloading
    gamesEventsOnload(attr);
  }
}

// and this function for reloading and also we trager it in the main function for click
function gamesEventsOnload(value) {
  // this loop for the photos
  divValue.forEach((elem) => {
    elem.classList.remove("imgVisible");
    if (elem.getAttribute("data-value") === value) {
      elem.classList.add("imgVisible");
    } else {
      if (divValue[0].getAttribute("class") === "imgVisible") {
        divValue[0].classList.remove("imgVisible");
      } else {
        divValue[0].classList.add("imgVisible");
      }
    }
  });

  // this loop for the elements
  divKeys.forEach((ele) => {
    ele.classList.remove("hoverThing");
    ele.firstElementChild.classList.remove("paraEvent");
    if (ele.getAttribute("data-key") === value) {
      ele.classList.add("hoverThing");
      ele.firstElementChild.classList.add("paraEvent");
    } else {
      if (divKeys[0].getAttribute("class") !== "video-info hoverThing") {
        divKeys[0].classList.add("hoverThing");
        divKeys[0].firstElementChild.classList.add("paraEvent");
      } else {
        divKeys[0].classList.remove("hoverThing");
        divKeys[0].firstElementChild.classList.remove("paraEvent");
      }
    }
  });
}
