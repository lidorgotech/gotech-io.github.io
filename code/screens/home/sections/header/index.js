import React from "react";
import animations from "../../../../../assets/js/animations";

const HomeHeader = ({ title, sub_title, description, button }) => {
  return (
    <div className="home-header">
      <div className="home-header-background">
        <div className="orange-blobs">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_5gdcuanx.json"
            background="transparent"
            style={{ width: "1300px", height: "1300px" }}
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="green-blobs">
          <lottie-player
            src="https://lottie.host/2a4cd7fd-ef68-4865-b56c-8fe21f2c9170/7RneaIKFUy.json"
            background="transparent"
            style={{
              width: "1300px",
              height: "1300px",
              position: "absolute",
              left: "-550px",
              bottom: "-500px",
            }}
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>

      <div className="home-header-main">
        <div className="page-common-block">
          <di className="home-header-main-content">
            <h1 data-aos={animations.up} data-aos-delay="100">
              {title}
            </h1>

            <h2 data-aos={animations.up} data-aos-delay="250">
              {sub_title}
            </h2>

            <p data-aos={animations.up} data-aos-delay="250">
              {description}
            </p>
          </di>
          {button}
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
