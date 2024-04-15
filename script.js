const colorChangeButton = document.getElementById('colorChangeButton');
const container = document.getElementById('container');

colorChangeButton.addEventListener('click', () => {
  const randomColor = generateRandomColor();
  container.style.backgroundColor = randomColor;
});

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256); // Random red value between 0 and 255
  const g = Math.floor(Math.random() * 256); // Random green value between 0 and 255
  const b = Math.floor(Math.random() * 256); // Random blue value between 0 and 255
  return `rgb(${r}, ${g}, ${b})`;
}
