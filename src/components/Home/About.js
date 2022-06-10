import React from 'react';
import github from '../../assets/img/github.png'
import linkedin from '../../assets/img/logo-linkedin-logo-icon-png-svg.png'
const About = () => {
    return (
        <div className='my-12' id='about'>
            <h2 className='text-center text-5xl'>About Me</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='lg:p-28 p-8'>
                    <p className='text-justify'>I was born and grew up in Bangladesh. As a typical Bangladeshi boy, I love playing cricket. I love to read and travel.
                        <br />
                        I am a full-stack web developer. I have expertise in HTML, CSS, JavaScript, and ReactJS as a front-end developer. For Back-end technology I have expertise in NodeJS and MongoDB for databases. I never get tired of coding, and building websites. I enjoy solving problems and alternative thinking.
                        <br />
                        Currently, I am pursuing my bachelor's(B.Sc.) degree. Besides my study, I love doing code. I am a tech enthusiast person and new technology adopter.

                    </p>
                </div>
                <div className='lg:p-28 p-8'>
                    <div className='grid grid-cols-2'>
                        <div className='w-36 p-3 border hover:border-4 hover:border-secondary hover:transition-all ease-in-out'> <a href=""><img src={github} alt="" /></a></div>
                        <div className='w-36 border hover:border-4 hover:border-secondary hover:transition-all ease-in-out'> <a href=""><img src={linkedin} alt="" /></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;