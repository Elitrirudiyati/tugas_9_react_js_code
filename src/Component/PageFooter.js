import React, {Component} from 'react';
import {Popover, OverlayTrigger, Button, Row, Col, Container} from 'react-bootstrap';


const popover1 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Informasi Website</Popover.Title>
    	<Popover.Content>
      	Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
    	</Popover.Content>
  </Popover>
)

const popover2 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Versi Website</Popover.Title>
    	<Popover.Content>
      	Akses Sport V1.0
    	</Popover.Content>
  </Popover>
)

const Button1 = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
    <Button variant="primary">Informasi</Button>
  </OverlayTrigger>
)

const Button2 = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
    <Button variant="primary">Versi Website</Button>
  </OverlayTrigger>
)

class PageFooter extends Component{
	render(){
		return(
		<div>
			<Container>
				<Row>
          <Col sm={3}>
					<Button1/>
          </Col>
          <Col sm={1}>
          </Col>
          <Col sm={3}>
					<Button2/>
          </Col>
				</Row>
			</Container>
		</div>
		)
	}
}

export default PageFooter;