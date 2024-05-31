import React, { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  return (
    <div>
      <img src={images[currentIndex]} alt="slide" />
      <div style={{ display: "flex", justifyContent: "center" , backgroundColor:"#6D87F5",overflow:"hidden"}}>
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              backgroundColor: currentIndex === i ? "white" : "#6D87F5",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;