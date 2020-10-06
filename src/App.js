import React, {Component} from 'react';
import './css/bootstrap.min.css';
import './App.css';
import PageNavbar from './Component/PageNavbars';
import PageTable from './Component/PageTable';
import PageFooter from './Component/PageFooter';
import {	
	Row,	
	Container} from "react-bootstrap";


class App extends Component {
	render(){
  return (
    <div>
      <Container>
        <Row>
        <PageNavbar/>

        </Row>
        <Row>
        <PageTable/>
        </Row>
        <Row>
        <PageFooter/>
        </Row>
      </Container>
    </div>
    )
  }
}
    

export default App;
