import React from 'react';
import About from './About';
import Banner from './Banner';
import Form from './Form';
import Projects from './Projects';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Projects></Projects>
            <Form></Form>
            <About></About>
        </>
    );
};

export default Home;