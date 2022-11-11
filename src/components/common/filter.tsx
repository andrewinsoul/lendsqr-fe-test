import { FC } from "react";
import filterIcon from "../../images/pngs/filter-results-button.png";

export const Filter: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex w-15p flex-align-center">
      <p className="bold pri-text-color-1 uppercase lg:th-td">{title}</p>
      <img src={filterIcon} className="ml-8px square-12px" alt="filter-img" />
    </div>
  );
};
