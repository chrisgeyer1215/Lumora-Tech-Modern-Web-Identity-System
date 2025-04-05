"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

interface DummyImage {
  id: string;
  title: string;
  description: string;
  color: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
}

// Generate an array of dummy image placeholders
const generateDummyImages = (count: number): DummyImage[] => {
  const colorPalettes = [
    ["from-blue-500 to-cyan-400", "blue-cyan"],
    ["from-purple-500 to-pink-500", "purple-pink"],
    ["from-green-500 to-teal-400", "green-teal"],
    ["from-yellow-400 to-orange-500", "yellow-orange"],
    ["from-red-500 to-pink-600", "red-pink"],
    ["from-indigo-500 to-blue-600", "indigo-blue"],
    ["from-cyan-500 to-blue-500", "cyan-blue"],
    ["from-purple-600 to-indigo-600", "purple-indigo"],
  ];

  const aspectRatios: ("square" | "portrait" | "landscape" | "wide")[] = [
    "square", "portrait", "landscape", "wide"
  ];

  return Array.from({ length: count }, (_, index) => {
    const colorIndex = index % colorPalettes.length;
    const aspectRatioIndex = index % aspectRatios.length;
    
    return {
      id: `img-${index + 1}`,
      title: `Project ${index + 1}`,
      description: `This is a sample project description for image ${index + 1}. It showcases our work in design and development.`,
      color: colorPalettes[colorIndex][0],
      aspectRatio: aspectRatios[aspectRatioIndex],
    };
  });
};

interface ImageGalleryProps {
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
  imageCount?: number;
  type?: 'grid' | 'masonry';
  withLightbox?: boolean;
}

export default function ImageGallery({
  className,
  columns = 3,
  gap = 'medium',
  imageCount = 12,
  type = 'masonry',
  withLightbox = true,
}: ImageGalleryProps) {
  const images = generateDummyImages(imageCount);
  const [selectedImage, setSelectedImage] = useState<DummyImage | null>(null);

  const handleImageClick = (image: DummyImage) => {
    if (withLightbox) {
      setSelectedImage(image);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const gapClass = {
    small: 'gap-2',
    medium: 'gap-4',
    large: 'gap-6',
  };

  const aspectRatioClass = (ratio: "square" | "portrait" | "landscape" | "wide" = "square") => {
    switch (ratio) {
      case "portrait":
        return "aspect-[3/4]";
      case "landscape":
        return "aspect-[4/3]";
      case "wide":
        return "aspect-[16/9]";
      case "square":
      default:
        return "aspect-square";
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {type === 'grid' ? (
        <div 
          className={cn(
            "grid", 
            {
              'grid-cols-1': columns === 1,
              'grid-cols-1 md:grid-cols-2': columns === 2,
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': columns === 3, 
              'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4': columns === 4
            },
            gapClass[gap]
          )}
        >
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => handleImageClick(image)}
              className={cn(
                "cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]",
                image.color
              )}
            >
              <div className={cn(aspectRatioClass(image.aspectRatio), "p-4 flex flex-col justify-end")}>
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div 
          className={cn(
            "columns-1 md:columns-2 lg:columns-3", 
            {
              'columns-1': columns === 1,
              'columns-1 md:columns-2': columns === 2,
              'columns-1 md:columns-2 lg:columns-3': columns === 3,
              'columns-1 sm:columns-2 md:columns-3 lg:columns-4': columns === 4
            },
            gapClass[gap]
          )}
        >
          {images.map((image) => (
            <div 
              key={image.id}
              className={cn(
                "break-inside-avoid mb-4 cursor-pointer overflow-hidden rounded-lg bg-gradient-to-br transition-transform duration-300 hover:shadow-lg",
                image.color
              )}
              onClick={() => handleImageClick(image)}
            >
              <div className={cn(aspectRatioClass(image.aspectRatio), "p-4 flex flex-col justify-end")}>
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {withLightbox && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-4xl w-full h-full max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br flex items-center justify-center"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                className={cn("p-6", selectedImage.color)}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h2 className="text-3xl font-bold mb-4">{selectedImage.title}</h2>
                    <p className="text-xl">{selectedImage.description}</p>
                  </div>
                </div>
              </div>

              <button
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeLightbox}
              >
                <FiX size={24} />
              </button>

              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <button
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
                    const prevIndex = (currentIndex - 1 + images.length) % images.length;
                    setSelectedImage(images[prevIndex]);
                  }}
                >
                  <FiChevronLeft size={24} />
                </button>
              </div>

              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <button
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
                    const nextIndex = (currentIndex + 1) % images.length;
                    setSelectedImage(images[nextIndex]);
                  }}
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}