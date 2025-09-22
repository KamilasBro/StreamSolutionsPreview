import React, { ReactNode, useContext, useEffect, useRef } from "react";
import CurrentRouteContext from "../../contextAPI/CurrentRouteContext";
import Typed from "typed.js";
import IgSvg from "../../utils/socials/ig";
import YtSvg from "../../utils/socials/yt";
import DcSvg from "../../utils/socials/dc";
import "./header.scss";
interface Props {
  children: ReactNode;
  h1text: string;
}
const Header: React.FC<Props> = ({ children, h1text }) => {
  const socialColor = "#E6023D";
  const routeContext = useContext(CurrentRouteContext);

  //the typing animation using typed.js adjusted a little
  //we are getting h1text as prop
  const ele = useRef<HTMLSpanElement>(null); // Reference to the span element
  useEffect(() => {
    if (ele.current) {
      const words = h1text.split(" "); // Split the string into words
      //we create a map of words with spans that will color
      const modifiedWords = words.map((word, index) => {
        switch (routeContext?.currentRoute) {
          case "/":
            return index === 0 || index === words.length - 1
              ? `<span class="red">${word}</span>`
              : index === 1
              ? `<span class="red">${word}</span><br>`
              : index === 2
              ? `${word}<br>`
              : word;
          case "/about":
            return index === 0
              ? `<span class="red">${word}</span>`
              : index === 2
              ? `${word}<br>`
              : index === words.length - 1
              ? `<span class="red">${word}</span>?`
              : word;
          case "/creators":
            return index === 0 || index === words.length - 1
              ? `<span class="red">${word}</span>`
              : index === 1
              ? `${word}<br>`
              : word;
          case "/companies":
            return index === 1 || index === 5
              ? `<span class="red">${word}</span>`
              : index === 2
              ? `${word}<br>`
              : index === 4
              ? `${word}<br>`
              : index === 6
              ? `${word}<br>`
              : word;
          default:
            return word;
        }
      });

      const typed = new Typed(ele.current, {
        strings: [modifiedWords.join(" ")], // Join the modified words into a single string
        typeSpeed: 30,
        startDelay: 1500,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [routeContext?.currentRoute, h1text]);

  //render different button based on current route
  function renderBtn() {
    const navbarElement = document.getElementById("navbar");
    if (routeContext?.currentRoute === "/creators") {
      return (
        <button
          onClick={() => {
            const creatorsElement = document.getElementById("creators");
            if (creatorsElement && navbarElement) {
              const scrollPosition =
                creatorsElement.getBoundingClientRect().top +
                window.scrollY -
                navbarElement.offsetHeight;

              window.scroll({ top: scrollPosition, behavior: "smooth" });
            }
          }}
        >
          Zobacz twórców
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            const formElement = document.getElementById("form");
            if (formElement && navbarElement) {
              const scrollPosition =
                formElement.getBoundingClientRect().top +
                window.scrollY -
                navbarElement.offsetHeight;

              window.scroll({ top: scrollPosition, behavior: "smooth" });
            }
          }}
        >
          skontaktuj się z nami
        </button>
      );
    }
  }
  return (
    <header>
      <h1>
        <span ref={ele} />
      </h1>
      {children}
      <div className="header-wrap">
        {renderBtn()}
        <div className="socials">
          <IgSvg
            fillColor={socialColor}
            url="https://www.instagram.com/streamsolutionsofficial/"
          />
          <YtSvg
            fillColor={socialColor}
            url="https://www.youtube.com/channel/UCEZQYs6M5CWHy1bjNO2dy8Q"
          />
          <DcSvg fillColor={socialColor} url="https://discord.gg/RbSguqYBmj" />
        </div>
      </div>
    </header>
  );
};
export default Header;
