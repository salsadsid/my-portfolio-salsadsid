import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img/motorbikefragments.jpg'
import img2 from '../../assets/img/electronwarehousemanagement.jpg'
import img3 from '../../assets/img/salaccounting.jpg'
const Projects = () => {
    return (
        <div className='container mx-auto px-4 lg:px-28' id='projects'>
            <h1 className='text-center text-5xl py-12'>My Projects</h1>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='lg:w-96 lg:h-96' src={img} alt="Album" /></figure>
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
                            </ul>
                        </li>
                    </ul>
                    <p><span className='text-xl font-medium'>Technology Used:</span>  HTML, Tailwind CSS, Firebase, React.js, Node.js, MongoDB. </p>
                    <p><span className='text-xl font-medium'>Live Website Link: </span><a href="https://motorbike-fragments-salsadsid.web.app/" target='_blank' className='text-blue-700 btn-link'>Motorbike Fragments</a> </p>
                    <p><span className='text-xl font-medium'>Github Client: </span><a href="https://github.com/salsadsid/motorbike-fragments-client-salsadsid" target='_blank' className='text-blue-700 btn-link'>Motorbike Fragments Client</a> </p>
                    <p><span className='text-xl font-medium'>Github Server: </span><a href="https://github.com/salsadsid/motorbike-fragments-server-salsadsid" target='_blank' className='text-blue-700 btn-link'>Motorbike Fragments Server</a> </p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>

            <div class="divider my-12"></div>


            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='lg:w-96 lg:h-96' src={img2} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="text-2xl font-semibold">Electron Warehouse Management</h2>
                    <p>A Warehouse Management System full-stack website.</p>
                    <ul>
                        <li>
                            <span className='text-xl font-medium'>Overview:</span>
                            <ul>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> Users can deliver a product, add products and delete products.</li>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> Email-password and Google sign-in methods are implemented.</li>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> Some routes are private; only users can access those routes.</li>
                            </ul>
                        </li>
                    </ul>
                    <p><span className='text-xl font-medium'>Technology Used:</span>  HTML, Bootstrap, Firebase, React.js, Node.js, MongoDB. </p>
                    <p><span className='text-xl font-medium'>Live Website Link: </span><a href="https://electron-warehouse-management.web.app/" target='_blank' className='text-blue-700 btn-link'>Electron Warehouse Management</a> </p>
                    <p><span className='text-xl font-medium'>Github Client: </span><a href="https://github.com/salsadsid/electron-warehouse-management-client" target='_blank' className='text-blue-700 btn-link'>Electron Warehouse Management Client</a> </p>
                    <p><span className='text-xl font-medium'>Github Server: </span><a href="https://github.com/salsadsid/electron-warehouse-management-server" target='_blank' className='text-blue-700 btn-link'>Electron Warehouse Management Server</a> </p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            <div class="divider my-12"></div>


            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='lg:w-96 lg:h-96' src={img3} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="text-2xl font-semibold">Sal Accounting</h2>
                    <p>A accounting services provider's website.</p>
                    <ul>
                        <li>
                            <span className='text-xl font-medium'>Overview:</span>
                            <ul>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> Authentication system implemented on this site.</li>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> The checkout page is protected; only users can access this page.</li>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> Blogs and about sections added to this site.</li>
                            </ul>
                        </li>
                    </ul>
                    <p><span className='text-xl font-medium'>Technology Used:</span>  HTML, Bootstrap, React.js, React hooks, Firebase. </p>
                    <p><span className='text-xl font-medium'>Live Website Link: </span><a href="https://sal-accounting.web.app/" target='_blank' className='text-blue-700 btn-link'>Sal Accounting</a> </p>
                    <p><span className='text-xl font-medium'>Github Client: </span><a href="https://github.com/salsadsid/sal-accounting" target='_blank' className='text-blue-700 btn-link'>Sal Accounting Client</a> </p>
                    <div class="card-actions justify-start">
                        <button class="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;