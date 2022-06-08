import React from 'react';
import img from '../../assets/img/motorbikefragments.jpg'
const Projects = () => {
    return (
        <div className='container mx-auto px-4 lg:px-28'>
            <h1 className='text-center text-5xl py-12'>My Projects</h1>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='lg:w-96 lg:h-96' src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Motorbike Fragments</h2>
                    <p>A motorbike parts manufacturer's full-stack website.</p>
                    <ul>
                        <li>
                            Overview:
                            <ul>
                                <li>Users can delete their order, add reviews and pay for their orders.</li>
                                <li>Admin can manage products, make admin and manage orders.</li>
                                <li>stripe payment system (mock) and jwt authorization activates on this site.</li>
                            </ul>
                        </li>
                    </ul>
                    <div class="card-actions justify-start">
                        <button class="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;