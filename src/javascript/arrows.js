const arrows = () => {
  const arrows = document.querySelector(".arrows");
  if (arrows) {
    setInterval(arrowMove, 1200);

    function arrowMove() {
      arrows.classList.toggle("arrow-move");
    }
  }
};

export default arrows;
