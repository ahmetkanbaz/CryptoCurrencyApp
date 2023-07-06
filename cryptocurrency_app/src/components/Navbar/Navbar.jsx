import {BsSunFill, BsMoonFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import cryptoLogo from '../../assets/logo/cryptoLogo.png'
import {useState} from 'react'
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to='/' className="navbar-brand">
            <img src={cryptoLogo} alt="logo" className='img-fluid' width='100px'/>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">
                  Link
                </Link>
              </li>
            </ul>
            <div>
              {
                darkMode ? (
                  <BsMoonFill size='1.2rem' cursor='pointer' onClick={handleDarkMode} />
                ) : (<BsSunFill size = '1.5rem' cursor= 'pointer' onClick={handleDarkMode} />
                )
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
