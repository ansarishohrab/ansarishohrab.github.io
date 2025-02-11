import ContactItem from "./contact-item/ContactItem";
import "./Contact.scss";

const Contacts = (props) => {
  const { contacts } = props;
  return (
    <div className="contacts-container">
      {contacts?.map((contact, index) => {
        return <ContactItem key={index} item={contact} />;
      })}
    </div>
  );
};
export default Contacts;
