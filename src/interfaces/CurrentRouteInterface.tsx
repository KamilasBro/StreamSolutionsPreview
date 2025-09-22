import React, { ReactNode, Dispatch, SetStateAction } from "react";

export interface CurrentRouteContextType {
  currentRoute: string;
  setCurrentRoute: Dispatch<SetStateAction<string>>;
}
export interface CurrentRouteContextProviderProps {
  children: ReactNode;
}
