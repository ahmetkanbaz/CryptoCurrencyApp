import AllCoinsTable from "./AllCoinsTable/AllCoinsTable";
import {AllCoinsListWrapper} from './AllCoinsListStyle'
import {useSelector} from 'react-redux'
const AllCoinsList = () => {
  const theme = useSelector((state) => state.theme.theme)
  return (
    <AllCoinsListWrapper className="py-5" theme={theme}>
      <div className="container py-5">
        <AllCoinsTable />
      </div>
    </AllCoinsListWrapper>
  );
};

export default AllCoinsList;
