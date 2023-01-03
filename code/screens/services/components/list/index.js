import React from "react";
import animations from "../../../../../assets/js/animations";

const ListServices = ({ services }) => {
  return (
    <div className="services-content">
      {services.length &&
        services.map((service) => {
          return (
            <div
              className="services-content-wrapper"
              key={service.type}
              data-aos-anchor-placement="top"
              data-aos={animations.zoomIn}
            >
              <div className="services-content-item">{service}</div>
            </div>
          );
        })}
    </div>
  );
};

export default ListServices;
