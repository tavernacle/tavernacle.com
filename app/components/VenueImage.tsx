"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface VenueImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function VenueImage({
  src,
  alt,
  className = "",
}: VenueImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`relative group cursor-pointer ${className}`}
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="text-white text-sm font-semibold">
              Click to view full image
            </span>
          </div>
        </div>
      </div>

      <ImageModal
        src={src}
        alt={alt}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
