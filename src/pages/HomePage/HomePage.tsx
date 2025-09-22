import React, { useContext } from "react";
import CurrentRouteContext from "../../contextAPI/CurrentRouteContext";
import { Link } from "react-router-dom";
import useUpdateCurrentRoute from "../../utils/useUpdateCurrentRoute/useUpdateCurrentRoute.tsx";
import Header from "../../components/Header/Header";
import FormComp from "../../components/FormComp/FormComp";
import CreatorsList from "../../components/CreatorsList/CreatorsList";
import featuredCreatorsData from "../../data/creators/featuredCreators.json";

import gridImg1 from "../../assets/images/homePage/grid/img1.png";
import gridImg2 from "../../assets/images/homePage/grid/img2.png";
import gridImg3 from "../../assets/images/homePage/grid/img3.png";
import gridImg4 from "../../assets/images/homePage/grid/img4.png";

import Carousel from "../../components/Carousel/Carousel";

import people from "../../assets/images/homePage/whyUs/people.png";
import "./homePage.scss";
const HomePage: React.FC = () => {
  useUpdateCurrentRoute();
  const routeContext = useContext(CurrentRouteContext);
  function scrollToTop(route: string) {
    if (routeContext?.currentRoute === route)
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
  }
  return (
    <section className="homePage">
      <Header h1text="Z nami streamowanie staje się prostsze">
        <p>
          Jako pierwsza i jedyna sieć partnerska o unikalnym podejściu, nasze
          priorytety wykraczają poza krótkoterminowy zysk. Skupiamy się na
          długofalowym wsparciu i rozwoju wizerunku naszych influencerów w
          internecie, zapewniając im niezbędne narzędzia i wsparcie na każdym
          etapie ich kariery.
        </p>
      </Header>
      <div className="offers">
        <h3 className="section-title">Co oferujemy</h3>
        <ul className="offers-list">
          <li className="offers-item">
            <img src={gridImg1} alt="gridImg" />
            <div>
              <h3>Współprace</h3>
              <span>
                Pomożemy Ci w zdobyciu lukratywnych współprac reklamowych z
                markami, które pasują do Twojej niszy. Oferujemy wsparcie w
                negocjowaniu warunków współpracy, tworzeniu materiałów
                promocyjnych i monitorowaniu jej efektów.
              </span>
            </div>
          </li>
          <li className="offers-item">
            <img src={gridImg2} alt="gridImg" />
            <div>
              <h3>Wsparcie Techniczne</h3>
              <span>
                Pomożemy Ci skonfigurować transmisję w taki sposób, aby była
                atrakcyjna i przejrzysta dla widzów. Oferujemy pomoc w wyborze
                ustawień graficznych, dźwiękowych i technicznych.
              </span>
            </div>
          </li>
          <li className="offers-item">
            <img src={gridImg3} alt="gridImg" />
            <div>
              <h3>Analiza Kanału</h3>
              <span>
                Pomożemy Ci zrozumieć dane dotyczące Twojego kanału, abyś mógł
                podejmować świadome decyzje, które pomogą Ci zwiększyć zasięgi.
                Oferujemy analizę statystyk, poszukiwanie trendów i opracowanie
                strategii rozwoju kanału.
              </span>
            </div>
          </li>
          <li className="offers-item">
            <img src={gridImg4} alt="gridImg" />
            <div>
              <h3>Streamowanie bez stresu</h3>
              <span>
                Pomożemy Ci przygotować się do streamowania, tak abyś mógł
                skupić się na swojej pasji. Oferujemy pomoc w wyborze sprzętu,
                konfiguracji oprogramowania i przygotowaniu scenariusza.
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="collaborations">
        <h3>Pracowaliśmy z</h3>
        <Carousel />
      </div>
      <CreatorsList data={featuredCreatorsData} />
      <div className="d-flex justify-content-center">
        <Link
          to="/creators"
          onClick={() => {
            scrollToTop("/creators");
            const navbarElement = document.getElementById("navbar");
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
          <button className="checkCreators">Zobacz wszystkich</button>
        </Link>
      </div>
      <div className="whyUs">
        <img src={people} alt="peopleImg" />
        <div>
          <h3>Dlaczego my?</h3>
          <p>
            Oferujemy coś więcej niż tylko standardowe rozwiązania współpracy.
            Nasze unikalne podejście koncentruje się na długoterminowym rozwoju
            i wsparciu influencerów, nie ograniczając się jedynie do
            krótkoterminowych korzyści finansowych. Zapewniamy narzędzia, wiedzę
            i indywidualne wsparcie, które są niezbędne do budowania silnego,
            trwałego wizerunku w internecie. Wybierając nas, wybierasz partnera,
            który inwestuje w Twoją przyszłość, pomagając Ci rosnąć i odnosić
            sukcesy na każdym etapie kariery.
          </p>
          <div>
            <Link to="/about" onClick={() => scrollToTop("/about")}>
              <button>Więcej O Nas</button>
            </Link>
            <Link to="/companies" onClick={() => scrollToTop("/companies")}>
              <button>Dla Firm</button>
            </Link>
          </div>
        </div>
      </div>
      <FormComp />
    </section>
  );
};
export default HomePage;
