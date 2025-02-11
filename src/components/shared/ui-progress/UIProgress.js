import "./UIProgress.scss";
const UIProgress = (props) => {
  const { progress = 0 } = props;
  return (
    <div className="ui-progress-container">
      <div
        className="skill-progress-fill"
        style={{ width: progress + "%" }}
      ></div>
    </div>
  );
};

export default UIProgress;
