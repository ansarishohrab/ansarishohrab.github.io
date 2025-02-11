import UILoader from "../../shared/ui-loader/UILoader";
import SoftSkillItem from "./soft-skill-item/SoftSkillItem";
import "./SoftSkills.scss";

const SoftSkills = (props) => {
  const { softSkills } = props;
  return (
    <div className="soft-skills-container">
      <h3 className="h3 soft-skills-title">Soft Skills</h3>
      {!softSkills?.length && <UILoader />}
      <ul className="soft-skills-list">
        {softSkills?.map((softSkill, index) => {
          return (
            <li key={index}>
              <SoftSkillItem softSkill={softSkill} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SoftSkills;
