import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Component.css';

export default function Component() {

    const data=[
        {
            icon:"fa-brands fa-square-youtube fs-1 pb-4",
            title: "BUSINESS MODEL",
            para:"You can also use this space for other purposes where the information is best presented as mere teasers to other individualized pages."
        },
        {
            icon:"fa-solid fa-chart-simple fs-1 pb-4",
            title: "BUSINESS EXECUTION",
            para:"You can also use this space for other purposes where the information is best presented as mere teasers to other individualized pages."
        },
        {
            icon:"fa-solid fa-lightbulb fs-1 pb-4",
            title: "BUSINESS MONITORING",
            para:"You can also use this space for other purposes where the information is best presented as mere teasers to other individualized pages."
        }
    ]
    const Column=({data})=>{
        return (
            <>
            <Col className='py-5 text-light box m-2'>
                <div className='icon-box'>
                <i className={data.icon}></i>
                <h3 className='pb-2'>{data.title}</h3>
                <p>{data.para}</p>
                </div>
            </Col>
            </>
        )
    }
    return (
       <div className='component pb-4'>
        <Container>
           <Row className='pt-5 text-light'>
            <h1>Our Services</h1>
            <p className='col-lg-6'>Share your services or product offerings here. Present them as simple headers that
            can lead out to their pages where you can expound on them further. You can also
            use this space for other purposes where the information is best presented as mere
            teasers to other individualized pages.</p></Row>
            <Row className='text-light'>
            {
                data.map((data,index)=>{
                    return <Column data={data} key={index} />
                })
            }
           </Row>
       </Container>
       </div>
    )
}
