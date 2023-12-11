// Gallery.jsx
import React, { useState } from 'react';

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
            <div className='flex justify-center text-white items-center text-xl font-bold m-4'>
                What Santa Are You Today?
            </div>
            <div className="gallery-container flex flex-wrap justify-center">
                {santas.map((santa) => (
                    <div
                        key={santa.id}
                        className="gallery-item bg-cover cursor-pointer"
                        onClick={() => handleSantaClick(santa)}
                    >
                        <img
                            className="gallery-item h-20 bg-cover cursor-pointer"
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
