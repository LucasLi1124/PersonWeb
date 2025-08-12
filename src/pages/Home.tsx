import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  // Personal statement content
  const personalStatement = "李林峰个人简历。";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
      {/* Personal statement with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-2xl text-center mb-16"
      >
        <p className="text-[clamp(1.2rem,5vw,2rem)] text-gray-100 leading-relaxed font-light">
          {personalStatement}
        </p>
      </motion.div>
      
      {/* Enter resume button with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => navigate("/resume")}
          className="flex flex-col items-center justify-center text-gray-100 hover:text-white transition-colors"
        >
          <span className="text-lg mb-2 font-medium">进入简历</span>
          <motion.i
            className="fa-solid fa-chevron-down"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </button>
      </motion.div>
    </div>
  );
};

export default Home;