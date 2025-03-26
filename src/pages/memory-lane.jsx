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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="min-h-screen bg-pink-200 flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-3xl font-bold text-pink-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Memory Lane
      </motion.h1>
      <div className="w-full max-w-md">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img src={src} alt={`Memory ${index + 1}`} className="rounded-xl shadow-lg w-full" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
