import React from "react";
import logo from "../assets/img/skillcraft.jpeg";
import logo1 from "../assets/img/next24tech.jpg";

export const Work = () => {
  const workExperiences = [
    {
      title: "Web Developer Intern",
      company: "SkillCraft Technology",
      duration: "December 2024 - December 2024",
      responsibilities: [
        "Selected for a hands-on Web Development Internship program, focusing on building responsive and user-friendly web applications while gaining valuable industry experience.",
      ],
      logo: logo,
    },
    {
      title: "Web Developer Intern",
      company: "Next24Tech Technology and Services ",
      duration: "June 2024 - Present",
      responsibilities: [
        "Designing and developing web applications using the MERN stack and Redux,creating responsive and user-friendly interfaces with a focus on clean design and usabilityManaging source code and documentation using GitHub",
      ],
      logo: logo1,
    },
  ];

  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {workExperiences.map((work, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="work-header">
                  <img src={work.logo} alt={`${work.company} logo`} className="work-logo" />
                  <div className="work-details">
                    <h3 className="work-title">{work.title}</h3>
                    <h4 className="work-company">{work.company}</h4>
                    <span className="work-duration">{work.duration}</span>
                    <ul className="work-responsibilities">
                      {work.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <span className="timeline-dot"></span>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};