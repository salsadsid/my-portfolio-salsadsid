import React from 'react';

const Banner = () => {
    const openInNewTab = () => {
        window.open('https://www.google.com/search?q=react+onclick+open+new+tab+with+link&rlz=1C1RLNS_enBD881BD881&oq=react+onclick+open&aqs=chrome.5.0i512j69i57j0i512l8.24213j0j4&sourceid=chrome&ie=UTF-8', '_blank', 'noopener,noreferrer');
    }
    return (
        <div class="hero min-h-screen bg-stone-800">
            <div class="hero-content text-center">
                <div >
                    <h1 class="text-white text-4xl font-lg">Hello there</h1>
                    <p class="py-4 text-white text-5xl font-lg">I'm Salman Sadik Siddiquee</p>
                    <p class="pb-5 text-white text-3xl font-lg">Full-Stack Web Developer</p>
                    <button onClick={() => openInNewTab()} class="btn btn-primary font-medium">Download My Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;