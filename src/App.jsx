import React, { useState, useEffect } from "react";
import Carousel from "./components/Carrousel/Carrousel.jsx";
import "./App.css";

function App() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://picsum.photos/v2/list?limit=10")
            .then((res) => res.json())
            .then((data) => setImages(data));
    }, []);

    return (
        <div className="app-container">
            <h1>Image Carousel</h1>
            {images.length > 0 && <Carousel images={images} />}
        </div>
    );
}

export default App;
