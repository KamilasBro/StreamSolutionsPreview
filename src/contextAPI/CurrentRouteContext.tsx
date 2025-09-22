import React, { createContext, useState } from "react";

import {
  CurrentRouteContextType,
  CurrentRouteContextProviderProps,
} from "../interfaces/CurrentRouteInterface";

const CurrentRouteContext = createContext<CurrentRouteContextType | undefined>(
  undefined
);

export function CurrentRouteContextProvider({
  children,
}: CurrentRouteContextProviderProps): JSX.Element {
  const [currentRoute, setCurrentRoute] = useState<string>("none");

  const value: CurrentRouteContextType = {
    currentRoute,
    setCurrentRoute,
  };

  return (
    <CurrentRouteContext.Provider value={value}>
      {children}
    </CurrentRouteContext.Provider>
  );
}

export default CurrentRouteContext;

//Context API that stores current route
//Dumb simple