import React from 'react';
import img from '../../assets/img/salaccounting.jpg'
import img2 from '../../assets/img/salaccounting2.jpg'
import img3 from '../../assets/img/salaccounting3.jpg'

const ProjectDetail3 = () => {

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
                    <h2 class="text-2xl font-semibold">Sal Accounting</h2>
                    <p>A accounting services provider's website.</p>
                    <ul>
                        <li>
                            <span className='text-xl font-medium'>Overview:</span>
                            <ul>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> Authentication system implemented on this site.</li>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> The checkout page is protected; only users can access this page.</li>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> Blogs and about sections added to this site.</li>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> Using Bootstrap for design</li>
                                <li><i class="fas fa-cookie-bite text-secondary"> </i> Footer and capabilities section added in this site.</li>
                            </ul>
                        </li>
                    </ul>
                    <p><span className='text-xl font-medium'>Technology Used:</span>  HTML, Bootstrap, React.js, React hooks, Firebase. </p>
                    <p><span className='text-xl font-medium'>Live Website Link: </span><a href="https://sal-accounting.web.app/" target='_blank' className='text-blue-700 btn-link'>Sal Accounting</a> </p>
                    <p><span className='text-xl font-medium'>Github Client: </span><a href="https://github.com/salsadsid/sal-accounting" target='_blank' className='text-blue-700 btn-link'>Sal Accounting Client</a> </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail3;