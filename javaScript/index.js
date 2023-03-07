let myElem = document.getElementById("valHala");
let myNav = document.getElementById("navMenu");

// ----------------------------------------------------------- Start The Burgler Nav -----------------------------------------------

myElem.addEventListener("click", () => {
    myNav.classList.toggle( "helloHello" );
},true);

myElem.addEventListener("blur", () => {
  setTimeout( function () {
    myNav.classList.remove( "helloHello" );
  }, 100)
},true);

// --------------------------------------------------------- End The Burgler Nav -------------------------


let container = document.getElementById("skills");
let one = document.querySelectorAll(".main-list");
let hello = document.querySelectorAll(".newCounter");
let trust = false;

window.onscroll = function () {
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
};

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
