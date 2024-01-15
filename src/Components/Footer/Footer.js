import React from 'react';
import Form from 'react-bootstrap/Form';
import './Footer.css';
import { Button } from 'react-bootstrap';

export default function Footer() {
    return (
        <>
        <div className='foot'>
        <div className='subscribe p-5 text-center'>
            <h2 className='pt-4'>Want to connect with better leads through smart and effective digital marketing?</h2>
            <p>Subscribe and hook with one the best digital marketting experts of our team.</p>
            <Form.Group className="my-2 mx-5" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Button className='px-5 my-1'> Get Started</Button>
        </div>
        <footer className='pt-5 pb-3 d-flex row'>
            <img src="map.png" alt="map" className='col-lg-6 map'></img>
            <ul className='list-unstyled px-5 col-lg-6 py-3'>
                <li className='pb-3'>
                <h5>EMAIL :</h5>
                <p>contactinfo@gamil.com</p>
                </li>
                <li className='pb-3'>
                <h5>CALL :</h5>
                <p>+91 5485 5214 21</p>
                </li>
                <li className='pb-3'>
                <h5>SOCIAL :</h5>
                <i class="fa-brands fa-facebook fs-2 me-3"></i>
                <i class="fa-brands fa-twitter fs-2 me-3"></i>
                <i class="fa-brands fa-instagram fs-2 me-3"></i>
                </li>
                <li>
                <p>Elevate Your Experience, Empower Your Journey Unleashing Possibilities Beyond Boundaries!
                Stepping into the Future, One Click at a Time Where Innovation Meets Excellence! Elevate Your 
                Experience, Empower Your Journey Unleashing Possibilities Beyond Boundaries!
                </p>
                </li>
            </ul>
        </footer>

        </div>
        </>
    )
}
