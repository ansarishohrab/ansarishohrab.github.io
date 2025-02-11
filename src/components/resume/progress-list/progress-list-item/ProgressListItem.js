import UIProgress from "../../../shared/ui-progress/UIProgress";
import "./ProgressListItem.scss";

const ProgressListItem = (props) => {
  const { item } = props;
  const removePercent = (str) => str.replace(/%/, "");
  return (
    <div className="progress-list-item-container">
      <div className="title-wrapper">
        <h5 className="h5">{item.title}</h5>
        <data value={removePercent(item.value)}>{item.value}</data>
      </div>
      <UIProgress progress={removePercent(item.value)} />
    </div>
  );
};

export default ProgressListItem;
