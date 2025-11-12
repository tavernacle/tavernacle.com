"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";
import { getVenueImages, type VenueSlug } from "../lib/venue-images";

interface VenueImageProps {
  venueSlug: VenueSlug;
  alt: string;
  className?: string;
  layoutVariant?: "A" | "B" | "C" | "D";
  priority?: boolean;
}

export default function VenueImage({
  venueSlug,
  alt,
  className = "",
  layoutVariant = "A",
  priority = false,
}: VenueImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Get images statically - no async fetching needed!
  const availableImages = getVenueImages(venueSlug);
  const imageCount = availableImages.length;

  // Generate alt texts
  const alts = availableImages.map((_, i) => `${alt} - Image ${i + 1}`);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Early return if no images (shouldn't happen with static config)
  if (imageCount === 0) {
    return null;
  }

  return (
    <>
      <div className={`relative ${className}`}>
        {/* Layout A: Classic 3-image layout */}
        {layoutVariant === "A" && (
          <div className="space-y-2">
            {/* Main large image */}
            <div
              className="relative aspect-3/2 rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
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
                    className="relative aspect-4/3 rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
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
        {layoutVariant === "B" && (
          <div className="space-y-2">
            {/* Top row - one larger image */}
            <div
              className="relative aspect-5/3 rounded-xl overflow-hidden border border-white/10 group cursor-pointer"
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
        {layoutVariant === "C" && (
          <div className="grid grid-cols-2 gap-2">
            {/* Left side - Two stacked images */}
            <div
              className="relative aspect-3/4 rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
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
                className="relative aspect-4/3 rounded-lg overflow-hidden border border-white/10 group cursor-pointer"
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
                className="relative aspect-4/3 rounded-lg overflow-hidden border border-white/10 group cursor-pointer col-span-2"
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
        {layoutVariant === "D" && (
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
