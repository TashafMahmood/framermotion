import { motion } from "framer-motion";

export default function Keyframes() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mt-20">3. Key Frames</h1>
      <motion.div
        className="w-32 h-32 bg-white mx-auto mt-20"
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          backgroundColor: [null, "#FF5733", "#FFC300", "#FF33EC", "#fffff"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
    </div>
  );
}
