"use client";
import React from "react";
import ImageItem from "./ImageItem";
import useIsSmallScreen from "../hooks/useIsSmallScreen";

interface Image {
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  // Array of images
  const images = [
    { src: "/images/test-7.jpg", alt: "Test Image 1" },
    { src: "/images/test-2.jpg", alt: "Test Image 2" },
    { src: "/images/test-3.jpg", alt: "Test Image 3" },
    { src: "/images/test-4.jpg", alt: "Test Image 4" },
    { src: "/images/test-5.jpg", alt: "Test Image 5" },
    { src: "/images/test-6.jpg", alt: "Test Image 6" },
    { src: "/images/test-8.jpg", alt: "Test Image 7" },
    { src: "/images/test-1.jpg", alt: "Test Image 8" },
    { src: "/images/test-9.jpg", alt: "Test Image 9" },
    { src: "/images/test-10.jpg", alt: "Test Image 10" },
  ];

  // Check if the screen size is small (for 2 columns on narrow screens)
  const isSmallScreen = useIsSmallScreen();

  // Calculate how many columns to use based on screen size
  const columnsCount = isSmallScreen ? 2 : 4; // 2 columns on small screen, 4 columns on large screen
  const divideIntoColumns = (images: Image[], n: number): Image[][] => {
    const columns: Image[][] = Array.from({ length: n }, () => []);

    images.forEach((image, index) => {
      const columnIndex = index % n; // This ensures an even distribution
      columns[columnIndex].push(image);
    });

    return columns;
  };
  const columns = divideIntoColumns(images, columnsCount);

  return (
    <div className="px-4 py-8 flex flex-wrap  justify-center">
      {columns.map((columnImages, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 w-full mx-4 sm:w-1/3 lg:w-1/5"
        >
          {columnImages.map((image, idx) => (
            <ImageItem key={idx} src={image.src} alt={image.alt} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
