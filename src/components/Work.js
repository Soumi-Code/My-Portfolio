import React from "react";
import logo from "../assets/img/skillcraft.jpeg";

export const Work = () => {
  const workExperiences = [
    {
      title: "Web Developer Intern",
      company: "SkillCraft Technology",
      duration: "December 2024 - Present",
      responsibilities: [
        "Selected for a hands-on Web Development Internship program, focusing on building responsive and user-friendly web applications while gaining valuable industry experience.",
      ],
    },
  ];

  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="work-items">
          {workExperiences.map((work, index) => (
            <div key={index} className="work-item">
              <div className="work-header">
                <img src={logo} alt={`${work.company} logo`} className="work-logo" />
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
          ))}
        </div>
      </div>
    </section>
  );
};
