import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Router from "./routes/Router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoins } from "./utils/request";

function App() {
  const dispatch = useDispatch();
  const allCoins = useSelector((state) => state.allCoins.allCoins);

  useEffect(() => {
    if (allCoins.length === 0) {
      dispatch(getAllCoins());
    }
  }, []);
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
