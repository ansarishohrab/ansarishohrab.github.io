import { useContext } from "react";
import UIBorderArticle from "../shared/ui-border-article/UIBorderArticle";
import UILoader from "../shared/ui-loader/UILoader";
import PortfolioItem from "./portfolio-item/PortfolioItem";
import "./Portfolio.scss";
import { DataContext } from "../../store/DataContextProvider";

const Portfolio = () => {
  const { profile } = useContext(DataContext);

  return (
    <div className="portfolio-container">
      <UIBorderArticle>
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>
        <ul className="project-list">
          {profile?.projects?.map((item, index) => {
            return (
              <li key={index}>
                <PortfolioItem item={item} />
              </li>
            );
          })}
        </ul>

        {!profile?.projects?.length && <UILoader />}
      </UIBorderArticle>
    </div>
  );
};

export default Portfolio;
