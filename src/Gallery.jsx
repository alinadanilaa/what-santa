// Gallery.jsx
import React, { useState } from 'react';

const Gallery = ({ cities }) => {
    const [selectedCity, setSelectedCity] = useState(null);

    const handleCityClick = (city) => {
        setSelectedCity(city);
    };

    const handleCloseButtonClick = () => {
        setSelectedCity(null);
    };

    return (
        <div className="gallery-container flex flex-wrap justify-evenly">
            {cities.map((city) => (
                <div
                    key={city.id}
                    className="gallery-item w-32 h-32 bg-cover m-2 cursor-pointer"
                    onClick={() => handleCityClick(city)}
                    style={{ backgroundImage: `url(${city.image})` }}
                />
            ))}

            {selectedCity && (
                <div
                    className="zoomed-image-container fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80"
                    onClick={handleCloseButtonClick}
                >
                    <div
                        className="zoomed-image max-w-full max-h-full bg-contain bg-no-repeat cursor-pointer"
                        style={{ backgroundImage: `url(${selectedCity.image})` }}
                    />
                    <img

                        src={`${selectedCity.image}`}
                        alt="icon"
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;
