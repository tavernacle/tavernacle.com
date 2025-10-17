"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ImageModal from "./ImageModal";

interface VenueImageProps {
  venueSlug: string;
  alt: string;
  className?: string;
  maxImages?: number;
  layoutVariant?: 'A' | 'B' | 'C' | 'D';
}

export default function VenueImage({
  venueSlug,
  alt,
  className = "",
  maxImages = 20, // Allow up to 20 images by default
  layoutVariant = 'A',
}: VenueImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [availableImages, setAvailableImages] = useState<string[]>([]);
  const [imageCount, setImageCount] = useState(0);

  // Detect available images
  useEffect(() => {
    const detectImages = async () => {
      const images: string[] = [];
      
      // Try to load images starting from 1.jpg until we find a gap
      for (let i = 1; i <= maxImages; i++) {
        const imagePath = `/venues/${venueSlug}/${i}.jpg`;
        try {
          // Try to fetch the image to see if it exists
          const response = await fetch(imagePath, { method: 'HEAD' });
          if (response.ok) {
            images.push(imagePath);
          } else {
            // If we hit a missing image, stop looking for more
            break;
          }
        } catch {
          // If fetch fails, stop looking for more images
          break;
        }
      }
      
      setAvailableImages(images);
      setImageCount(images.length);
    };

    detectImages();
  }, [venueSlug, maxImages]);

  // Generate alt texts
  const alts = availableImages.map(
    (_, i) => `${alt} - Image ${i + 1}`
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Don't render until we know how many images we have
  if (imageCount === 0) {
    return (
      <div className={`relative ${className}`}>
        {/* Loading state that matches Layout A */}
        {layoutVariant === 'A' && (
          <div className="space-y-2">
            {/* Main large image placeholder */}
            <div className="relative aspect-[3/2] rounded-xl overflow-hidden border border-white/10 bg-black/50 animate-pulse">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/60 text-sm">Loading images...</span>
              </div>
            </div>
            {/* Two thumbnail placeholders */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-black/30 animate-pulse" />
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-black/30 animate-pulse" />
            </div>
          </div>
        )}

        {/* Loading state that matches Layout B */}
        {layoutVariant === 'B' && (
          <div className="space-y-2">
            {/* Top large image placeholder */}
            <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-white/10 bg-black/50 animate-pulse">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/60 text-sm">Loading images...</span>
              </div>
            </div>
            {/* Bottom two square placeholders */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10 bg-black/30 animate-pulse" />
              <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10 bg-black/30 animate-pulse" />
            </div>
          </div>
        )}

        {/* Loading state that matches Layout C */}
        {layoutVariant === 'C' && (
          <div className="grid grid-cols-2 gap-2">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 bg-black/50 animate-pulse">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/60 text-xs">Loading...</span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-black/30 animate-pulse" />
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-black/30 animate-pulse col-span-2" />
          </div>
        )}

        {/* Loading state that matches Layout D */}
        {layoutVariant === 'D' && (
          <div className="grid grid-cols-3 gap-2 h-[400px]">
            <div className="col-span-2 grid grid-rows-2 gap-2">
              <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/50 animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/60 text-xs">Loading...</span>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/30 animate-pulse" />
            </div>
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/30 animate-pulse" />
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className={`relative ${className}`}>
        {/* Layout A: Classic 3-image layout */}
        {layoutVariant === 'A' && (
          <div className="space-y-2">
            {/* Main large image */}
            <div
              className="relative aspect-[3/2] rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
              onClick={() => openModal(0)}
            >
              <Image
                src={availableImages[0]}
                alt={alts[0]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Two thumbnails side by side */}
            {imageCount > 1 && (
              <div className="grid grid-cols-2 gap-2">
                {availableImages.slice(1, 3).map((src, index) => (
                  <div
                    key={index + 1}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
                    onClick={() => openModal(index + 1)}
                  >
                    <Image
                      src={src}
                      alt={alts[index + 1]}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    {index === 1 && imageCount > 3 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          +{imageCount - 3} more
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Layout B: Grid with different proportions */}
        {layoutVariant === 'B' && (
          <div className="space-y-2">
            {/* Top row - one larger image */}
            <div
              className="relative aspect-[5/3] rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
              onClick={() => openModal(0)}
            >
              <Image
                src={availableImages[0]}
                alt={alts[0]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Bottom row - two smaller images side by side */}
            <div className="grid grid-cols-2 gap-2">
              {availableImages[1] && (
                <div
                  className="relative aspect-square rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
                  onClick={() => openModal(1)}
                >
                  <Image
                    src={availableImages[1]}
                    alt={alts[1]}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              )}
              
              {availableImages[2] && (
                <div
                  className="relative aspect-square rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
                  onClick={() => openModal(2)}
                >
                  <Image
                    src={availableImages[2]}
                    alt={alts[2]}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  {imageCount > 3 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        +{imageCount - 3} more
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Layout C: Mixed proportions */}
        {layoutVariant === 'C' && (
          <div className="grid grid-cols-2 gap-2">
            {/* Left side - Two stacked images */}
            <div
              className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
              onClick={() => openModal(0)}
            >
              <Image
                src={availableImages[0]}
                alt={alts[0]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {availableImages[1] && (
              <div
                className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
                onClick={() => openModal(1)}
              >
                <Image
                  src={availableImages[1]}
                  alt={alts[1]}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            )}
            
            {availableImages[2] && (
              <div
                className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group cursor-pointer col-span-2"
                onClick={() => openModal(2)}
              >
                <Image
                  src={availableImages[2]}
                  alt={alts[2]}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                {imageCount > 3 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      +{imageCount - 3} more
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Layout D: Asymmetric grid layout */}
        {layoutVariant === 'D' && (
          <div className="grid grid-cols-3 gap-2 h-[400px]">
            {/* Left column - two images stacked */}
            <div className="col-span-2 grid grid-rows-2 gap-2">
              <div
                className="relative rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
                onClick={() => openModal(0)}
              >
                <Image
                  src={availableImages[0]}
                  alt={alts[0]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {availableImages[1] && (
                <div
                  className="relative rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
                  onClick={() => openModal(1)}
                >
                  <Image
                    src={availableImages[1]}
                    alt={alts[1]}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              )}
            </div>
            
            {/* Right column - tall vertical image (image 3) */}
            {availableImages[2] && (
              <div
                className="relative rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
                onClick={() => openModal(2)}
              >
                <Image
                  src={availableImages[2]}
                  alt={alts[2]}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                {imageCount > 3 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      +{imageCount - 3} more
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <ImageModal
        images={availableImages}
        alts={alts}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialIndex={selectedImageIndex}
      />
    </>
  );
}
