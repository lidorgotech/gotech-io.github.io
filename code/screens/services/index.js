import ColorSection from "../../common/ColorSection";
import DiagramSection from "./components/diagramSection";
import ListServices from "./components/list";
import PageWrapper from "../../common/pageWrapper";
import PointsSection from "./components/PointsSection";
import React from "react";
import { PAGE_DETAILS } from "../../../assets/js/common/services/page-details";

function Services({ services, marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections, intro, diagram } = PAGE_DETAILS;
  return (
    <PageWrapper
      title={title}
      description={description}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    >
      {sections.length &&
        sections.map(({ type, color, paragraphs }) => {
          return (
            <div key={type}>
              <ColorSection
                color={color}
                paragraphs={paragraphs}
              ></ColorSection>

              {type === "section-first" && (
                <div className="page-common-block">
                  <ListServices services={services} />
                </div>
              )}

              {type === "section-second" && (
                <div>
                  <PointsSection intro={intro} />
                  <DiagramSection diagram={diagram} />
                </div>
              )}
            </div>
          );
        })}
    </PageWrapper>
  );
}

export default Services;
