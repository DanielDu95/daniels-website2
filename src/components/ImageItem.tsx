import React, { useState } from "react";

interface ImageItemProps {
  src: string;
  alt: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ src, alt }) => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Image Item */}
      <div
        className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
        onClick={openModal}
      >
        <img src={src} alt={alt} className="w-full h-auto object-cover" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="relative bg-transparent rounded-lg p-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal
          >
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageItem;
