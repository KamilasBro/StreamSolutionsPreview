import React from "react";
import useUpdateCurrentRoute from "../../utils/useUpdateCurrentRoute/useUpdateCurrentRoute.tsx";
import Header from "../../components/Header/Header";
import GridContainer from "../../components/GridContainer/GridContainer";
import FormContainer from "../../components/FormComp/FormComp";
import girl1 from "../../assets/images/aboutUs/girl1.png";
import girl2 from "../../assets/images/aboutUs/girl2.png";
import headphoneguy from "../../assets/images/aboutUs/headphoneguy.png";
import "./aboutUs.scss";
const AboutUs: React.FC = () => {
  useUpdateCurrentRoute();
  return (
    <section className="aboutUs">
      <Header h1text="Streamujesz i chcesz osiągnąć sukces">
        <p>
          Jesteśmy firmą, która zajmuje się pomocą dla streamerów. Oferujemy
          szeroki zakres usług, które pomogą Ci rozwinąć swoją karierę i dotrzeć
          do większej liczby widzów.
        </p>
      </Header>
      <GridContainer>
        <div>
          <h3>nasza misja</h3>
          <p>
            Nasza misja to stworzenie przyszłości influencerów poprzez
            wspieranie ich na każdym etapie ich kariery. Wierzymy w moc
            autentyczności i pasji, dlatego tworzymy przestrzeń, w której twórcy
            mogą wyrażać siebie w sposób prawdziwy i inspirujący. Nasza firma to
            nie tylko sieć partnerska, ale także wspólnota ludzi z pasją do
            tworzenia i dzielenia się treściami w internecie. Naszym celem jest
            zapewnienie influencerom nie tylko narzędzi i wsparcia, ale także
            miejsca, w którym mogą rozwijać swoje umiejętności i pomysły.
            Wierzymy, że każdy influencer ma potencjał, aby dotrzeć do swojej
            publiczności i wpływać na nią, tworząc pozytywne treści w sieci.
          </p>
        </div>
        <div>
          <img src={girl1} alt="gridImg1" className="gridImg1" />
        </div>
        <div>
          <img src={girl2} alt="gridImg2" className="gridImg2" />
        </div>
        <div>
          <p>
            Pracujemy z twórcami, którzy dążą do tego, aby ich pasja stała się
            źródłem ich sukcesu. Pomagamy im zrozumieć ich widzów, dostosować
            strategie i rozwijać się w dynamicznym świecie mediów
            społecznościowych. Nasza misja to nie tylko wsparcie influencerów w
            budowaniu swojej marki, ale także w rozwijaniu swojego wpływu i
            tworzeniu pozytywnego śladu w internecie. Jesteśmy przekonani, że
            influencerzy mają potencjał, aby inspirować, uczyć i zmieniać świat.
            Nasza misja polega na tym, aby pomóc im osiągnąć te cele i wspólnie
            tworzyć przyszłość influencer marketingu, która jest autentyczna,
            inspirująca i pełna pozytywnego wpływu.
          </p>
        </div>
      </GridContainer>
      <article>
        <h3 className="container-title">Dlaczego warto nas wybrać?</h3>
        <div className="containerbox">
          <div>
            <img src={headphoneguy} alt="articleImg" />
          </div>
          <div className="containerbox-items">
            <div className="containerbox-item">
              <h3>
                <span className="h3-index">01</span>Indywidualne Podejście
              </h3>
              <p>
                Zapewniamy każdemu influencerowi wsparcie dostosowane do jego
                unikalnych potrzeb i celów. Rozumiemy, że każdy twórca jest
                inny, dlatego nasze strategie są starannie dopasowane do
                osobistego stylu i ambicji każdego z naszych partnerów.
              </p>
            </div>
            <div className="containerbox-item">
              <h3>
                <span className="h3-index">02</span>Współprace
              </h3>
              <p>
                Oferujemy naszym influencerom dostęp do różnorodnych i
                interesujących projektów współpracy z markami. Staramy się
                tworzyć okazje do tworzenia autentycznych i kreatywnych treści,
                które rezonują z ich osobistym stylem i zainteresowaniami.
              </p>
            </div>
            <div className="containerbox-item">
              <h3>
                <span className="h3-index">03</span>Efektywna Komunikacja
              </h3>
              <p>
                Ułatwiamy kontakt z naszym zespołem, zapewniając szybką i
                bezpośrednią odpowiedź na wszelkie pytania i wątpliwości. Naszym
                celem jest zapewnienie klarownej i skutecznej komunikacji, co
                jest niezbędne w szybko zmieniającym się świecie influencer
                marketingu.
              </p>
            </div>
          </div>
        </div>
      </article>
      <FormContainer />
    </section>
  );
};
export default AboutUs;
