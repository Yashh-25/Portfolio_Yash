import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="fixed top-20 left-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl z-0"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="fixed bottom-20 right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl z-0"
      />
    </>
  );
}
