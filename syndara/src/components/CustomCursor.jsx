import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorSize = 12;
  
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };
  
  const smoothOptions = { damping: 25, stiffness: 150, mass: 0.8 };
  
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };
  
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };
  
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[10001]">
      <motion.div 
        style={{
          left: smoothMouse.x, 
          top: smoothMouse.y,
        }} 
        className="fixed w-4 h-4 rounded-full pointer-events-none"
      >
        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg shadow-orange-500/50" 
          style={{
            filter: 'blur(0.5px)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default CustomCursor;