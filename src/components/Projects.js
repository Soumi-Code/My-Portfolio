import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "TIC TAC TOE GAME",
      description:
        "This provides a smooth and dynamic user experience with two modes of gameplay: User vs User and User vs Computer, which uses the Minimax algorithm.",
      imgUrl: projImg1,
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "TO DO LIST",
      description:
        "A simple, interactive task management tool to add, edit, mark, and delete tasks, while also showing data like creation and completion dates.",
      imgUrl: projImg2,
      tags: ["React", "Tailwind"],
    },
    {
      title: "SOCIAL MEDIA APPLICATION",
      description:
        "A platform for user registration, login, posting, liking, commenting, messaging, and profile creation. Scalable architecture and intuitive design.",
      imgUrl: projImg3,
      tags: ["React", "MongoDB", "Tailwind", "JWT-Auth"],
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12} className="text-center">
            <h2>Projects</h2>
            <p>
              These are some of the projects I’ve worked on, showcasing my skills
              in web development and application design.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col xs={12} sm={6} lg={4} key={index} className="mb-4">
              <div className="proj-imgbx">
                <img src={project.imgUrl} alt={project.title} />
                <div className="proj-txtx">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="proj-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
