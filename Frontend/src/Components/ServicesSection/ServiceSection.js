import React from "react";
import "./style.css";
import icon1 from "../../assets/images/torneira.png";
import icon2 from "../../assets/images/torre-de-agua (1).png";
import icon3 from "../../assets/images/esgoto.png";
import icon4 from "../../assets/images/saneamento.png";
import { Slide } from "react-awesome-reveal";
export default function ServicesSection() {
  return (
    <div className="ContainerService">
      <Slide left delay={500} fraction={0}>
        <h1 className="TitleServices" id="service">
          Serviços
        </h1>
        <section className="WrapperContent">
          <div className="WrapperIcons_main">
            <img className="Image_Icons" src={icon1} />
            <p className="Content"> Obras de saneamento básico</p>
          </div>
          <div className="WrapperIcons_sub">
            <div className="WrapperIcons">
              <img className="Image_Icons" src={icon4} />
              <p className="Content">
                Estações de tratamento de água, Adutoras, Estações Elevatórias ,
                Boosters.
              </p>
            </div>
            <div className="WrapperIcons">
              <img className="Image_Icons" src={icon2} />
              <p className="Content">
                Reservatórios elevados e Reservatórios apoiados, redes de
                distribuição de água
              </p>
            </div>
            <div className="WrapperIcons">
              <img className="Image_Icons" src={icon3} />
              <p className="Content">
                Estações de tratamento de esgoto, redes coletoras de esgoto,
                Linhas de Recalque,
              </p>
            </div>
          </div>
        </section>
      </Slide>
    </div>
  );
}
