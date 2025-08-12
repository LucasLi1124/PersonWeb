import { motion } from "framer-motion";

const Background = () => {
  // Create star particles for background animation
  const stars = Array(100).fill(0).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.8 + 0.2,
    animate: Math.random() > 0.5,
  }));

  return (
    <div className="fixed inset-0 z-0">
      {/* Starry background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://lf3-static.bytednsdoc.com/obj/eden-cn/0077eh7fd/pngtree-pure-black-starry-minimalist-dreamy-business-background-picture-image_913719.jpg)',
        }}
      />
      
      {/* Semi-transparent black overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      
      {/* Animated stars overlay for extra depth */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map(star => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={star.animate ? {
              opacity: [star.opacity, star.opacity * 1.2, star.opacity],
              scale: [1, 1.2, 1],
            } : {}}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;