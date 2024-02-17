import React, { useState } from 'react';

function ImageCarousel({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function onClickOfSection(index) {
        setCurrentImageIndex(index);
    }

    return (
        <div className="product_carousel relative overflow-hidden rounded-3xl">
            <div className="transition-transform duration-500 ease-in-out product_image_container">
                <img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`Product ${currentImageIndex + 1}`}
                    className="product_image"
                />
            </div>
            <div className="slider_btn_container">
                {
                    images.map((_, index) => (
                        <button key={`slider_btn-${index}`} className={`slider_btn  ${index === currentImageIndex ? 'bg-white' : 'bg-slate-400'}`} onClick={() => onClickOfSection(index)}>
                            &nbsp;
                        </button>
                    ))
                }
            </div>
        </div>
    );
}

export default ImageCarousel;
