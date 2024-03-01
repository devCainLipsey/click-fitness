import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <FontAwesomeIcon
        icon={faFacebook}
        size="2x"
        className={`mr-4 ${
          hoveredIcon === "facebook"
            ? "text-red-500 hover:animate-pulse cursor-pointer"
            : ""
        }`}
        onMouseEnter={() => handleIconHover("facebook")}
        onMouseLeave={handleIconLeave}
      />
      <FontAwesomeIcon
        icon={faInstagram}
        size="2x"
        className={`mr-4 ${
          hoveredIcon === "instagram"
            ? "text-red-500 hover:animate-pulse cursor-pointer"
            : ""
        }`}
        onMouseEnter={() => handleIconHover("instagram")}
        onMouseLeave={handleIconLeave}
      />
      <FontAwesomeIcon
        icon={faTwitter}
        size="2x"
        className={`${
          hoveredIcon === "twitter"
            ? "text-red-500 hover:animate-pulse cursor-pointer"
            : ""
        }`}
        onMouseEnter={() => handleIconHover("twitter")}
        onMouseLeave={handleIconLeave}
      />
    </div>
  );
};

export default SocialMediaIcons;
