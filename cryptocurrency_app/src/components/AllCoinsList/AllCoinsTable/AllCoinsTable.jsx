import { useDispatch, useSelector } from "react-redux";
import AllCoinsTableItem from "./AllCoinsTableItem";
import { useEffect } from "react";
import {
  setSortOption,
  setFilterCoins,
} from "../../../redux/slices/filterSlice/filterSlice";
import { sortCoins } from "../../../helpers/sortCoins";
import { DisplayIcon4Name, DisplayIcon4Price } from "../../../helpers/DisplayIcon";
const AllCoinsTable = () => {
  const dispatch = useDispatch();
  const allCoins = useSelector((state) => state.allCoins.allCoins);
  const searchQuery = useSelector((state) => state.filterCoins.searchQuery);
  const sortOption = useSelector((state) => state.filterCoins.sortOption);
  const filterCoins = useSelector((state) => state.filterCoins.filterCoins);

  const changeSortName = () => {
    if (sortOption == "A-Z") {
      dispatch(setSortOption("Z-A"));
    } else {
      dispatch(setSortOption("A-Z"));
    }
  };

  const changeSortPrice = (sortValue) => {
    if (sortValue) {
      if (sortOption == `${sortValue} Ex2Ch`) {
        dispatch(setSortOption(`${sortValue} Ch2Ex`));
      } else {
        dispatch(setSortOption(`${sortValue} Ex2Ch`));
      }
    } else {
      if (sortOption == "Ex2Ch") {
        dispatch(setSortOption("Ch2Ex"));
      } else {
        dispatch(setSortOption("Ex2Ch"));
      }
    }
  };

  useEffect(() => {
    let tempFilteredCoins = [...allCoins];
    if (searchQuery) {
      tempFilteredCoins = tempFilteredCoins.filter((coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    sortCoins(tempFilteredCoins, sortOption);
    dispatch(setFilterCoins(tempFilteredCoins));
  }, [allCoins, searchQuery, sortOption]);

  return (
    <div className=" overflow-x-auto">
      <table className="w-100 tableAllCoins">
        <thead>
          <tr>
            <th onClick={() => changeSortPrice("Rank")}>#</th>
            <th onClick={changeSortName}>
              Coin <DisplayIcon4Name />
            </th>
            <th onClick={() => changeSortPrice()}>Price {
              (sortOption == 'Ch2Ex' || sortOption == 'Ex2Ch') && <DisplayIcon4Price />
            }</th>
            <th onClick={() => changeSortPrice("High")}>Highest 24s {
              (sortOption == 'High Ch2Ex' || sortOption == 'High Ex2Ch') && <DisplayIcon4Price />
            }</th>
            <th onClick={() => changeSortPrice("Low")}>Lowest 24s {
              (sortOption == 'Low Ch2Ex' || sortOption == 'Low Ex2Ch') && <DisplayIcon4Price />
            }</th>
            <th onClick={() => changeSortPrice("Percentage")}>
              Change (%) 24s {
              (sortOption == 'Percentage Ch2Ex' || sortOption == 'Percentage Ex2Ch') && <DisplayIcon4Price />
            }
            </th>
            <th onClick={() => changeSortPrice("Supply")}>
              Circulating Supply {
              (sortOption == 'Supply Ch2Ex' || sortOption == 'Supply Ex2Ch') && <DisplayIcon4Price />
            }
            </th>
            <th onClick={() => changeSortPrice("Market")}>Market Value {
              (sortOption == 'Market Ch2Ex' || sortOption == 'Market Ex2Ch') && <DisplayIcon4Price />
            }</th>
          </tr>
        </thead>
        <tbody>
          {filterCoins.map((coin) => (
            <AllCoinsTableItem key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCoinsTable;
