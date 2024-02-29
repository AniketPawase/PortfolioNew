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
            title={" Inventory Management System"}
            description={
              "Designed and developed a feature-rich Inventory Management Application for managing Products,Employees and Seller's information. The platform enables customers to browse a diverse catalog of products, place orders, and provides sellers with a seamless interface for managing products."
            }
            image={"./images/InventoryManagement.jpg"}
            Github={"https://github.com/shubh96git/IMS.git"}
          />
        </Col>
        <Col>
          <Card
            title={" ECommerce Website"}
            description={
              "Designed and developed a feature-rich eCommerce website with similarities to Flipkart. The platform enables customers to browse a diverse catalog of products, place orders, and provides sellers with a seamless interface for selling their products."
            }
            image={"./images/e-commerce.jpg"}
            Github={"https://github.com/ayush-chothe/eCommerce"}
          />
        </Col>
        <Col>
          <Card
            title={"Social-Connect App"}
            description={
            "SocialConnect is a MERN stack application with MySQL integration, offering features for post creation, liking, commenting, and user profile management. Utilizing JWT for authentication, it ensures secure registration and login functionalities. SocialConnect provides a seamless user experience, showcasing modern web development techniques across backend, frontend, and database management."
            }
            image={"./images/socialConnect.jpeg"}
            Github={"https://github.com/AniketPawase/WebApp.git"}
          />
        </Col>
        <Col>
          <Card
            title={"To-Do List App"}
            description={
              " The React Todo List is a minimalist task management app built with React. It allows users to quickly add, delete, and mark tasks as completed. The app features filtering options for easy organization and is designed to be responsive for seamless use on any device. Task data is stored locally for convenience"
            }
            image={"./images/ToDo.jpg"}
            Github={"https://github.com/AniketPawase/ToDoListApp.git"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
