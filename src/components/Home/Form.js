import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm('service_7l5gu0y', 'template_ujdh5vn', form.current, 'Si6528MIIl2h1S8rd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div id='contact'>
            <h1 className='text-center text-5xl mt-12'>Contact Me</h1>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto p-12 my-12">

                <form ref={form} onSubmit={sendEmail}>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" class="input input-bordered" name='name' />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" name='email' />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Message</span>
                        </label>
                        <textarea type="text" placeholder="message" class="input input-bordered" name='message' />
                    </div>

                    <div class="form-control mt-6">
                        <input type='submit' class="btn btn-primary" value='Send Me' />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Form;