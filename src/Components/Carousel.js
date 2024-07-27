import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSliding, setIsSliding] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false); 
    const [resumeTimer, setResumeTimer] = useState(null); 
    const navigate = useNavigate();
    const slides = [
        { image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?cs=srgb&dl=pexels-craigmdennis-205421.jpg&fm=jpg', alt: 'Slide 1' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89nlO_uPxUxVmNvkG81iD6q1OkjEzi0k8ZNpuedN_4D2TOAyeNJiXOyoTPV0WKPaBonY&usqp=CAU', alt: 'Slide 2' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMtnCsEtbPxJhCxGKGbFDubC5xbfdCnpCklspgkV8oPx0LE8DNGFM8L59CL64jeKyz14&usqp=CAU', alt: 'Slide 3' }
    ];

    const intervalRef = useRef(null); 

    useEffect(() => {
        const startSliding = () => {
            intervalRef.current = setInterval(() => {
                setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
            }, 3000);
        };

        if (isSliding) {
            startSliding();
        }

        return () => clearInterval(intervalRef.current);
    }, [isSliding, slides.length]);

    const handleButtonClick = () => {
        alert('Static Button Clicked!');
        setIsButtonDisabled(true);
        setIsSliding(false); 
        clearInterval(intervalRef.current); 

    
        if (resumeTimer) clearTimeout(resumeTimer);
        const timer = setTimeout(() => {
            setIsSliding(true); 
            setIsButtonDisabled(false); 
        }, 10000); 

        setResumeTimer(timer);
    };
    const handleNextPage = () => {
        navigate('/about');
        
    };

    return (
        <div className="carousel-container relative mb-8">
            <div className="carousel relative overflow-hidden">
                <div className="carousel-slides flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="carousel-slide flex-shrink-0 w-full">
                            <img src={slide.image} alt={slide.alt} className="w-full h-[70vh] object-cover rounded-md" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="dots flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`dot w-3 h-3 rounded-full cursor-pointer transition-colors duration-200 ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                    ></span>
                ))}
            </div>
            <div className={"flex justify-center"}>
            <button
                onClick={handleButtonClick}
                disabled={isButtonDisabled}
                className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-2 bg-blue-500 text-white rounded-md z-10 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                Static Button
            </button>
            <button
                onClick={handleNextPage}
                className="fixed bottom-16 left-1/2 transform -translate-x-1/2 p-2 bg-green-500 text-white rounded-md z-10"
            >
                Next Page
            </button>
            </div>
        </div>
    );
}

export default Carousel;
