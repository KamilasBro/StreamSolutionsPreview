import React, { useContext } from "react";
import CurrentRouteContext from "../../contextAPI/CurrentRouteContext";
import { Link } from "react-router-dom";
import logo from "../../assets/images/navbar/logo.png";
import IgSvg from "../../utils/socials/ig";
import YtSvg from "../../utils/socials/yt";
import DcSvg from "../../utils/socials/dc";
import "./footer.scss";
const Footer: React.FC = () => {
  const socialColor = "white";
  const routeContext = useContext(CurrentRouteContext);
  function scrollToTop(route: string) {
    if (routeContext?.currentRoute === route)
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
  }
  return (
    <footer>
      <div className="inner-footer">
        <Link
          to={"/"}
          onClick={() => {
            scrollToTop("/");
          }}
        >
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="footer-menu">
          <li className="nav-link">
            <Link
              to={"/about"}
              onClick={() => {
                scrollToTop("/about");
              }}
            >
              O nas
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to={"/creators"}
              onClick={() => {
                scrollToTop("/creators");
              }}
            >
              Nasi Twórcy
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to={"/companies"}
              onClick={() => {
                scrollToTop("/companies");
              }}
            >
              {" "}
              Dla Firm
            </Link>
          </li>
          <li className="nav-link">Napisz do nas!</li>
          <li className="nav-link">
            <a href="mailto:kontakt@streamsolutions.pl">
              kontakt@streamsolutions.pl
            </a>
          </li>
          <li className="nav-link">
            <IgSvg
              fillColor={socialColor}
              url="https://www.instagram.com/streamsolutionsofficial/"
            />
            <YtSvg
              fillColor={socialColor}
              url="https://www.youtube.com/channel/UCEZQYs6M5CWHy1bjNO2dy8Q"
            />
            <DcSvg
              fillColor={socialColor}
              url="https://discord.gg/RbSguqYBmj"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
