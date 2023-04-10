const colorTheme = () => {
  const moonIcon = document.querySelector(".moon-icon");
  const sunIcon = document.querySelector(".sun-icon");
  const logoImg = document.querySelector(".logo-img");
  const moon = document.querySelector(".moon");
  const root = document.querySelector(":root");

  if (moonIcon) {
    moonIcon.addEventListener("click", () => {
      moonIcon.classList.add("active");
      sunIcon.classList.remove("active");
      logoImg.classList.remove("logo-img-light");
      moon.classList.remove("no-spark-moon-light-theme");
      moon.classList.remove("spark-moon-light-theme");
      root.style.setProperty("--primary-color", "#211337");
      root.style.setProperty("--secondary-color", "#ffd698");
      root.style.setProperty("--accent-color", "#44cead");
      root.style.setProperty("--white", "#fff");
      root.style.setProperty("--black", "rgb(0, 0, 0)");
    });

    sunIcon.addEventListener("click", () => {
      moonIcon.classList.remove("active");
      sunIcon.classList.add("active");
      logoImg.classList.add("logo-img-light");
      moon.classList.add("no-spark-moon-light-theme");
      moon.classList.add("spark-moon-light-theme");
      root.style.setProperty("--primary-color", "#fff");
      root.style.setProperty("--secondary-color", "#44cead");
      root.style.setProperty("--accent-color", "#ffd698");
      root.style.setProperty("--white", "#211337");
      root.style.setProperty("--black", "#211337");
    });
  }
};

export default colorTheme;
