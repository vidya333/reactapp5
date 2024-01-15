import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import menu from '../../menu-json/menu.json';
import company from '../../Company/company.json';
import './Header.css';

// function Subhead(){
//   return (
//     <div>this is subhead</div>
//   ) 
// }

function Mainmenu({demo}){
  return(
    <>
      <Link to={demo.link} className='nav-link'>{demo.label}</Link>
    </>
  );
}

function DropdownMenu({demo}){
  return(
    <NavDropdown title={demo.label} id="basic-nav-dropdown">
         {
           demo.dropdownMenu.map((data,index)=>{
              return <Mainmenu demo={data} key={index} />
           }) 
         }  
    </NavDropdown>
  )
}

function Register({demo}){
  return(
    <Link to={demo.link} className='nav-link but'>
      <Button className='btn-primary'>{demo.label}</Button>
    </Link>
  )
}

export default function Header() {
  // console.log(company)
  return (
    <>
    {/* <Subhead /> */}
    <Navbar expand="lg" className="navbarp">
      <Container >
        <Link to="/" className='navbar-brand'>
          <img src={company.logo} alt="logo" width={30}/>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchbar"
              aria-label="Search"
            />
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link to="/" className='nav-link'>Home</Link>
            {/* <Link to="/learn" className='nav-link'>Learn</Link>
            <Link to="/refrence" className='nav-link'>Reference</Link>
            <Link to="/community" className='nav-link'>Community</Link>
            <Link to="/blog" className='nav-link'>Blog</Link> */}

            {menu.map((item,index)=>{
              // return <Link to={item.link} className='nav-link' key={index}>{item.label}</Link>
              if(item.isDropDown){
                return <DropdownMenu demo={item} key={index}/>
              }
              else if(item.isButton){
                return <Register demo={item} key={index} />
              }
              return <Mainmenu demo={item} key={index} />
            })
            }
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

