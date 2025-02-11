import { useEffect, useState } from "react";
import UIContentCard from "../../../shared/ui-content-card/UIContentCard";
import UIImage from "../../../shared/ui-image/UIImage";
import "./SoftSkillItem.scss";

const SoftSkillItem = (props) => {
  const { softSkill } = props;
  const [imageWidth, setImageWidth] = useState("60px");

  useEffect(() => {
    const handleImageResize = () => {
      const width = window.innerWidth;
      if (width > 580) {
        setImageWidth("80px");
      } else {
        setImageWidth("60px");
      }
    };
    handleImageResize();
    window.addEventListener("resize", handleImageResize);
    return () => {
      window.removeEventListener("resize", handleImageResize);
    };
  }, []);

  return (
    <div className="soft-skill-item-container">
      <UIContentCard>
        <figure className="soft-skills-avatar-box">
          <UIImage
            width={imageWidth}
            loaderPadding="20px"
            src={softSkill.image}
            alt={softSkill.image}
          />
        </figure>
        <h4 className="h4 soft-skills-item-title">{softSkill.title}</h4>
        <div className="soft-skills-text">
          <p>{softSkill.description}</p>
        </div>
      </UIContentCard>
    </div>
  );
};

export default SoftSkillItem;
