import React from 'react';

const Banner = () => {
    const openInNewTab = () => {
        window.open('https://drive.google.com/file/d/15T_HOO7ibuplrJnnFGeiYSMnw1NLopBi/view?usp=sharing', '_blank', 'noopener,noreferrer');
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