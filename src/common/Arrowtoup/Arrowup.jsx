import { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Arrowup() {
  const [visible, setVisible] = useState(false);

  
  useEffect(() => {
    const arrowVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", arrowVisibility);
    return () => window.removeEventListener("scroll", arrowVisibility);
  }, []);


  const scrollToTop = () => {
    const duration = 800; 
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      
      const easeInOutCubic = (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const easedProgress = easeInOutCubic(progress);
      const newY = start * (1 - easedProgress);
      window.scrollTo(0, newY);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
        >
          <FaRegArrowAltCircleUp size={40} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Arrowup;
