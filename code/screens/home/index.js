import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

const Home = ({
  header,
  services,
  clients,
  about,
  join,
  team,
  contact,
  navbar,
  _relativeURL,
  _ID,
}) => {
  return (
    <div className="home" data-aos={animations.up}>
      {navbar}
      {header}
      {services}
      {clients}
      {about}
      {join}
      {team}
      {contact}
      <script
        type="module"
        src={handleUrl(`/assets/js/home/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
};

export default Home;
