import "./UILoader.scss";
const UILoader = (props) => {
  const { width, height, padding } = props;
  return (
    <div className="ui-loader-container">
      <img
        alt=""
        src="images/loader/ripples.svg"
        style={{ width, height, padding }}
      />
    </div>
  );
};

export default UILoader;
