import React from 'react';
import img from '../../assets/img/salman-lg.png'
const Banner = () => {
    const openInNewTab = () => {
        window.open('https://drive.google.com/file/d/15T_HOO7ibuplrJnnFGeiYSMnw1NLopBi/view?usp=sharing', '_blank', 'noopener,noreferrer');
    }
    return (
        <div class="hero min-h-screen bg-stone-800">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img} alt="" className='w-80' />
                <div>
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