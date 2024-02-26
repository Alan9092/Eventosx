  function clickEvent() {
    alert("¡Has hecho clic en el botón!");
  }

  function doubleClickEvent() {
    alert("¡Has hecho doble clic en el botón!");
  }

  function mouseDownEvent() {
    console.log("Se ha presionado el mouse");
  }

  function mouseUpEvent() {
    console.log("Se ha soltado el mouse");
  }

  function mouseMoveEvent() {
    console.log("Se ha movido el mouse");
  }

  function mouseEnterEvent() {
    console.log("El mouse ha entrado en el área del botón");
  }

  function mouseLeaveEvent() {
    console.log("El mouse ha salido del área del botón");
  }

  function mouseOverEvent() {
    console.log("El mouse está sobre el botón");
  }

  function mouseOutEvent() {
    console.log("El mouse está fuera del botón");
  }

  function scrollWindow(amount) {
    window.scrollBy(0, amount);
  }

  function toggleScrollButtons() {
    var scrollButtons = document.querySelector('.scroll-buttons');
    if (scrollButtons.style.display === 'none') {
      scrollButtons.style.display = 'block';
    } else {
      scrollButtons.style.display = 'none';
    }
}