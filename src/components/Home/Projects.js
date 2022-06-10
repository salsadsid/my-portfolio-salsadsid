import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/img/motorbikefragments.jpg'
import img2 from '../../assets/img/electronwarehousemanagement.jpg'
import img3 from '../../assets/img/salaccounting.jpg'
import useProjects from '../../hooks/useProjects';
const Projects = () => {

    const navigate = useNavigate()
    const handleProject1 = () => {
        navigate('/project1')
    }
    const handleProject2 = () => {
        navigate(`/project2`)
    }
    const handleProject3 = () => {
        navigate(`/project3`)
    }
    return (
        <div className='container mx-auto px-4 lg:px-28' id='projects'>
            <h1 className='text-center text-5xl py-12'>My Projects</h1>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='lg:w-96 lg:h-96' src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="text-2xl font-semibold">Motorbike Fragments</h2>
                    <p>A motorbike parts manufacturer's full-stack website.</p>

                    <div class="card-actions justify-start">
                        <button onClick={() => handleProject1()} class="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>

            <div class="divider my-12"></div>


            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='lg:w-96 lg:h-96' src={img2} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="text-2xl font-semibold">Electron Warehouse Management</h2>
                    <p>A Warehouse Management System full-stack website.</p>

                    <div class="card-actions justify-start">
                        <button onClick={() => handleProject2()} class="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            <div class="divider my-12"></div>


            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='lg:w-96 lg:h-96' src={img3} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="text-2xl font-semibold">Sal Accounting</h2>
                    <p>A accounting services provider's website.</p>

                    <div class="card-actions justify-start">
                        <button onClick={() => handleProject3()} class="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;