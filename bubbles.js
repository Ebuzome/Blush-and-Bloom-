document.addEventListener('DOMContentLoaded', function() {
  const bubblesContainer = document.getElementById('bubbles');
  const bubbleCount = 20;
  
  for (let i = 0; i < bubbleCount; i++) {
    createBubble();
  }

  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Random size (5px to 30px)
    const size = 5 + Math.random() * 25;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Random position
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.bottom = `-${size}px`;
    
    // Random animation delay (0s to 5s)
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    
    bubblesContainer.appendChild(bubble);
  }
});
