import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import cryptoLogo from "../../assets/logo/cryptoLogo.png";
import { setTheme } from "../../redux/slices/themeSlice/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavbarStyle } from "./NavbarStyle";
import { setSearchQuery } from "../../redux/slices/filterSlice/filterSlice";
const Navbar = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.theme);

  const handleDarkMode = () => {
    dispath(setTheme("light"));
    localStorage.setItem("allCoinsTheme", JSON.stringify("light"));
  };

  const handleLightMode = () => {
    dispath(setTheme("dark"));
    localStorage.setItem("allCoinsTheme", JSON.stringify("dark"));
  };

  const handleSearch = (e) => {
    dispath(setSearchQuery(e.target.value));
  };

  const handleSearchEnter = (e) => {
    if(e.key == 'Enter') {
      navigate('/allCoins')
      e.preventDefault()
    }
  }

  return (
    <NavbarStyle className="navbar navbar-expand-lg sticky-top" theme={theme}>
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={cryptoLogo}
            alt="logo"
            className="img-fluid"
            width="100px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ps-lg-5 me-auto mb-2 mb-lg-0 gap-lg-3 gap-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/allcoins" className="nav-link">
                All Coins
              </Link>
            </li>
          </ul>
          <div className="me-0 me-lg-auto w-50 mb-3 mb-lg-0">
            <input
              type="text"
              className="form-control px-3 searchInput shadow-none"
              onChange={handleSearch}
              onKeyDown={handleSearchEnter}
            />
          </div>
          <div>
            {theme == "dark" ? (
              <BsMoonFill
                size="1.2rem"
                cursor="pointer"
                onClick={handleDarkMode}
              />
            ) : (
              <BsSunFill
                size="1.5rem"
                cursor="pointer"
                onClick={handleLightMode}
              />
            )}
          </div>
        </div>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;
