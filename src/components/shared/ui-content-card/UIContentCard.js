import "./UIContentCard.scss";
const UIContentCard = ({ children, className }) => {
  return (
    <div className={`ui-content-card-container ${className}`}>{children}</div>
  );
};

export default UIContentCard;
