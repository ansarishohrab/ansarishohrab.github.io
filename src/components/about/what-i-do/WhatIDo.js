import UILoader from "../../shared/ui-loader/UILoader";
import WhatIDoItem from "./what-i-do-item/WhatIDoItem";
import "./WhatIDo.scss";
const WhatIDo = (props) => {
  const { services } = props;
  return (
    <div className="what-i-do-container">
      <h3 className="h3 service-title">What i'm doing</h3>
      {!services?.length && <UILoader />}
      <ul className="service-list">
        {services?.map((service, index) => {
          return <WhatIDoItem key={index} service={service} />;
        })}
      </ul>
    </div>
  );
};

export default WhatIDo;
