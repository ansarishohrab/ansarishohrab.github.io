import SocialItem from "./social-item/SocialItem";
import "./Socials.scss";

const Socials = (props) => {
  const { socials } = props;
  return (
    <div className="socials-container">
      {socials?.map((social, index) => {
        return <SocialItem key={index} item={social} />;
      })}
    </div>
  );
};

export default Socials;
