import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [currentIndex, images]);
    return (_jsxs("div", { children: [_jsx("img", { src: images[currentIndex], alt: "slide" }), _jsx("div", { style: { display: "flex", justifyContent: "center", backgroundColor: "#6D87F5", overflow: "hidden" }, children: images.map((_, i) => (_jsx("div", { style: {
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        backgroundColor: currentIndex === i ? "white" : "#6D87F5",
                        margin: "0 5px",
                        cursor: "pointer",
                    }, onClick: () => setCurrentIndex(i) }, i))) })] }));
};
export default ImageSlider;
