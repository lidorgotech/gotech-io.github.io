import ColorSection from "../../common/ColorSection";
import ListCategories from "../../common/categories";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import { CLIENTS_DETAILS } from "../../../assets/js/clients";
import { listCategories } from "../../../assets/js/clients/listCategories";

function Clients({ marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections } = CLIENTS_DETAILS;

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
        sections.map(({ type, color, title, description }) => {
          return (
            <div key={type} className="clients">
              <ColorSection
                color={color}
                title={title}
                description={description}
              />

              {type === "section-beta" && (
                <ListCategories categories={listCategories} />
              )}
            </div>
          );
        })}
    </PageWrapper>
  );
}

export default Clients;
