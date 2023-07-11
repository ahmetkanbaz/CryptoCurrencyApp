import AllCoinsTable from "./AllCoinsTable/AllCoinsTable";
import {AllCoinsListWrapper} from './AllCoinsListStyle'
const AllCoinsList = () => {
  return (
    <AllCoinsListWrapper className="py-5">
      <div className="container py-5">
        <AllCoinsTable />
      </div>
    </AllCoinsListWrapper>
  );
};

export default AllCoinsList;
