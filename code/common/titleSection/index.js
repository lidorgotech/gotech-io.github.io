import React from "react";

const TitleSection = ({ title, description }) => {
  return (
    <div className="title-section">
      {title && <h4>{title}</h4>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default TitleSection;
