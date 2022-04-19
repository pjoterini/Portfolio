// STARS

let star = document.querySelector(".star1");
let star2 = document.querySelector(".star2");
let star3 = document.querySelector(".star3");
let star4 = document.querySelector(".star4");
let star5 = document.querySelector(".star5");
let star6 = document.querySelector(".star6");
let star7 = document.querySelector(".star7");
let star8 = document.querySelector(".star8");
let star9 = document.querySelector(".star9");
let star10 = document.querySelector(".star10");
let star11 = document.querySelector(".star11");
let star12 = document.querySelector(".star12");
let star13 = document.querySelector(".star13");
let star14 = document.querySelector(".star14");
let star15 = document.querySelector(".star15");
let star16 = document.querySelector(".star16");
let star17 = document.querySelector(".star17");
let star18 = document.querySelector(".star18");
let star19 = document.querySelector(".star19");
let star20 = document.querySelector(".star20");
let moon = document.querySelector(".moon");

setInterval(spark, 3000);

function spark() {
  star.classList.toggle("spark");
  star.classList.toggle("no-spark");
}

setInterval(spark2, 4000);

function spark2() {
  star2.classList.toggle("spark");
  star2.classList.toggle("no-spark");
}
setInterval(spark3, 3500);

function spark3() {
  star3.classList.toggle("spark");
  star3.classList.toggle("no-spark");
}
setInterval(spark4, 3800);

function spark4() {
  star4.classList.toggle("spark");
  star4.classList.toggle("no-spark");
}
setInterval(spark5, 3200);

function spark5() {
  star5.classList.toggle("spark");
  star5.classList.toggle("no-spark");
}
setInterval(spark6, 4100);

function spark6() {
  star6.classList.toggle("spark");
  star6.classList.toggle("no-spark");
}
setInterval(spark7, 2800);

function spark7() {
  star7.classList.toggle("spark");
  star7.classList.toggle("no-spark");
}
setInterval(spark8, 3300);

function spark8() {
  star8.classList.toggle("spark");
  star8.classList.toggle("no-spark");
}
setInterval(spark9, 3400);

function spark9() {
  star9.classList.toggle("spark");
  star9.classList.toggle("no-spark");
}
setInterval(spark10, 3600);

function spark10() {
  star10.classList.toggle("spark");
  star10.classList.toggle("no-spark");
}
setInterval(spark11, 4100);

function spark11() {
  star11.classList.toggle("spark");
  star11.classList.toggle("no-spark");
}
setInterval(spark12, 2900);

function spark12() {
  star12.classList.toggle("spark");
  star12.classList.toggle("no-spark");
}
setInterval(spark13, 3700);

function spark13() {
  star13.classList.toggle("spark");
  star13.classList.toggle("no-spark");
}
setInterval(spark14, 3800);

function spark14() {
  star14.classList.toggle("spark");
  star14.classList.toggle("no-spark");
}
setInterval(spark15, 3900);

function spark15() {
  star15.classList.toggle("spark");
  star15.classList.toggle("no-spark");
}
setInterval(spark16, 3300);

function spark16() {
  star16.classList.toggle("spark");
  star16.classList.toggle("no-spark");
}
setInterval(spark17, 3350);

function spark17() {
  star17.classList.toggle("spark");
  star17.classList.toggle("no-spark");
}
setInterval(spark18, 4300);

function spark18() {
  star18.classList.toggle("spark");
  star18.classList.toggle("no-spark");
}
setInterval(spark19, 3440);

function spark19() {
  star19.classList.toggle("spark");
  star19.classList.toggle("no-spark");
}
setInterval(spark20, 3550);

function spark20() {
  star20.classList.toggle("spark");
  star20.classList.toggle("no-spark");
}

//  MOON

setInterval(spark21, 5550);

function spark21() {
  moon.classList.toggle("spark-moon");
  moon.classList.toggle("no-spark-moon");
}

//  ARROWS

let arrows = document.querySelector(".arrows");

setInterval(arrowMove, 1200);

function arrowMove() {
  arrows.classList.toggle("arrow-move");
}

// ARCH IMAGES

let archImages = document.querySelector(".arch-images");

let maxRight = -300;
let speedX = 0.4;
let positionX = -315;

archImages.addEventListener("mouseenter", (e) => {
  let pdfBtn = document.querySelector(".check-pdf");
  pdfBtn.classList.add("check-pdf-hover");

  const myInterval = setInterval(() => {
    positionX = positionX + speedX;
    if (positionX > maxRight || positionX < -2370) {
      speedX = speedX * -1;
    }
    archImages.style.left = positionX + "px";

    archImages.addEventListener("mouseleave", (e) => {
      clearInterval(myInterval);
      pdfBtn.classList.remove("check-pdf-hover");
    });
  }, 1000 / 250);
});
