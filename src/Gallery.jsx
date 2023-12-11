// Gallery.jsx
import React, { useState } from 'react';
import './index.css'

const Gallery = ({ santas }) => {
    const [selectedSanta, setSelectedSanta] = useState(null);

    const handleSantaClick = (santa) => {
        setSelectedSanta(santa);
    };

    const handleCloseButtonClick = () => {
        setSelectedSanta(null);
    };

    return (
        <>
            <div className='santa-title flex justify-center text-white items-center 
            text-xl font-bold m-4 mt-9'>
                Santa Multiverse
            </div>
            <div className='santa-title flex  text-white items-center 
            text-xs font-light ml-3 '
                style={{ transform: 'rotate(-10deg) translateY(80%)', transformOrigin: 'bottom left' }}>
                (Tap to zoom)
            </div>
            <div className="gallery-container flex flex-wrap justify-center">
                {santas.map((santa) => (
                    <div
                        key={santa.id}
                        className="gallery-item bg-cover cursor-pointer"
                        onClick={() => handleSantaClick(santa)}
                    >
                        <img
                            className="gallery-item h-24 bg-cover cursor-pointer"
                            src={`${santa.image}`}
                            alt="icon"
                        />
                    </div>
                ))}

                {selectedSanta && (
                    <div
                        className="zoomed-image-container fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80"
                        onClick={handleCloseButtonClick}
                    >
                        <div
                            className="zoomed-image max-w-full max-h-full bg-contain bg-no-repeat cursor-pointer"
                            style={{ backgroundImage: `url(${selectedSanta.image})` }}
                        />
                        <img
                            className="min-w-full"
                            src={`${selectedSanta.image}`}
                            alt="icon"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Gallery;
