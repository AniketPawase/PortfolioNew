import React from "react";
import Card from "./Card";
import "../css/project.css";
import { Container, Row, Col } from "react-bootstrap";

function Project() {
  return (
    <Container id="project">
      <h1 className="mx- text-center" style={{ fontFamily: "Open Sans", padding: "50px 0px 10px 0px", fontWeight: "600" }}>
        Projects
      </h1>
      <p className="mx- text-center" style={{ fontSize: "18px" }}>
        Here are some of my Projects on which I have been working on for the past 1 <br /> years.
      </p>
      <Row>
        <Col>
          <Card
            title={" ECommerce Website"}
            description={
              "Designed and developed a feature-rich eCommerce website with similarities to Flipkart. The platform enables customers to browse a diverse catalog of products, place orders, and provides sellers with a seamless interface for selling their products."
            }
            image={"./images/Ecommerce.jpg"}
            Github={"https://github.com/ayush-chothe/eCommerce"}
          />
        </Col>
        <Col>
          <Card
            title={"Book Management System"}
            description={
              " Implemented a secure dual-login system for administrators and sellers, ensuring proper access control. Developed Create, Read, Update, and Delete (CRUD) operations for book listings, simplifying inventory management for sellers."
            }
            image={"./images/book.jpg"}
            Github={"https://github.com/Dhananjaywarade/BookManagementSystem"}
          />
        </Col>
        <Col>
          <Card
            title={" Weather website"}
            description={
              "I've created a user-friendly platform that provides accurate weather information for any location. The website is responsive, visually appealing offers a seamless user experience. By leveraging APIs, I fetch realtime weather data."
            }
            image={"./images/weather.png"}
            Github={"https://github.com/Dhananjaywarade/weather"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
