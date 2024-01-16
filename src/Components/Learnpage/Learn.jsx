import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Learn.css';


export default function Learn() {
    const box=[
        {   img:"ImportExport.jpg",
            title:"Import And Export",
            text:"Some quick example text and make up the bulk of the card's content to build on the card title and make up the bulk of the card's content."
        },
        {
            img:"covid.jpg",
            title:"Covid And Evolution",
            text:"Some quick example text and make up the bulk of the card's content to build on the card title and make up the bulk of the card's content.",
        },
        {
            img:"map.jpg",
            title:"USA Latest Updates",
            text:"Some quick example text and make up the bulk of the card's content to build on the card title and make up the bulk of the card's content.",
        },
        {
            img:"India.jpg",
            title:"India Map Infograpics",
            text:"Some quick example text and make up the bulk of the card's content to build on the card title and make up the bulk of the card's content.",
        },
        
        
        
    ]
    function Col({box}){
        return(
            <div className='col-lg-6 learn'>
                <div className="info m-3">
                <Card>
                    <Card.Img variant="top" src={box.img} />
                    <Card.Body>
                        <Card.Title>{box.title}</Card.Title>
                        <Card.Text>{box.text}
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        )
    }
    return (
        <>
        <div className="container p-5 mt-4">
            <div className="row">
                {box.map((box,index)=>{
                    return<Col box={box} key={index}/>
                })}    
            </div>      
        </div> 
        </>
    )
}
