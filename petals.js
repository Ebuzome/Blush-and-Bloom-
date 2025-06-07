document.addEventListener('DOMContentLoaded', function() {
  const petalsContainer = document.getElementById('floating-petals');
  const petalCount = 15;
  
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = Math.random() * 100 + 'vh';
    petal.style.transform = `rotate(${Math.random() * 360}deg)`;
    petal.style.animationDuration = 5 + Math.random() * 10 + 's';
    petalsContainer.appendChild(petal);
  }
});
