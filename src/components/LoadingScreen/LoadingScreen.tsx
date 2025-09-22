import React from "react";
import spinnerImg from "../../assets/images/loadingScreen/spinner.png"
import "./loadingScreen.scss";
const LoadingScreen: React.FC = () => {
  return (
    <section className="loading-screen">
        <img src={spinnerImg} alt="spinner"/>
    </section>
  );
};
export default LoadingScreen;
