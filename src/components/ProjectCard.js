import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, tags }) => {
  return (
    <Col size={12} sm={6} md={4} className="d-flex align-items-stretch">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="proj-tags">
            {tags.map((tag, index) => (
              <span key={index}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};
