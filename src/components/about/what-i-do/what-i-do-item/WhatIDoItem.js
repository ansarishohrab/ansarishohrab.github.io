import UIContentCard from "../../../shared/ui-content-card/UIContentCard";
import UIImage from "../../../shared/ui-image/UIImage";
import "./WhatIDoItem.scss";

const WhatIDoItem = (props) => {
  const { service } = props;
  return (
    <div className="what-i-do-item-container">
      <UIContentCard className="service-item">
        <div className="service-icon-box">
          <UIImage src={service.image} alt="design icon" width="40px" />
        </div>
        <div className="service-content-box">
          <h4 className="h4 service-item-title">{service.title}</h4>
          <p className="service-item-text">{service.description}</p>
        </div>
      </UIContentCard>
    </div>
  );
};

export default WhatIDoItem;
