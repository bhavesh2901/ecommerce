import React from 'react';
import { Accordion, Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import help from '../../Components/Assests/help.avif';
// D:\E-commerce\src\Components\Assests\reviews.avif
const Helppage = () => {
  return (
    <Container className="my-5">
      {/* Hero Section */}
      <Row className="text-center mb-5">
        <Col>
          <h2 className="display-4"><i class="fa-brands fa-shopify"></i> Help & Support</h2>
          <p className="lead">Need help with your order or account? We're here to assist you.</p>
          {/* <Image
            src={help}
            fluid
            className="rounded shadow-sm mb-4"
            alt="Help Center Banner"
          /> */}
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row>
        <Col md={6}>
          <h3><i className="fas fa-question-circle me-2"></i>Frequently Asked Questions</h3>
          <Accordion defaultActiveKey="0" className="mb-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header><i className="fas fa-shopping-cart me-2"></i> How do I track my order?</Accordion.Header>
              <Accordion.Body>
                Once your order is shipped, you'll receive an email with a tracking number. You can also track your order from your account dashboard.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><i className="fas fa-shipping-fast me-2"></i> What are the shipping options?</Accordion.Header>
              <Accordion.Body>
                We offer various shipping options including standard, express, and overnight delivery. Shipping fees may vary depending on the delivery option and location.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><i className="fas fa-credit-card me-2"></i> How do I make payments?</Accordion.Header>
              <Accordion.Body>
                We accept major credit cards, PayPal, and other secure payment methods. You can choose your preferred payment method at checkout.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header><i className="fas fa-phone-alt me-2"></i> How do I contact customer support?</Accordion.Header>
              <Accordion.Body>
                You can contact our support team through live chat, email, or by calling our customer service hotline.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Contact Card */}
        <Col md={6}>
          <h3><i class="fa-solid fa-phone"></i> Contact Us</h3>
          <Card className="shadow mb-4">
            <Card.Body className="text-center">
              <h5 className="card-title">Need help with your order?</h5>
              <p className="card-text">Our support team is available 24/7 to assist you.</p>
              <Button variant="primary" href="mailto:support@example.com">Email Us</Button>
              <Button variant="outline-primary" className="ms-2">Live Chat</Button>
              <p className="mt-3">Or call us at <strong>1-800-123-4567</strong></p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional Support Options */}
      <Row className="mt-5">
        <Col md={4} className="text-center">
          <i className="fas fa-shipping-fast fa-3x mb-3 text-primary"></i>
          <h5>Shipping & Delivery</h5>
          <p>Learn more about our shipping policies and delivery options.</p>
          <Button variant="outline-info">View Shipping Info</Button>
        </Col>

        <Col md={4} className="text-center">
          <i className="fas fa-credit-card fa-3x mb-3 text-primary"></i>
          <h5>Payment Options</h5>
          <p>Find out more about our accepted payment methods and secure checkout.</p>
          <Button variant="outline-info">Payment Methods</Button>
        </Col>

        <Col md={4} className="text-center">
          <i className="fas fa-question-circle fa-3x mb-3 text-primary"></i>
          <h5>Returns & Refunds</h5>
          <p>Need to return an item? Read about our return and refund policies.</p>
          <Button variant="outline-info">Return Policy</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Helppage;
