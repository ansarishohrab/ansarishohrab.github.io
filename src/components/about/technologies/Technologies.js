import UILoader from "../../shared/ui-loader/UILoader";
import TechnologyItem from "./technology-item/TechnologyItem";
import "./Technologies.scss";

const Technologies = (props) => {
  const { technologies } = props;
  return (
    <div className="technologies-container">
      <h3 className="h3 clients-title"> Tech Experiences</h3>
      {!technologies?.length && <UILoader />}
      <ul className="clients-list has-scrollbar">
        {technologies?.map((technology, index) => {
          return (
            <li key={index}>
              <TechnologyItem technology={technology} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Technologies;
