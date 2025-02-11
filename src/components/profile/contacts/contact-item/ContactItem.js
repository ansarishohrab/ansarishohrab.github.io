import UIIconBox from "../../../shared/ui-icon-box/UIIconBox";
import "./ContactItem.scss";

const ContactItem = (props) => {
  const { item } = props;
  return (
    <div className="contact-item-container">
      <UIIconBox icon={item.icon} />
      <div className="contact-info">
        <p className="contact-title">{item.title}</p>
        {item.type === "address" ? (
          <address>{item.value}</address>
        ) : item.type === "date" ? (
          <time>{item.value}</time>
        ) : (
          <a href={item.link} className="contact-link">
            {item.value}
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
