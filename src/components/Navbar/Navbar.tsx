import React, { useContext, useEffect, useState } from "react";
import CurrentRouteContext from "../../contextAPI/CurrentRouteContext";
import { CurrentRouteContextType } from "../../interfaces/CurrentRouteInterface";

import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../../assets/images/navbar/logo.png";
import hamburger from "../../assets/images/navbar/hamburger.png";
import closeImg from "../../assets/images/navbar/close.png";
import "./navbar.scss";
//here we have both navbar and mobile navbar
const Navbar: React.FC = () => {
  const routeContext = useContext(CurrentRouteContext);
  const navbarElement = document.getElementById("navbar");
  //to determine if if breakpoint is active
  const [isMobileActive, setIsMobileActive] = useState(false);

  //disable scroll while isMobile is active
  useEffect(() => {
    const htmlEle = document.querySelector("html") as HTMLElement;
    if (isMobileActive) {
      htmlEle.style.overflowY = "hidden";
    } else {
      htmlEle.style.overflowY = "visible";
    }
  }, [isMobileActive]);

  if (!routeContext) {
    // Handle the case when the context is not available
    console.error("Context is not available");
    return null;
  }

  function scrollToTop(route: string) {
    if (routeContext?.currentRoute === route)
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
  }
  //render for both navbar and mobile navbar
  function renderMenu(routeContext: CurrentRouteContextType) {
    return (
      <ul className="nav-menu">
        <li
          className={`nav-link ${
            routeContext.currentRoute === "/about" && "active"
          }`}
        >
          <Link
            to={"/about"}
            onClick={() => {
              scrollToTop("/about");
              setIsMobileActive(false);
            }}
          >
            O Nas
          </Link>
        </li>
        <li
          className={`nav-link ${
            routeContext.currentRoute === "/creators" && "active"
          }`}
        >
          <Link
            to={"/creators"}
            onClick={() => {
              scrollToTop("/creators");
              setIsMobileActive(false);
            }}
          >
            Nasi Twórcy
          </Link>
        </li>
        <li
          className={`nav-link ${
            routeContext.currentRoute === "/companies" && "active"
          }`}
        >
          <Link
            to={"/companies"}
            onClick={() => {
              scrollToTop("/companies");
              setIsMobileActive(false);
            }}
          >
            Dla Firm
          </Link>
        </li>
        <li
          className={`nav-link`}
        >
          <Link
            to={"https://partners.streamsolutions.pl"}
            onClick={() => {
              scrollToTop("/companies");
              setIsMobileActive(false);
            }}
          >
            Strefa Partnera
          </Link>
        </li>
        {routeContext.currentRoute !== "*" &&
          routeContext.currentRoute !== "/creators" && (
            <li className="nav-link">
              <button
                className="nav-menu-btn"
                onClick={() => {
                  const formElement = document.getElementById("form");
                  const navbarElement = document.getElementById("navbar");

                  if (formElement && navbarElement) {
                    const scrollPosition =
                      formElement.getBoundingClientRect().top +
                      window.scrollY -
                      navbarElement.offsetHeight;

                    window.scroll({
                      top: scrollPosition,
                      behavior: "smooth",
                    });
                  }
                  setIsMobileActive(false);
                }}
              >
                Kontakt
              </button>
            </li>
          )}
        <li className="nav-link">
          <button className="nav-menu-btn">
            <NavDropdown title="PL">
              <NavDropdown.Item
                onClick={() => {
                  setIsMobileActive(false);
                }}
              >
                PL
              </NavDropdown.Item>
            </NavDropdown>
          </button>
        </li>
      </ul>
    );
  }
  //closes mobile navbar when resized
  window.onresize = () => {
    setIsMobileActive(false);
  };
  return (
    <>
      <nav id="navbar">
        <div className="inner-nav">
          <Link
            to={"/"}
            onClick={() => {
              scrollToTop("/");
              setIsMobileActive(false);
            }}
          >
            <img src={logo} alt="logo" className="brand-logo" />
          </Link>
          {renderMenu(routeContext)}
          <span
            className="hamburger"
            id="hamburger"
            onClick={() => {
              setIsMobileActive((prevState) => !prevState);
            }}
          >
            <img src={isMobileActive ? closeImg : hamburger} alt="hamburger" />
          </span>
        </div>
      </nav>
      {/*mobile navbar*/}
      {isMobileActive && (
        <section
          className="mobile-navbar"
          style={{ top: navbarElement?.offsetHeight }}
        >
          <div className="mobile-menu-wrap">{renderMenu(routeContext)}</div>
        </section>
      )}
    </>
  );
};
export default Navbar;
