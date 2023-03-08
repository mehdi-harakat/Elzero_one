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


window.addEventListener('scroll', function() {
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
})

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

window.addEventListener('scroll', function() {
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
})
