import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Router from "./routes/Router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoins } from "./utils/request";
import { setTheme } from "./redux/slices/themeSlice/themeSlice";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";

function App() {
  const dispatch = useDispatch();
  const allCoins = useSelector((state) => state.allCoins.allCoins);
  const theme = useSelector((state) => state.theme.theme)

  useEffect(() => {
    if (allCoins.length === 0) {
      dispatch(getAllCoins());
    }

    const allCoinsTheme = localStorage.getItem("allCoinsTheme");
    if (allCoinsTheme) {
      const parsedTheme = JSON.parse(allCoinsTheme);
      dispatch(setTheme(parsedTheme));
    } else {
      dispatch(setTheme("light"));
      localStorage.setItem("allCoinsTheme", JSON.stringify("light"));
    }
  }, []);
  return (
    <>
      <GlobalStyle theme={theme}/>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
