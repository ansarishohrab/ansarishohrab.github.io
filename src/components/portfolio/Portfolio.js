import { useEffect, useState } from "react";
import UIBorderArticle from "../shared/ui-border-article/UIBorderArticle";
import UICategoryFilter from "../shared/ui-category-filter/UICategoryFilter";
import UILoader from "../shared/ui-loader/UILoader";
import PortfolioItem from "./portfolio-item/PortfolioItem";
import "./Portfolio.scss";

const Portfolio = (props) => {
  const { profile } = props;

  const [categories, setCategories] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    const calculateCategories = () => {
      let categories = profile?.projects?.map((project) => ({
        name: project.category || "All",
        value: project.category,
      }));
      categories?.unshift({ name: "All", value: "" });
      setCategories(categories);
      setSelectedCategory(categories?.[0]);
    };
    calculateCategories();
  }, [profile]);

  useEffect(() => {
    const filterProjects = () => {
      if (!selectedCategory || !selectedCategory.value) {
        setFilteredProjects(profile?.projects);
      } else {
        setFilteredProjects(
          profile?.projects?.filter(
            (project) => project.category === selectedCategory.name
          )
        );
      }
    };
    filterProjects();
  }, [selectedCategory, profile]);

  return (
    <div className="portfolio-container">
      <UIBorderArticle>
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>
        <UICategoryFilter
          categories={categories}
          initialSelection={selectedCategory}
          categoryChanged={(category) => {
            setSelectedCategory(category);
          }}
        />
        <ul className="project-list">
          {filteredProjects?.map((item, index) => {
            return (
              <li key={index}>
                <PortfolioItem item={item} />
              </li>
            );
          })}
        </ul>

        {!filteredProjects?.length && <UILoader />}
      </UIBorderArticle>
    </div>
  );
};

export default Portfolio;
