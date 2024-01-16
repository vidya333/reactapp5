import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function References() {
const box=[
    {
        title:"Our Recent Tech Inventions",
        text:"Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "
    },
    {
        title:"Our Bussiness Partners",
        text:"Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "
    },
    {
        title:"Meet Our Core Team",
        text:"Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "
    },
    {
        title:"Sponserships",
        text:"Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "+
              "To create a production build, use npm run build. "+
              "Note that the development build is not optimized."+
              "To create a production build, use npm run build. "
    }
        
]
function Col({box}){
    return(
        <Card className='m-3 p-2'>
        <Card.Body>
            <Card.Title>{box.title}</Card.Title>
            <Card.Text>{box.text}
            </Card.Text>
            <Button variant="primary">Visit Site</Button>
        </Card.Body>
        </Card>
    )
}
return(
    <>
    <div className="container p-5 mt-3">
        <div className="row">
            <div className="col-lg-12">
                {box.map((box,index)=>{
                    return<Col box={box} key={index}/>
                })}
            </div>
        </div>
    </div>
    </>
)
}