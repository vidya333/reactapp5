import React from 'react'
import { Button } from 'react-bootstrap';
import './Banner.css';

export default function Banner() {
    return (
        <>
            <div className="banner position-relative">
                <video loop autoPlay muted>
                    <source src="1.mp4" type='video/mp4'/>
                </video>
            <div className="content position-absolute top-0 start-50">
                <div className="text-center pt-5 text-light logos">
                    <img  src="logo192.png" alt="logo" width={120}/>
                    <h1>CNC WEB WORLD</h1>
                    <h2>Remove your fresher Tag</h2>
                    <Button  variant='primary me-3 mt-2'>Enroll Now</Button>
                    <Button  variant='primary mt-2'>Know More</Button>
                </div>
            </div>
            </div>
        </>
    )
}
