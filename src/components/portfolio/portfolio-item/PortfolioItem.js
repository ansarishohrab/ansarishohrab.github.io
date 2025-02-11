import { useState } from "react";
import UIImage from "../../shared/ui-image/UIImage";
import "./PortfolioItem.scss";

const PortfolioItem = (props) => {
  const { item } = props;
  const [makeImageScale, setMakeImageScale] = useState(false);
  return (
    <div className="portfolio-item-container">
      <a href={item.url} target="_blank" rel="noreferrer" className="link">
        <figure
          className="project-img"
          onMouseEnter={() => {
            setMakeImageScale(true);
          }}
          onMouseLeave={() => {
            setMakeImageScale(false);
          }}
        >
          <div className="project-item-icon-box">
            <i className="bx bx-door-open"></i>
          </div>

          <UIImage
            src={item.image}
            alt={item.title}
            scale={makeImageScale}
            loaderPadding="10px"
            loaderHeight="200px"
          />
        </figure>
        <h3 className="project-title">{item.title}</h3>
        <p className="project-category">{item.category}</p>
      </a>
    </div>
  );
};

export default PortfolioItem;
