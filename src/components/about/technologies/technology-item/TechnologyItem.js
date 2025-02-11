import UIImage from "../../../shared/ui-image/UIImage";
import "./TechnologyItem.scss";

const TechnologyItem = (props) => {
  const { technology } = props;
  return (
    <div className="technology-item-container">
      <UIImage
        src={technology.image}
        alt={`image of ${technology.title} that show the logo`}
        width="50px"
        height="50px"
      />
      <p className="h5">{technology.title}</p>
    </div>
  );
};

export default TechnologyItem;
