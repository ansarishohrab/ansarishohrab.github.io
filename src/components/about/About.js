import { useContext } from "react";
import UIBorderArticle from "../shared/ui-border-article/UIBorderArticle";
import UILoader from "../shared/ui-loader/UILoader";
import "./About.scss";
import SoftSkills from "./soft-skills/SoftSkills";
import Technologies from "./technologies/Technologies";
import WhatIDo from "./what-i-do/WhatIDo";
import { DataContext } from "../../store/DataContextProvider";
const About = () => {
  const { profile } = useContext(DataContext);
  return (
    <div className="about-container">
      <UIBorderArticle>
        <header>
          <h2 className="h2 article-title">About Me</h2>
        </header>

        {!profile && <UILoader />}

        <section className="about-text">
          {profile?.presentations?.map((about, index) => {
            return <p key={index}>{about}</p>;
          })}
        </section>

        <WhatIDo services={profile?.services} />
        <SoftSkills softSkills={profile?.softSkills} />
        <Technologies technologies={profile?.technologies} />
      </UIBorderArticle>
    </div>
  );
};

export default About;
