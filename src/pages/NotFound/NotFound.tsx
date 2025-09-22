import React, { useContext, useEffect } from "react";
import CurrentRouteContext from "../../contextAPI/CurrentRouteContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/navbar/logo.png";
import "./notFound.scss";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const routeContext = useContext(CurrentRouteContext);
  useEffect(() => {
    routeContext?.setCurrentRoute("*");
  });
  if (!routeContext) {
    // Handle the case when the context is not available
    console.error("Context is not available");
    return null;
  }
  return (
    <section className="notFound">
      <div>
        <h3>Nie znaleziono strony</h3>
        <img src={logo} alt="logo" />
        <div className="d-flex justify-content-center">
          {/* Button to navigate back to the home page */}
          <button onClick={() => navigate("/")}>Wróć do ekranu głównego</button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
