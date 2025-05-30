// Mouse tracking utility for beautiful cursor-following background effects
let isTracking = false;
let animationFrame = null;

// Smooth interpolation for natural movement
const lerp = (start, end, factor) => start + (end - start) * factor;

// Initialize mouse tracking
export const initMouseTracker = () => {
  if (isTracking) return;
  
  isTracking = true;
  let mouseX = 50;
  let mouseY = 50;
  let targetX = 50;
  let targetY = 50;
  
  // Track mouse movement
  const handleMouseMove = (e) => {
    targetX = (e.clientX / window.innerWidth) * 100;
    targetY = (e.clientY / window.innerHeight) * 100;
  };
  
  // Smooth animation loop
  const animate = () => {
    // Smooth interpolation for natural movement
    mouseX = lerp(mouseX, targetX, 0.08);
    mouseY = lerp(mouseY, targetY, 0.08);
    
    // Update CSS variables
    document.body.style.setProperty('--mouse-x', `${mouseX}%`);
    document.body.style.setProperty('--mouse-y', `${mouseY}%`);
    
    animationFrame = requestAnimationFrame(animate);
  };
  
  // Start tracking
  document.addEventListener('mousemove', handleMouseMove, { passive: true });
  animate();
  
  // Handle mouse leave - return to center smoothly
  const handleMouseLeave = () => {
    targetX = 50;
    targetY = 50;
  };
  
  document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
  
  // Return cleanup function
  return () => {
    isTracking = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseleave', handleMouseLeave);
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  };
};

// Cleanup function
export const cleanupMouseTracker = () => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }
  isTracking = false;
};
