import React from "react";
import useUpdateCurrentRoute from "../../utils/useUpdateCurrentRoute/useUpdateCurrentRoute.tsx";
import Header from "../../components/Header/Header";
import GridContainer from "../../components/GridContainer/GridContainer";
import FormContainer from "../../components/FormComp/FormComp";
import handShake from "../../assets/images/forCompanies/handShake.png";
import squareArrow from "../../assets/images/forCompanies/squareArrow.png";
import "./forCompains.scss";
const ForCompanies: React.FC = () => {
  useUpdateCurrentRoute();
  return (
    <section className="forCompanies">
      <Header h1text="Zwiększ zasięgi i sprzedaż dzięki współpracy z influencerami">
        <p>
          W naszej bazie znajdziesz influencerów z branży gamingowej i innych, o
          różnych zasięgach. Pomożemy Ci wybrać influencerów, którzy dopasują
          się do Twojej marki i pomogą Ci osiągnąć Twoje cele marketingowe.
          Skontaktuj się z nami już dziś i dowiedz się, jak influencer marketing
          może pomóc Twojej firmie!
        </p>
      </Header>
      <GridContainer>
        <div>
          <h3>czym się zajmujemy</h3>
          <p>
            Naszym głównym celem jest kreowanie efektywnych współprac, łącząc
            potencjał influencerów z potrzebami firm, w celu generowania
            znaczącego wpływu na rynku. Dzięki rozległemu zasięgowi influencerów
            z różnych branż, proponujemy wyjątkową platformę umożliwiającą
            firmom dotarcie do nowych, zaangażowanych odbiorców. Wykorzystanie
            influencerów staje się efektywnym środkiem zwiększania
            zainteresowania produktem.
          </p>
        </div>
        <div>
          <img src={squareArrow} alt="gridImg3" className="gridImg3" />
        </div>
        <div>
          <img src={handShake} alt="gridImg4" className="gridImg4" />
        </div>
        <div>
          <p>
            Umożliwiamy firmom efektywne dotarcie do swojej grupy docelowej
            poprzez współpracę z renomowanymi influencerami. Jeżeli poszukujesz
            skutecznych strategii promocyjnych, które przyczynią się do wzrostu
            zainteresowania Twoim produktem, to trafiłeś we właściwe miejsce. W
            Stream Solutions priorytetem jest profesjonalizm, kreatywność i
            osiągane rezultaty, co gwarantuje kompleksowe wsparcie dla naszych
            partnerów marketingowych w realizacji ich biznesowych celów.
            Serdecznie zapraszamy do kontaktu i wspólnego sukcesu.
          </p>
        </div>
      </GridContainer>
      <FormContainer />
    </section>
  );
};
export default ForCompanies;
