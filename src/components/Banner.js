import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7} className="wow fadeIn" dataWowDuration="1.5s">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi! I'm Soumi`}</h1>
              <p>I am currently pursuing a degree in Computer Science Engineering at Supreme Knowledge Foundation Group of Institutions, where I am building a strong foundation in coding, software development, and problem-solving. My goal is to apply cutting-edge technology to create efficient, innovative solutions. With a passion for learning, I am excited about opportunities to collaborate on projects that shape the future of technology.</p>
          </Col>
          <Col xs={12} md={6} xl={5} className="wow zoomIn" dataWowDuration="1.5s">
            <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}