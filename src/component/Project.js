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
            image={"./images/IMS.png"}
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
            title={"To-Do List App"}
            description={
              " The React Todo List is a minimalist task management app built with React. It allows users to quickly add, delete, and mark tasks as completed. The app features filtering options for easy organization and is designed to be responsive for seamless use on any device. Task data is stored locally for convenience"
            }
            image={"./images/ToDoList.jpg"}
            Github={"https://github.com/AniketPawase/ToDoListApp.git"}
          />
        </Col>
        <Col>
          <Card
            title={"Movie-Critics App"}
            description={
              "Movie Critics is a web application designed for users to add new movies with their release dates and provide reviews, ratings, and comments on existing movies. The application utilizes MySQL as the database, with a React front-end and an Express.js/Node.js backend Users can add new movies along with their release dates.Users can write reviews and give ratings to existing movies.The application calculates and displays the average rating beside each movie.Clicking on a movie name allows users to view all the reviews and comments for that movie."
             }
            image={"./images/MovieReview.png"}
            Github={"https://github.com/AniketPawase/SaasmonkAssgn.git"}
          />
        </Col>
        <Col>
          <Card
            title={"Social-Connect App"}
            description={
            "SocialConnect is a full-stack social media application built using the MERN (MySQL, Express.js, React.js, Node.js) stack with MySQL for database management. The platform allows users to create and share posts, interact with content through likes and comments, and view profiles of other users. Utilizing JSON Web Tokens (JWT) for authentication, SocialConnect provides secure registration and login functionalities. Users can personalize their profiles and engage with a vibrant community through seamless navigation and intuitive user experience. SocialConnect represents a comprehensive showcase of modern web development techniques, featuring robust backend architecture, dynamic front-end design, and efficient database management."
            }
            image={"./images/socialConnect.jpeg"}
            Github={"https://github.com/AniketPawase/WebApp.git"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
