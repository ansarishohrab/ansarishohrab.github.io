import "./SocialItem.scss";
const SocialItem = (props) => {
  const { item } = props;
  return (
    <div className="social-item-container">
      <a
        href={item.link}
        target="_blank"
        className="social-link"
        rel="noreferrer"
      >
        <i className={`ui-icon ${item.icon}`}></i>
      </a>
    </div>
  );
};

export default SocialItem;
