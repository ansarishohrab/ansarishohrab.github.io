import UIIconBox from "../../shared/ui-icon-box/UIIconBox";
import UILoader from "../../shared/ui-loader/UILoader";
import TimelineItem from "./timeline-item/TimelineItem";
import "./TimelineList.scss";

const TimelineList = (props) => {
  const { icon, title, items } = props;
  return (
    <div className="timeline-list-container">
      <div className="title-wrapper">
        <UIIconBox icon={icon} />
        <h3 className="h3">{title}</h3>
      </div>

      {!items?.length && <UILoader />}
      <ol className="timeline-list">
        {items?.map((item, index) => {
          return (
            <li key={index}>
              <TimelineItem item={item} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TimelineList;
