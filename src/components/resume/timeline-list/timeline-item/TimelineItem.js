import "./TimelineItem.scss";
const TimelineItem = (props) => {
  const { item } = props;
  return (
    <div className="timeline-item-container">
      <h4 className="h4 timeline-item-title">{item.title}</h4>
      <span>{item.timeline}</span>
      <p className="timeline-text">{item.description}</p>
    </div>
  );
};
export default TimelineItem;
