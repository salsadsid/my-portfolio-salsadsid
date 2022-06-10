import React from 'react';
import img from '../../assets/img/motorbikefragments.jpg'
import img2 from '../../assets/img/motorbikefragments2.jpg'
import img3 from '../../assets/img/motorbikefragments3.jpg'

const ProjectDetail = () => {

    return (
        <div>
            <h2 className='text-center text-5xl my-16'>Projects Details</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mx-12'>

                <div class="card w-96 bg-primary text-primary-content shadow-xl">
                    <div class="card-body p-0 border">
                        <img src={img} alt="" className='lg:w-96 lg:h-56' />
                    </div>
                </div>
                <div class="card w-96 bg-accent text-primary-content shadow-xl">
                    <div class="card-body p-0 border">
                        <img src={img2} alt="" className='lg:w-96 lg:h-56' />
                    </div>
                </div>
                <div class="card w-96 bg-primary text-primary-content shadow-xl">
                    <div class="card-body p-0 border">
                        <img src={img3} alt="" className='lg:w-96 lg:h-56' />
                    </div>
                </div>
            </div>
            <div class="card mx-w-full bg-primary text-primary-content m-12">
                <div class="card-body">
                    <h2 class="text-2xl font-semibold">Motorbike Fragments</h2>
                    <p>A motorbike parts manufacturer's full-stack website.</p>
                    <ul>
                        <li>
                            <span className='text-xl font-medium'>Overview:</span>
                            <ul>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> Users can delete their order, add reviews and pay for their orders.</li>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> Admin can manage products, make admin and manage orders.</li>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> Stripe payment system and jwt authorization activates on this site.</li>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> User can purchase any bike parts</li>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> User can login and sign up to this site using email and password or Google login.</li>
                            </ul>
                        </li>
                    </ul>
                    <p><span className='text-xl font-medium'>Technology Used:</span>  HTML, Tailwind CSS, Firebase, React.js, Node.js, MongoDB. </p>
                    <p><span className='text-xl font-medium'>Live Website Link: </span><a href="https://motorbike-fragments-salsadsid.web.app/" target='_blank' className='text-blue-700 btn-link'>Motorbike Fragments</a> </p>
                    <p><span className='text-xl font-medium'>Github Client: </span><a href="https://github.com/salsadsid/motorbike-fragments-client-salsadsid" target='_blank' className='text-blue-700 btn-link'>Motorbike Fragments Client</a> </p>
                    <p><span className='text-xl font-medium'>Github Server: </span><a href="https://github.com/salsadsid/motorbike-fragments-server-salsadsid" target='_blank' className='text-blue-700 btn-link'>Motorbike Fragments Server</a> </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;