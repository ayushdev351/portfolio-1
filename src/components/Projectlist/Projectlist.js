import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={"https://user-images.githubusercontent.com/79743704/156329767-f0cfa333-4389-42d6-96ae-b7ea07e7a491.png"}
                isBlog={false}
                title="College Connect"
                description="This is a website where students can ask questions and queries related to college and connect with people who contribute unique insights and quality answer."
                ghLink="https://github.com/ayushdev351/CollegeConnect"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={"https://user-images.githubusercontent.com/79743704/233374595-ef10cd64-8051-4d08-af1b-435c3f798cb2.png"}
                isBlog={false}
                title="Task Manager"
                description="Technology used Node Js, Express Js and Mongo Db, Mongoose. A fully workin task manager where user can add, delete, edit the daily tasks."
                ghLink="https://github.com/ayushdev351/Node-Mongo-Task-Manager"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={"https://user-images.githubusercontent.com/79743704/148377780-acccc94b-c40b-436c-9ce6-1153a0014d4d.PNG"}
                isBlog={false}
                title="GitGram"
                description="A website to see github users present near your location.It was created with React js. Users can just add their location and it will show all the developersa round them."
                ghLink="https://github.com/ayushdev351/GitGram"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={"https://user-images.githubusercontent.com/79743704/233379173-3901d01d-aed5-42fc-8473-8300e3b5f10f.png"}
                isBlog={false}
                title="Hospital Connect"
                description="Developed a web application using Node Js API and React as frontend. Implemented Firebase Authentication for login and signup. Functionalities: Login/Logout, Register. Refer, Add, Remove and See Referred Patients"
                ghLink="https://github.com/ayushdev351/SyntaxErrors"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={"https://user-images.githubusercontent.com/79743704/233378104-f87e86a2-c6f6-4b14-ac83-6a0ca435cdfa.png"}
                isBlog={false}
                title="Dashboard"
                description="A fully responsive one page dashboard design. Technology used React, CSS3, React Bootstrap etc."
                ghLink="https://github.com/ayushdev351/Dashboard/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist