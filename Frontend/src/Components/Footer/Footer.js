import React from "react";
import "./style.css";
import { AiFillPhone } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
export default function Footer() {
  return (
    <footer className="Footer" id="contact">
      <section className="Section-icons">
        <h3 className="TitleIcons">Contatos</h3>
        <div className="IconContainer">
          <div className="Icon_div">
            <AiFillPhone className="Icon" />
            <p className="Icon_text">(11) 3054-9494</p>
          </div>
          <div className="Icon_div">
            <MdOutlineEmail className="Icon" />
            <p className="Icon_text">kmg@kmg.eng.br</p>
          </div>
        </div>
      </section>
      <div>
        <h3 className="TitleIcons">Endereço</h3>
        <iframe
          className="Mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1039603418712!2d-46.676077425294416!3d-23.600604263033848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50ab24e08fef%3A0x12eebe0997591868!2sAv.%20Rouxinol%2C%2055%20-%20Indian%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004516-000!5e0!3m2!1spt-BR!2sbr!4v1686569667308!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}
