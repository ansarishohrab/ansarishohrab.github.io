import { useContext, useEffect, useState } from "react";
import UIBorderArticle from "../shared/ui-border-article/UIBorderArticle";
import UICategoryFilter from "../shared/ui-category-filter/UICategoryFilter";
import UILoader from "../shared/ui-loader/UILoader";
import PortfolioItem from "./portfolio-item/PortfolioItem";
import "./Portfolio.scss";
import { DataContext } from "../../store/DataContextProvider";

const Portfolio = () => {
  const { profile } = useContext(DataContext);

  const [categories, setCategories] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    const calculateCategories = () => {
      let categories = [
        { name: "All", value: "" }, // Ensure "All" is always present
        ...Array.from(
          new Set(
            profile?.projects
              ?.map((project) => project.category)
              .filter(Boolean)
          )
        ).map((category) => ({ name: category, value: category })),
      ];
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
