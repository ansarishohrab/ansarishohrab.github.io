import "./UIIconBox.scss";
const UIIconBox = (props) => {
  const { icon } = props;
  return (
    <div className="ui-icon-box-container">
      <i className={`ui-icon ${icon}`}></i>
    </div>
  );
};
export default UIIconBox;
