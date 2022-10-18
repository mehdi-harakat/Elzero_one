let myElem = document.getElementById( "valHala" );
let myNav = document.getElementById( "navMenu" );

// -----------------------------------------------------------FIRST WAY-----------------------------------------------

myElem.addEventListener( "focus", function () {
  myNav.classList.toggle( 'helloHello' );
}, true );

myElem.addEventListener( "blur", function () {
  myNav.classList.remove( 'helloHello' );
}, true );


// -----------------------------------------------------------SECOND WAY-----------------------------------------------

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

// -----------------------------------------------------------THIRD WAY-------------------------------------------------

// myElem.addEventListener("focus", myFocus, true);
// myElem.addEventListener("blur", myBlur, true);

// function myFocus() {
//   myNav.classList.toggle( 'helloHello' );
// }

// function myBlur() {
//   myNav.classList.remove( 'helloHello' );
// }

// -----------------------------------------------------------FOURTH WAY------------------------------------------------

// myElem.onclick = function () {
//   myNav.classList.toggle( 'helloHello' );
// }

// myElem.addEventListener( "blur", myBlur, true );

// function myBlur() {
//   myNav.classList.remove( 'helloHello' );
//   console.log( 'Hello' );
// };