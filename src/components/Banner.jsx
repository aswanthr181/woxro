import React, { useState } from 'react'

function Banner() {
    const [isHovered, setIsHovered] = useState(false);
    const banner = "https://s3-alpha-sig.figma.com/img/e623/6bd7/1dd8e61fcac2c9c7af98f1fbbf93d497?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pu7l4SlDSqYvIM7K9B5p6ebQKGskZIPJYviZSPDXj6XH9OWKADItP8nrrlY6wA4fSJ2mJUkYCYW1Za28sRPIu7eyG0gXwJsf8fk6hKe3y21Gj343iEUguPz-gXk33q-l8k4Ot2T0L-~zJAha8hXUiGT~yQhdddE9CcWKnrxWCr78AEf5hOfd-pWRqkwJv25q~MsCMO7ug1ukTe8vhWv1dagPxRqlvZBxh5b~KkknllOdH0TuAT90sfoSt5X4MOVQT5ENZHc5gRE8faxkaNvOzzrY1NkrzC5bxkuiL64vMe6KZ2w4yybhXqErao33x5zgYENLtTcufRYCinl8EJZEaA__"
    return (
       

        <div className='bg-black flex flex-col items-center justify-center text-white max-w-6xl mx-auto p-8'>
            <button
                className={`absolute top-0 right-0 p-3 cursor-pointer transform transition duration-300 ${isHovered ? 'rotate-45' : ''}`}
                onClick={() => console.log('Close button clicked')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <div className="text-center font-roboto text-4xl font-light leading-8 tracking-wide uppercase mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">Epic Games: An American video game and software developer and publisher based in Cary, North Carolina.
                </h2>
            </div>
            <div className="relative w-full mb-8">
                <img
                    src={banner}
                    alt="Epic Games Banner"
                    className="w-full h-auto object-cover rounded-md shadow-lg"
                />
            </div>
            <div className="text-center font-poppins text-base font-normal opacity-80 mb-8">
                Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator-made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
            </div>
            <div>
                <button className="w-80 h-20 bg-white text-black rounded-md hover:bg-gray-300 transition duration-300">
                    Visit Website
                </button>
            </div>
        </div>

    )
}

export default Banner