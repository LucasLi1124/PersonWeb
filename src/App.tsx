import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import Resume from "@/pages/Resume";
import Background from "@/components/Background";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();

  return (
    <>
      {/* Starry background that persists across page transitions */}
      <Background />
      
      {/* Animate page transitions */}
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} /> {/* Landing page */}
          <Route path="/resume" element={<Resume />} /> {/* Detailed resume page */}
        </Routes>
      </AnimatePresence>
    </>
  );
}
