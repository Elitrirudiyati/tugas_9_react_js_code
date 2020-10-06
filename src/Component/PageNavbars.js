import React from 'react';
import {Navbar, Nav, FormControl, Form, NavDropdown, Button, Row, Breadcrumb,Col} from 'react-bootstrap';


function PageNavbar (){
	return(
		<div> 
		<Row>
		<Navbar bg="dark" variant="dark">
			
    		<Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
    		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  			<Navbar.Collapse id="responsive-navbar-nav">
    		<Nav className="mr-auto">
      			<Nav.Link href="#home">Home</Nav.Link>
      			<Nav.Link href="#berita">Berita</Nav.Link>
      			<Nav.Link href="#livescores">Live Scores</Nav.Link>

      			<NavDropdown title="Piala & Liga" id="collasible-nav-dropdown">
        		<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        		<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        		<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        		<NavDropdown.Divider />
        		<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      		</NavDropdown>
    		</Nav>
    		<Nav>
      			<Nav.Link href="#deets">Transfer Pemain</Nav.Link>
      				<Nav.Link eventKey={2} href="#memes">
        				Tim
      			</Nav.Link>
    		</Nav>
  			</Navbar.Collapse>
  			
    		<Form inline>
      		<FormControl type="text" placeholder="Search" className="mr-sm-2" />
      		<Button variant="outline-info">Search</Button>
    		</Form>
    		
  		</Navbar>

  		<br />
  		</Row>
  		<Row>
  			<Col>
  			</Col>
  			<Col sm={6}>
  			<Breadcrumb>
  				<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  				<Breadcrumb.Item href="#">
    			Liga Inggris
  				</Breadcrumb.Item>
  				<Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
			</Breadcrumb>
			</Col>
  		</Row>






  </div>


		)
}

export default PageNavbar;
