import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CurrentRouteContext from "../../contextAPI/CurrentRouteContext";

const useUpdateCurrentRoute = () => {
  const routeContext = useContext(CurrentRouteContext);
  const location = useLocation();

  useEffect(() => {
    routeContext?.setCurrentRoute(location.pathname);
  }, [routeContext, location.pathname]);

  return routeContext;
};

export default useUpdateCurrentRoute;

//custom hook that tracks the current route of the website and saves it inside context
//mainly for navbar and footer but for more features aswell
