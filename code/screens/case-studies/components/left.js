import Link from "../../../common/btns/link";
import React from "react";
import Tags from "../../../common/tag";

function Left({ title, description, image, button, tags }) {
  const { url, btnText } = button;
  const { src, alt } = image;
  return (
    <div className="case-studies flex-between">
      <div className="case-studies-wrapper">
        <div className="case-studies-image-left">
          <img src={src} alt={alt} />
        </div>
        <div className="case-studies-content-left">
          <h5>{title}</h5>
          <p className="case-studies-content-description">{description}</p>

          <div className="case-studies-content-wrapper">
            <Tags tags={tags} count="3" />
            <Link url={url} btnText={btnText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
