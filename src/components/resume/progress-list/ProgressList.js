import UIContentCard from "../../shared/ui-content-card/UIContentCard";
import UILoader from "../../shared/ui-loader/UILoader";
import ProgressListItem from "./progress-list-item/ProgressListItem";
import "./ProgressList.scss";

const ProgressList = (props) => {
  const { items, title } = props;
  return (
    <div className="progress-list-container">
      <h3 className="h3">{title}</h3>
      {!items?.length && <UILoader />}
      <ul className="skills-list">
        <UIContentCard>
          {items?.map((item, index) => (
            <ProgressListItem key={index} item={item} />
          ))}
        </UIContentCard>
      </ul>
    </div>
  );
};

export default ProgressList;
