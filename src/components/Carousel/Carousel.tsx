import React, { useRef, useEffect, useState } from "react";
import collaborators from "../../data/collaborators/collaboratorsData.json";
import "./carousel.scss";
interface Collaborator {
  imgName: string;
  url: string;
}
const Carousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [newCollaborators, setNewCollaborators] =
    useState<Collaborator[]>(collaborators);
  const [wasIterated, setWasIterated] = useState(false);
  const initialLenght = collaborators.length;
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const container = containerRef.current;
    const scrollSpeed = 1; // Adjust the scrolling speed as needed
    // Adjust the interval duration as needed (for mobile more frequently)
    const scrollInterval = 15;
    //carousel logic
    const intervalId = setInterval(() => {
      if (!isHovered && container) {
        container.scrollLeft += scrollSpeed;
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          if (!wasIterated) {
            setNewCollaborators((prevCollaborators) => [
              ...prevCollaborators,
              ...collaborators,
            ]);
            setWasIterated(true);
          } else {
            setNewCollaborators(
              (prevCollaborators) => prevCollaborators.slice(initialLenght)
              //array is sliced from the first x elements after 1st iteration
              //to prevent infinite amount of elements
            );
            setWasIterated(false);
          }
        }
      }
    }, scrollInterval);
    if (isHovered) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [wasIterated, initialLenght, isHovered]);
  return (
    <div
      className="carousel"
      ref={containerRef}
      onMouseEnter={() => {
        //if mobile resolution is active it will not work
        if (window.innerWidth >= 1024) setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {newCollaborators.map((e: Collaborator, index: number) => (
        <a href={e.url} key={`collaborator${index}`} target="blank">
          <img
            src={require(`../../data/collaborators/images/${e.imgName}`)}
            alt="collaboratorImg"
          />
        </a>
      ))}
    </div>
  );
};

export default Carousel;
