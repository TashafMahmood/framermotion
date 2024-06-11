import React from "react";
import { motion } from "framer-motion";

const DraggableDiv = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-10">5. Draggable Component</h1>
      <motion.div
        drag
        whileDrag={{
          scale: 1.2,
          backgroundColor: "pink",
        }}
        // dragConstraints={{
        //   left: -100,
        //   right: 100,
        //   top: -100,
        //   bottom: 100,
        // }}
        dragSnapToOrigin={true}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        className="bg-white w-44 h-44 rounded-full mx-auto"
      ></motion.div>
    </div>
  );
};

export default DraggableDiv;
