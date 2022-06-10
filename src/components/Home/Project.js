import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { id, name, img, des } = project
    const navigate = useNavigate()
    const handleProject = id => {
        navigate(`/project/${id}`)
    }
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl my-12">
            <figure><img className='lg:w-96 lg:h-96' src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="text-2xl font-semibold">{name}</h2>
                <p>{des}</p>
                <div class="card-actions justify-start">
                    <button onClick={() => handleProject(id)} class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;