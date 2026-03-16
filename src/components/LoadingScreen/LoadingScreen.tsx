import React, { useEffect, useState } from "react";
import spinnerImg from "../../assets/images/loadingScreen/spinner.png";
import "./loadingScreen.scss";

const LoadingScreen: React.FC<{
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isLoading, setIsLoading }) => {

  const [pageLoaded, setPageLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    setPageLoaded(false);
    setMinTimePassed(false);

    requestAnimationFrame(() => {
      setPageLoaded(true);
    });

    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // close loader when both conditions pass
  useEffect(() => {
    if (pageLoaded && minTimePassed) {
      setIsLoading(false);
    }
  }, [pageLoaded, minTimePassed, setIsLoading,]);

  //disable scroll during loading
  useEffect(() => {
    const body = document.body;
    const scrollY = window.scrollY;

    if (isLoading) {
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.width = "100%";
    }

    return () => {
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, [isLoading]);

  return (
    <section className="loading-screen">
      <img src={spinnerImg} alt="spinner" />
    </section>
  );
};

export default LoadingScreen;