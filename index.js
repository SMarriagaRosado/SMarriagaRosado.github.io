function abrirCarta() {
  var carta = document.querySelector('.carta');
  carta.classList.toggle('abierta');

  var musica = document.getElementById('musica');
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}

