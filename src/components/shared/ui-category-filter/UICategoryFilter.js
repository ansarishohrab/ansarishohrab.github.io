import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./UICategoryFilter.scss";

const UICategoryFilter = (props) => {
  const { categories, initialSelection, categoryChanged } = props;
  const [isDropdowOptionsVisible] = useState();
  const [selected, setSelected] = useState(initialSelection);
  useEffect(() => {
    setSelected(initialSelection);
  }, [initialSelection]);

  const onClickCategory = (category) => {
    setSelected(category);
    categoryChanged(category);
  };

  return (
    <div className="ui-category-filter-container">
      <ul className="filter-list">
        {categories?.map((category, index) => {
          return (
            <li className="filter-item" key={index}>
              <Button
                className={`${
                  category.value === selected?.value ? "active" : ""
                }`}
                onClick={() => {
                  onClickCategory(category);
                }}
              >
                {category.name}
              </Button>
            </li>
          );
        })}
      </ul>
      <div className="filter-select-box">
        <Button
          className={`filter-select ${isDropdowOptionsVisible ? "active" : ""}`}
        >
          <div className="select-value" data-select-value>
            {selected?.name || "Select category"}
          </div>
          <div className="select-icon">
            <i className="bx bx-chevron-down chevron-down"></i>
          </div>
        </Button>

        <ul className="select-list">
          {categories?.map((category, index) => {
            return (
              <li key={index} className="select-item">
                <Button
                  className={`${
                    category.value === selected?.value ? "active" : ""
                  }`}
                >
                  {category.name}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UICategoryFilter;
