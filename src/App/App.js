import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "../styles/App.scss";

class App extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={{span: 4, offset: 4}}>
                        <h1>My React App!</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
