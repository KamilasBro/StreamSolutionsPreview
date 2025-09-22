import React, { useContext, useState, useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import CurrentRouteContext from "./contextAPI/CurrentRouteContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurCreators from "./pages/OurCreators/OurCreators";
import ForCompanies from "./pages/ForCompanies/ForCompanies";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/scrollTop/ScrollToTop";
const App = () => {
  const [closePrompt, setClosePrompt] = useState(true);
  const routeContext = useContext(CurrentRouteContext);
  const [isLoading, setIsLoading] = useState(false);
  //loading screen logic
  useLayoutEffect(() => {
    const htmlEle = document.querySelector("html") as HTMLElement;
    htmlEle.style.overflowY = "hidden";
    if (routeContext?.currentRoute !== "*") {
      setIsLoading(true);
    } else {
      htmlEle.style.overflowY = "auto";
      setIsLoading(false);
    }
    const timeoutId = setTimeout(() => {
      htmlEle.style.overflowY = "auto";
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [routeContext?.currentRoute]);
  return (
    <Router>
      <ScrollToTop />
      {/*Necessary to make scrolling to top when using react-router*/}
      {isLoading && <LoadingScreen />}
      <Navbar />
      <div className="d-flex justify-content-center">
        <section className="app">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Stream Solutions</title>
                    <meta
                      name="description"
                      content="Stream Solutions to profesjonalny dom mediowy 
                      specjalizujący się w wsparciu streamerów. 
                      Oferujemy skuteczne strategie marketingowe, które pomogą 
                      Ci osiągnąć sukces online. Dołącz do nas już dziś!"
                    />
                    <meta
                      name="keywords"
                      content="
                      agencja marketingowa dla streamerów, 
                      marketing dla streamerów, 
                      usługi dla streamerów, 
                      agencja reklamowa dla streamerów, 
                      promocja streamerów, 
                      dom mediowy"
                    />
                    <link rel="canonical" href="https://streamsolutions.pl/" />
                    {/* Open Graph tags */}
                    <meta property="og:title" content="Stream Solutions" />
                    <meta
                      property="og:description"
                      content="Stream Solutions to profesjonalny dom mediowy specjalizujący się w wsparciu streamerów."
                    />
                    <meta
                      property="og:url"
                      content="https://streamsolutions.pl/"
                    />
                  </Helmet>
                  <HomePage />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Helmet>
                    <title>O Nas</title>
                    <meta
                      name="description"
                      content="Dowiedz się więcej o naszym domie
                       mediowym dla streamerów. Jesteśmy 
                       zespołem doświadczonych profesjonalistów, którzy 
                       pomagają streamerom osiągać sukces online. 
                       Poznaj naszą historię i misję już teraz!"
                    />
                    <meta
                      name="keywords"
                      content="
                      misja agencji, 
                      doświadczenie w marketingu online, 
                      zespół ekspertów, współpraca z streamerami, 
                      dom mediowy, 
                      historia domu mediowego"
                    />
                    <link
                      rel="canonical"
                      href="https://streamsolutions.pl/about"
                    />
                    {/* Open Graph tags */}
                    <meta property="og:title" content="O Nas" />
                    <meta
                      property="og:description"
                      content="Dowiedz się więcej o naszym domie
                      mediowym dla streamerów."
                    />
                    <meta
                      property="og:url"
                      content="https://streamsolutions.pl/about"
                    />
                  </Helmet>
                  <AboutUs />
                </>
              }
            />
            <Route
              path="/creators"
              element={
                <>
                  <Helmet>
                    <title>Nasi Twórcy</title>
                    <meta
                      name="description"
                      content="Poznaj naszych partnerów - streamerów, 
                      którzy nam zaufali i z którymi współpracujemy. 
                      Każdy z nich ma unikalne umiejętności i doświadczenie 
                      w tworzeniu treści online. Współpraca z nimi pomaga 
                      nam dostarczać skuteczne rozwiązania w świecie 
                      internetowej rozrywki."
                    />
                    <meta
                      name="keywords"
                      content="
                      nasi klienci, 
                      streamerzy, 
                      partnerstwo z streamerami, 
                      promocja streamerów, 
                      influencerzy, 
                      współpraca biznesowa, 
                      streamowanie, 
                      tworzenie treści online, 
                      internetowa rozrywka"
                    />
                    <link
                      rel="canonical"
                      href="https://streamsolutions.pl/creators"
                    />
                    {/* Open Graph tags */}
                    <meta property="og:title" content="Nasi Twórcy" />
                    <meta
                      property="og:description"
                      content="Poznaj naszych partnerów - streamerów."
                    />
                    <meta
                      property="og:url"
                      content="https://streamsolutions.pl/creators"
                    />
                  </Helmet>
                  <OurCreators />
                </>
              }
            />
            <Route
              path="/companies"
              element={
                <>
                  <Helmet>
                    <title>Dla Firm</title>
                    <meta
                      name="description"
                      content="Stream Solutions oferuje skuteczne 
                      usługi marketingowe dla firm, które 
                      chcą zwiększyć swoją widoczność online 
                      i osiągnąć sukces w środowisku cyfrowym. 
                      Skontaktuj się z nami, aby dowiedzieć się więcej!"
                    />
                    <meta
                      name="keywords"
                      content="
                      usługi marketingowe dla firm, 
                      partnerstwo biznesowe, 
                      promocja online dla firm,
                      marketing cyfrowy dla przedsiębiorstw, 
                      wzrost biznesu dzięki marketingowi internetowemu, 
                      dom mediowy"
                    />
                    <link
                      rel="canonical"
                      href="https://streamsolutions.pl/companies"
                    />
                    {/* Open Graph tags */}
                    <meta property="og:title" content="Dla Firm" />
                    <meta
                      property="og:description"
                      content="Oferujemy skuteczne 
                      usługi marketingowe dla firm, które 
                      chcą zwiększyć swoją widoczność online 
                      i osiągnąć sukces w środowisku cyfrowym."
                    />
                    <meta
                      property="og:url"
                      content="https://streamsolutions.pl/creators"
                    />
                  </Helmet>
                  <ForCompanies />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Helmet title="Page Not Found" />
                  <NotFound />
                </>
              }
            />
          </Routes>
        </section>
      </div>
      {/*Maintenance Prompt*/}
      {!closePrompt && (
        <div className="info-prompt">
          <div>
            Przepraszamy za wszelkie niedogodności. Obecnie prowadzimy prace
            serwisowe, aby ulepszyć naszą stronę i zapewnić lepsze doświadczenie
            użytkownika.W związku z tym, niektóre elementy mogą czasowo nie
            działać prawidłowo. Nasza ekipa pracuje nad rozwiązaniem problemów i
            przywróceniem pełnej funkcjonalności jak najszybciej. Dziękujemy za
            wyrozumiałość i cierpliwość.
          </div>
          <button
            onClick={() => {
              setClosePrompt(true);
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.12207"
                width="20"
                height="3"
                transform="rotate(45 2.12207 0)"
                fill="#020216"
              />
              <rect
                y="14.1423"
                width="20"
                height="3"
                transform="rotate(-45 0 14.1423)"
                fill="#020216"
              />
            </svg>
          </button>
        </div>
      )}
      {routeContext?.currentRoute !== "*" && <Footer />}
    </Router>
  );
};

export default App;
