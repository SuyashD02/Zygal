import React from 'react';
import { useNavigate } from 'react-router-dom';

function Avatar() {
    const navigate = useNavigate();
    const avatars = [
        { id: 1, src: 'https://randomuser.me/api/portraits/men/1.jpg', alt: 'Avatar 1' },
        { id: 2, src: 'https://randomuser.me/api/portraits/women/1.jpg', alt: 'Avatar 2' },
        { id: 3, src: 'https://randomuser.me/api/portraits/men/2.jpg', alt: 'Avatar 3' },
        { id: 4, src: 'https://randomuser.me/api/portraits/women/2.jpg', alt: 'Avatar 4' },
        { id: 5, src: 'https://randomuser.me/api/portraits/men/3.jpg', alt: 'Avatar 5' },
        { id: 6, src: 'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww', alt: 'Avatar 6' },
        { id: 7, src: 'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww', alt: 'Avatar 7' },
    ];

    const images = [
        { id: 1, src: 'https://www.zygal.io/wp-content/uploads/2023/12/NavINfo-Zygal@4x-1.png', alt: 'Image 1' },
        { id: 2, src: 'https://media.licdn.com/dms/image/C4D33AQHKKcAJOOUviQ/productpage-image_1128_635/0/1654767490477/zygal_edge_image?e=2147483647&v=beta&t=q6bjs0EB0u1bGnEDEjnFpHR6cvJ587Kmx__6Rx4lMZo', alt: 'Image 2' },
        { id: 3, src: 'https://www.zygal.io/wp-content/uploads/2024/02/Mask-group-5.webp', alt: 'Image 3' }
    ];
    const handleNextPage = () => {
        navigate('/info');
        
    };
    return (
        <div className="scroll-section space-y-4">
            <div className="avatars flex overflow-x-auto space-x-4 no-scrollbar py-2">
                {avatars.map(avatar => (
                    <div key={avatar.id} className="avatar w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-gray-300 flex-shrink-0">
                        <img src={avatar.src} alt={avatar.alt} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            <div className="images h-auto overflow-y-scroll no-scrollbar py-2">
                {images.map(image => (
                    <div key={image.id} className="image mb-4">
                        <img src={image.src} alt={image.alt} className="w-full h-auto rounded-md" />
                    </div>
                ))}
            </div>
            <button
                onClick={handleNextPage}
                className="fixed bottom-16 left-1/2 transform -translate-x-1/2 p-2 bg-green-500 text-white rounded-md z-10"
            >
                Previous Page
            </button>
        </div>
    );
}

export default Avatar;
