import React from "react";
import { handleUrl } from "../../utils";

function CaseStudies({ _relativeURL, _ID }) {
  return (
    <div className="case-studies">
      CaseStudies
      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default CaseStudies;
