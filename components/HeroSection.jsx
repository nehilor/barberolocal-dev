import { useEffect, useState } from "react";

    const images = [
      "/images/hero1.jpg",
      "/images/hero2.jpg",
      "/images/hero3.jpg",
      "/images/hero4.jpg",
    ];

    export default function HeroSection() {
      const [currentImage, setCurrentImage] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
      }, []);

      return (
        <div className="relative h-[500px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">
                Find the Perfect Barber Near You
              </h1>
              <p className="text-xl mb-8">
                Discover top-rated barbers in your area and book appointments
                with ease
              </p>
            </div>
          </div>
        </div>
      );
    }
