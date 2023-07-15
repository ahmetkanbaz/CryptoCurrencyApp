import {
  BsSortAlphaDown,
  BsSortAlphaDownAlt,
  BsSortDownAlt,
  BsSortDown,
} from "react-icons/bs";
import { useSelector } from "react-redux";
export const DisplayIcon4Name = () => {
  const sortOption = useSelector((state) => state.filterCoins.sortOption);
  const displaySortIconName = (sortOption) => {
    if (sortOption == "A-Z") {
      return <BsSortAlphaDown size="1.2rem" />;
    } else if (sortOption == "Z-A") {
      return <BsSortAlphaDownAlt size="1.2rem" />;
    } else return null;
  };
  return displaySortIconName(sortOption);
};

export const DisplayIcon4Price = () => {
  const sortOption = useSelector((state) => state.filterCoins.sortOption);
  const displaySortIconPrice = (sortOption) => {
    if (
      [
        "Ch2Ex",
        "High Ch2Ex",
        "Low Ch2Ex",
        "Percentage Ch2Ex",
        "Supply Ch2Ex",
        "Market Ch2Ex",
      ].includes(sortOption)
    ) {
      return <BsSortDownAlt size="1.2rem" />;
    } else if (
      [
        "Low Ex2Ch",
        "Ex2Ch",
        'Percentage Ex2Ch"',
        "High Ex2Ch",
        "Supply Ex2Ch",
        "Market Ex2Ch",
      ].includes(sortOption)
    ) {
      return <BsSortDown size="1.2rem" />;
    }
  };
  return displaySortIconPrice(sortOption);
};
