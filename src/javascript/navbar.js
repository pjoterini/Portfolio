const navbar = () => {
  const burgerBtnOpen = document.querySelector(".burger-btn-open");
  const burgerBtnClose = document.querySelector(".burger-btn-close");
  const navLinksUl = document.querySelector(".nav-links-ul");

  if (burgerBtnOpen) {
    burgerBtnOpen.addEventListener("click", () => {
      burgerBtnOpen.classList.add("display-none");
      burgerBtnClose.classList.remove("display-none");
      navLinksUl.classList.remove("display-none");
    });

    burgerBtnClose.addEventListener("click", () => {
      burgerBtnClose.classList.add("display-none");
      burgerBtnOpen.classList.remove("display-none");
      navLinksUl.classList.add("display-none");
    });
  }
};

export default navbar;
