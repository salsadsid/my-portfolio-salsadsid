import React from 'react';
import img from '../../assets/img/electronwarehousemanagement.jpg'
import img2 from '../../assets/img/electronwarehousemanagement2.jpg'
import img3 from '../../assets/img/electronwarehousemanagement3.jpg'

const ProjectDetail2 = () => {

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
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail2;