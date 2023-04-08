// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const appLogo = 'https://assets.ccbp.in/frontend/react-js/wave-logo-img.png'
// alt should be wave

const Header = () => {
  const a = 0

  return (
    <nav className="navBar">
      <div className="appLogo_container">
        <img className="appLogo" alt="wave" src={appLogo} />
        <p className="appName_wave">Wave</p>
      </div>
      <ul className="options_container">
        <li>
          <Link to="/">
            <p className="li_option"> Home</p>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <p className="li_option">About</p>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <p className="li_option">Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
