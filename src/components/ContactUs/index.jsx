import React from 'react';
import Navbar from '../Navbar';
import contactUs from '../../Assets/images/contactUs.jpg';
import './index.css';

function ContactUs() {
    return (
        <>
            <Navbar />
            <div className="get-in-touch">
                <div className="wrapper"> 
                    <h2>Get in Touch</h2>
                    <form>
                        <label>
                            <input type="text" name="name" placeholder="Name" required/>
                        </label>
                        <label>
                            <input type="email" name="email" placeholder="Email" required/>
                        </label>
                        <label>
                            <input type="tel" name="phone" placeholder="Phone" required/>
                        </label>
                        <label>
                            <textarea name="message" placeholder="Message"/>
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="image">
                    <img src={contactUs} alt="contactUs" />
                </div>
            </div>
        </>
    );
}

export default ContactUs;
