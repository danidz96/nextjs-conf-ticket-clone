const ticket = document.getElementById('ticket');
const { x, y, width, height } = ticket.getBoundingClientRect();
const centerPoint = { x: x + width / 2, y: y + height / 2 };

window.addEventListener('mousemove', (evt) => {
  const degreeX = (evt.clientY - centerPoint.y) * 0.01;
  const degreeY = (evt.clientX - centerPoint.x) * -0.01;

  ticket.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
});
