import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp, FiPhone } from "react-icons/fi";
import logo from "../../../images/logo-light.png";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [color, setColor] = useState(false);
  const [isMenuSubMenu1, setMenuSubMenu1] = useState(false);
  const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);

  const handleSubmenuHover = (submenuStateSetter, newState) => {
    setMenuSubMenu1(false);
    setMenuSubMenu2(false);
    submenuStateSetter(newState);
  };

  // useEffect(() => {
  //   const changeColor = () => {
  //     setColor(window.scrollY >= 0);
  //   };

  //   window.addEventListener("scroll", changeColor);

  //   return () => {
  //     window.removeEventListener("scroll", changeColor);
  //   };
  // }, []);

  return (
    <header className={"header  header__middle"}>
      <div className="header__middle__logo">
        <NavLink exact activeClassName="is-active" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <nav className="main-nav">
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`main-menu ${menuOpen ? "open" : ""}`}>
          <li className="menu-item">
            <NavLink exact activeClassName="is-active" to="/">
              Home
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink activeClassName="is-active" to="/About">
              About Us
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink activeClassName="is-active" to="/team">
             Team
            </NavLink>
          </li>
          <li
            className="menu-item sub__menus__arrows"
            onMouseEnter={() => handleSubmenuHover(setMenuSubMenu1, true)}
            onMouseLeave={() => handleSubmenuHover(setMenuSubMenu1, false)}
          >
            <Link to="#">
              Mortgage Products{" "}
              {isMenuSubMenu1 ? <FiChevronUp /> : <FiChevronDown />}
            </Link>
            {isMenuSubMenu1 && (
              <ul className="sub__menus">
                <li>
                  <NavLink activeClassName="is-active" to="/MortgageCalculator">
                    Mortgage Calculator
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/ARM">
                    Adjustable Rate Mortgages
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/FRM">
                    Fixed Rate Mortgages
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/FHA">
                    FHA Loans
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/VA">
                    VA Loans
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/Jumbo">
                    Jumbo Loans
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/NonQM">
                    Non-QM Loan
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li
            className="menu-item sub__menus__arrows"
            onMouseEnter={() => handleSubmenuHover(setMenuSubMenu2, true)}
            onMouseLeave={() => handleSubmenuHover(setMenuSubMenu2, false)}
          >
            <Link to="#">
              Resources {isMenuSubMenu2 ? <FiChevronUp /> : <FiChevronDown />}
            </Link>
            {isMenuSubMenu2 && (
              <ul className="sub__menus">
                <li>
                  <NavLink activeClassName="is-active" to="/Refinance">
                    Refinance
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/RAC">
                    Refinance Analysis
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/QuickQuoteForm">
                    Quick Qoute
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="is-active" to="/FAR">
                    Factors Affecting Rates
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink activeClassName="is-active" to="/RateTrends">
                    Rate Trends
                  </NavLink>
                </li> */}
              </ul>
            )}
          </li>
          <li className="menu-item">
            <NavLink activeClassName="is-active" to="/Contact">
              Contact
            </NavLink>
          </li>
          <li className="menu-item">
            <a
              href="https://2584954.my1003app.com/2085367/inquiry"
              className="apply-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </li>
          <li className="menu-item">
            <a href="tel: 8328886368" className="phone-icon">
              <FiPhone />
              (832) 888-6368
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
