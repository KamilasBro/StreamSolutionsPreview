import React, { ReactNode } from "react";
import "./gridContainer.scss";
interface Props {
  children: ReactNode;
}

const GridContainer: React.FC<Props> = ({ children }) => {
  return <div className="grid-container">{children}</div>;
};
export default GridContainer;
