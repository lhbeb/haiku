'use client';

import { useState } from 'react';

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const selectedIndex = images.indexOf(selectedImage);

  return (
    <div className="product-gallery">
      <div className="product-gallery-stage">
        <img src={selectedImage} alt={`${productName}, view ${selectedIndex + 1}`} />
      </div>
      <div className="product-gallery-thumbnails" aria-label={`${productName} image gallery`}>
        {images.map((image, index) => (
          <button
            className={image === selectedImage ? 'is-active' : ''}
            type="button"
            key={image}
            onClick={() => setSelectedImage(image)}
            aria-label={`Show ${productName} image ${index + 1}`}
            aria-pressed={image === selectedImage}
          >
            <img src={image} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
