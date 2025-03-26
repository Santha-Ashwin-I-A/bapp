import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  "/images/memory1.jpg",
  "/images/memory2.jpg",
  "/images/memory3.jpg",
  "/images/memory4.jpg",
  "/images/memory5.jpg",
];

export default function MemoryLane() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-pink-400 text-center p-6 overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_10%,transparent_50%)] pointer-events-none animate-pulse"></div>

      {/* Title Animation */}
      <motion.h1
        className="text-4xl font-extrabold text-white drop-shadow-lg mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        ✨ Memory Lane ✨
      </motion.h1>

      {/* Slideshow Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-white rounded-xl shadow-xl p-4"
      >
        <Slider {...settings}>
          {images.map((src, index) => (
            <motion.div key={index} className="flex justify-center">
              <motion.img
                src={src}
                alt={`Memory ${index + 1}`}
                className="rounded-xl shadow-lg w-full"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      {/* Text Overlay */}
      <motion.p
        className="text-lg text-white mt-6 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        “Every picture tells a story, every moment is a memory.” 📸💖
      </motion.p>
    </div>
  );
}
