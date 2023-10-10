import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

function ContactUS() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xes6hqq', 'template_gvdoo0l', form.current, 'PSd64IbrKYApWCbBN42if')
        .then((result) => {
            console.log(result.text);
        })
        .catch((error) => {
            console.log(error.text);
        });
    };

    return (
        <section className='Form-container'>
            <form ref={form} onSubmit={sendEmail} className='Form-card'>
            <label>Nombre</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Sugerencia</label>
            <textarea name="message" />
            <br/>
            <div className='form-send'>
            <button type="submit" value="Send">Send</button>
            </div>
            </form>
        </section>
        );
    }

    export default ContactUS;
