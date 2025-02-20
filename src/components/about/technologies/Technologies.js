import UILoader from "../../shared/ui-loader/UILoader";
import TechnologyItem from "./technology-item/TechnologyItem";
import "./Technologies.scss";
import { useEffect, useState } from "react";

const Technologies = (props) => {
  const { technologies } = props;
  const [sortedTechnologies, setSortedTechnologies] = useState([]);

  useEffect(() => {
    if (technologies?.length) {
      setSortedTechnologies(
        [...technologies].sort((a, b) => a.title.localeCompare(b.title))
      );
      console.log(sortedTechnologies);
    }
  }, [technologies]);
  return (
    <div className="technologies-container">
      <h3 className="h3 clients-title"> Tech Experiences</h3>
      {!sortedTechnologies?.length && <UILoader />}
      <ul className="clients-list has-scrollbar">
        {sortedTechnologies?.map((technology, index) => {
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
