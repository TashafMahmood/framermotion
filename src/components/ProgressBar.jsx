import React from "react";
import { motion } from "framer-motion";

const ProgressBar = () => {
  return (
    <>
      <h1 className="text-3xl font-bold m-4">Progress Bar</h1>
      <div className="w-full h-4 bg-white rounded-full">
        <motion.div
          animate={{
            width: "50%",
          }}
          transition={{
            duration: 10,
          }}
          className="h-full w-0 bg-green-500 rounded-full"
        ></motion.div>
      </div>
    </>
  );
};

export default ProgressBar;
