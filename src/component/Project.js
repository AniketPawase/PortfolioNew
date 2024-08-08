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
        Here are some of my Projects on which I have been working on for the past 1 <br /> year.
      </p>
      <Row>
        <Col>
          <Card
            title={"Inventory Management System"}
            description={
              "Designed and developed a feature-rich Inventory Management Application for managing Products, Employees, and Seller's information. The platform enables customers to browse a diverse catalog of products, place orders, and provides sellers with a seamless interface for managing products."
            }
            image={"./images/IMS.png"}
            Github={"https://github.com/shubh96git/IMS.git"}
          />
        </Col>
        <Col>
          <Card
            title={"ECommerce Website"}
            description={
              "Designed and developed a feature-rich eCommerce website with similarities to Flipkart. The platform enables customers to browse a diverse catalog of products, place orders, and provides sellers with a seamless interface for selling their products."
            }
            image={"./images/e-commerce.jpg"}
            Github={"https://github.com/ayush-chothe/eCommerce"}
          />
        </Col>
        <Col>
          <Card
            title={"To-Do List App"}
            description={
              "The React Todo List is a minimalist task management app built with React. It allows users to quickly add, delete, and mark tasks as completed. The app features filtering options for easy organization and is designed to be responsive for seamless use on any device. Task data is stored locally for convenience."
            }
            image={"./images/ToDoList.jpg"}
            Github={"https://github.com/AniketPawase/ToDoListApp.git"}
          />
        </Col>
        <Col>
          <Card
            title={"Movie-Critics App"}
            description={
              "Movie Critics is a web application designed for users to add new movies with their release dates and provide reviews, ratings, and comments on existing movies. The application utilizes MySQL as the database, with a React front-end and an Express.js/Node.js backend."
            }
            image={"./images/MovieReview.png"}
            Github={"https://github.com/AniketPawase/SaasmonkAssgn.git"}
          />
        </Col>
        <Col>
          <Card
            title={"Social-Connect App"}
            description={
              "SocialConnect is a full-stack social media application built using the MERN stack with MySQL for database management. The platform allows users to create and share posts, interact with content through likes and comments, and view profiles of other users. Utilizing JSON Web Tokens (JWT) for authentication, SocialConnect provides secure registration and login functionalities."
            }
             image={"./images/socialConnect.jpeg"}
            Github={"https://github.com/AniketPawase/WebApp.git"}
          />
        </Col>
        <Col>
          <Card
            title={"Interactive Dashboard Application"}
            description={
              "Developed a responsive and interactive dashboard application using Next.js and React.js. The application features multiple widgets displaying dynamic data, a settings page for user preferences, and integrates with a mock API. Deployed to Vercel for optimal performance."
            }
            image={"./images/interactiveDashboard.jpeg"}
            Github={"https://github.com/AniketPawase/SasakiTech.git"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
