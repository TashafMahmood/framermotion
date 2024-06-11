import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EnterAndExitAnimation = () => {
  const [isVisible, setIsvisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsvisible(true);
    }, 5000);
  }, []);
  return (
    <div>
      <div className="text-3xl font-bold mt-20 text-bold">
        2. Enter And Exit Animation
      </div>
      <div className="bg-white h-40 w-40 mx-auto mt-10 rounded-full">
        <AnimatePresence>
        {!isVisible && (
          <motion.div
            className="bg-black h-32 w-32 rounded-full"
            initial={{ opacity: 0, y:0 }}
            animate={{ opacity: 1, y: 40 }}
            transition={{ duration: 5 }}
            exit={{opacity:0, y:1000}}
          ></motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EnterAndExitAnimation;
