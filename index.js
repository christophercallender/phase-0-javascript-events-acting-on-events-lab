const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
   const leftNumbers = dodger.style.left.replace('px', '');
   const left = parseInt(leftNumbers, 10);
   if (left > 0) {
      dodger.style.left = `${left - 1}px`;
   }
}
function moveDodgerRight() {
   const leftNumbers = dodger.style.left.replace('px', '');
   const left = parseInt(leftNumbers, 10);
   if (left < 360) {
      dodger.style.left = `${left + 1}px`;
   }
}
function moveDodgerUp() {
   const downNumbers = dodger.style.bottom.replace('px', '');
   const bottom = parseInt(downNumbers, 10);
   if (bottom < 380) {
      dodger.style.bottom = `${bottom + 1}px`;
   }
}
function moveDodgerDown() {
   const downNumbers = dodger.style.bottom.replace('px', '');
   const bottom = parseInt(downNumbers, 10);
   if (bottom > 0) {
      dodger.style.bottom = `${bottom - 1}px`;
   }
}

document.addEventListener('keydown', function (event) {
   if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
   }
   if (event.key === 'ArrowRight') {
      moveDodgerRight();
   }
   if (event.key === 'ArrowUp') {
      moveDodgerUp();
   }
   if (event.key === 'ArrowDown') {
      moveDodgerDown();
   }
});
