import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

const HoverAnimatedChart = () => {
  const controls = useAnimation();
  const [followers, setFollowers] = useState(0);
  const maxFollowers = 1000; // Set your desired max followers for the animation

  const handleMouseEnter = () => {
    // Trigger the animation only on hover
    controls.start({
      d: "M0,150 L50,145 L100,135 L150,115 L200,85 L250,45 L300,0 L300,300 L0,300 Z",
      transition: { duration: 2, ease: "easeInOut" }
    });

    let currentFollowers = 0;
    const interval = setInterval(() => {
      if (currentFollowers < maxFollowers) {
        currentFollowers += 10; // Increment step
        setFollowers(currentFollowers);
      } else {
        clearInterval(interval);
      }
    }, 20); // Update interval for follower count animation
  };

  const handleMouseLeave = () => {
    // Optional: define actions on mouse leave, e.g., revert to initial state
  };

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.path
          initial={{ d: "M0,150 L300,150 L300,300 L0,300 Z" }} // Start as a straight line
          animate={controls}
          fill="lightblue" // Chart fill color
        />
      </motion.svg>
      <div className="mt-5 text-2xl font-semibold">{followers} Followers</div>
    </div>
  );
};

export default HoverAnimatedChart;