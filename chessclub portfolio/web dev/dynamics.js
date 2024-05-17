document.addEventListener('DOMContentLoaded', (event) => {
  const pieces = document.querySelectorAll('img[draggable="true"]');
  pieces.forEach(piece => {
      piece.addEventListener('dragstart', dragStart);
  });

  const squares = document.querySelectorAll('.white, .black');
  squares.forEach(square => {
      square.addEventListener('dragover', dragOver);
      square.addEventListener('drop', drop);
  });
});

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const id = event.dataTransfer.getData('text');
  const piece = document.getElementById(id);
  event.target.appendChild(piece);
}
