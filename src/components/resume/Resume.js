import { useContext } from "react";
import UIBorderArticle from "../shared/ui-border-article/UIBorderArticle";
import ProgressList from "./progress-list/ProgressList";
import TimelineList from "./timeline-list/TimelineList";
import { DataContext } from "../../store/DataContextProvider";

const Resume = () => {
  const { profile } = useContext(DataContext);
  return (
    <div className="resume-container">
      <UIBorderArticle>
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <TimelineList
          icon="bx bx-briefcase"
          title="Experience"
          items={profile?.experiences}
        />

        <TimelineList
          icon="bx bx-book-open"
          title="Education"
          items={profile?.educations}
        />

        <ProgressList title="Languages" items={profile?.languages} />
        <ProgressList title="My Skills" items={profile?.techSkills} />
      </UIBorderArticle>
    </div>
  );
};

export default Resume;
