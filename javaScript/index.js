let myElem = document.getElementById( "valHala" );
let myNav = document.getElementById( "navMenu" );


// myElem.addEventListener("focus", myFocus, true);
// myElem.addEventListener("blur", myBlur, true);

// function myFocus() {
//   document.querySelector(
//     "header .container .main-nav .nav:last-child .container"
//   ).style.cssText = "top: 78px; opacity: 1; pointer-events:painted";
// }

// function myBlur() {
//   document.querySelector(
//     "header .container .main-nav .nav:last-child .container"
//   ).style.cssText = "top: 100px; opacity: 0; pointer-events:none";
// }


myElem.onclick = function () {
  myNav.classList.toggle( 'helloHello' );
}