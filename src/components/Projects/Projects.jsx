import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MealMates from "../../assets/Projects/MealMates.png";
import Calculator from "../../assets/Projects/Calculator.png";
import Weather from "../../assets/Projects/Weather.png";
import ToDo from "../../assets/Projects/ToDo.png";
import Temprature from "../../assets/Projects/Temprature.png";
import rockpaperscissor from "../../assets/Projects/rockpaperscissor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MealMates}
              isBlog={false}
              title="MealMates Food Ordering App"
              description="MealMates is a user-friendly food ordering app that connects users with local restaurants. It allows customers to browse different cuisines, customize orders, and track them in real-time. It also offers secure payment options and user reviews for each restaurant, making food ordering seamless and enjoyable. Thank you for your kind words!"
              ghLink="https://github.com/Tushar-Project-Space/MealMates"
               
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calculator}
              isBlog={false}
              title="Calculator"
              description="This project is a fully functional calculator that can perform basic arithmetic operations like addition, subtraction, multiplication, and division. It’s user-friendly, reliable, and efficient, making it a handy tool for quick calculations. Great work on this project!"
               ghLink="https://github.com/Tushar-Project-Space/Calculator"
               demoLink="https://tushar-project-space.github.io/Calculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="WeatherNow is a sleek and user-friendly weather application designed to provide real-time weather information for any location worldwide. Developed using HTML5, CSS3, and JavaScript, it offers a seamless experience for users to access current weather conditions, forecasts, and additional details via a simple and intuitive interface."
              ghLink="https://github.com/Tushar-Project-Space/Weather-App"
              demoLink="https://tushar-project-space.github.io/Weather-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="To-Do-List"
              description="ReactToDo is a minimalist yet powerful to-do list application built using ReactJS. It offers users a convenient platform to organize tasks, set priorities, and keep track of their daily activities. With its intuitive interface and flexible functionality, ReactToDo helps users stay productive and focused on completing their tasks efficiently."
              ghLink="https://github.com/Tushar-Project-Space/To-Do-List"
              demoLink="https://new-todo-list-app-tushar09.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Temprature}
              isBlog={false}
              title="Temprature-Converter-App"
              description="The Temperature Converter is a user-friendly web application designed to provide quick and accurate temperature conversions between Fahrenheit and Celsius scales. Built using HTML5, CSS, and JavaScript, this app offers a seamless experience for users to convert temperatures effortlessly and obtain precise values in either scale."
              ghLink="https://github.com/Tushar-Project-Space/Temprature-Converter-App"
              demoLink="https://tempreture-converter-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rockpaperscissor}
              isBlog={false}
              title="Rock-Paper-Scisssor"
              description="The Rock-Paper-Scissors game is a classic and entertaining web application created using HTML5, CSS, and JavaScript. It provides users with a platform to engage in the timeless game of Rock-Paper-Scissors against the computer, showcasing expertise in frontend development through its sleek design, smooth animations, and responsive layout."
              ghLink="https://github.com/Tushar-Project-Space/Rock-Paper-Sissor-Game"
              demoLink="https://tushar-project-space.github.io/Rock-Paper-Sissor-Game/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
