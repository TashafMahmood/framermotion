import React from "react";
import { motion } from "framer-motion";

const GestureButton = () => {
  return (
    <div>
      <h1 className="mt-20 text-3xl font-bold mb-20">4. Gestures</h1>
      <motion.button
        className="bg-white text-xl text-blue-950 px-6 py-3 rounded-full"
        whileHover={{ scale: 1.2, backgroundColor: "#928929", color: "#fff" }}
        whileTap={{ scale: 0.7 }}
      >
        Click here
      </motion.button>
    </div>
  );
};

export default GestureButton;
