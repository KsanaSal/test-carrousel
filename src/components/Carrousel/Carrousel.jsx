import React, { useState } from "react";

const Carrousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedUrls, setSelectedUrls] = useState([]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const toggleSelect = (url) => {
        setSelectedUrls((prev) =>
            prev.includes(url) ? prev.filter((u) => u !== url) : [...prev, url]
        );
    };

    return (
        <div className="carousel-wrapper">
            <div className="carousel-controls">
                <button onClick={prevSlide} className="btn-nav">
                    Prev
                </button>

                <div className="carousel-viewport">
                    <div
                        className="carousel-track"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {images.map((img) => (
                            <div
                                key={img.id}
                                className={`carousel-item ${
                                    selectedUrls.includes(img.download_url)
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => toggleSelect(img.download_url)}
                            >
                                <img
                                    src={`https://picsum.photos/id/${img.id}/600/400`}
                                    alt={img.author}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={nextSlide} className="btn-nav">
                    Next
                </button>
            </div>

            <div className="selected-list">
                <h3>Selected Images:</h3>
                <ul>
                    {selectedUrls.map((url, index) => (
                        <li key={index} className="fade-in">
                            {url}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Carrousel;
