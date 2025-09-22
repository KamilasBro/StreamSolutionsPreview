import React from "react";
import useUpdateCurrentRoute from "../../utils/useUpdateCurrentRoute/useUpdateCurrentRoute.tsx";
import Header from "../../components/Header/Header";
import creatorsData from "../../data/creators/creators.json";
import CreatorsList from "../../components/CreatorsList/CreatorsList";
import "./ourCreators.scss";

const OurCreators: React.FC = () => {
  useUpdateCurrentRoute();
  return (
    <section className="ourCreators">
      <Header h1text="Znajdź swojego ulubionego twórcę">
        <p>
          Pragniemy przedstawić niezwykłe jednostki, które współpracują z Stream
          Solutions. To utalentowani influencerzy i kreatywni twórcy, którzy
          dzięki swojemu zasięgowi oraz pasji stanowią fundament naszych
          skutecznych kampanii.
        </p>
      </Header>
      <CreatorsList data={creatorsData} />
    </section>
  );
};
export default OurCreators;
