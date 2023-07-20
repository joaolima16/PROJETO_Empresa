import React from "react";
import "./style.css";
import image from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
export default function Header() {

  return (
    <header className=" Parallax Header">
      <section className="SectionTitle">
        <img className="Logo_Header" src={image} />
        <h1 className="Title">CONSTRUTORA LTDA </h1>
      </section>

      <nav className="NavList">
        <a href="#about" className="link">
          <li className="NavLink"> Sobre</li>
        </a>
        <Link to="/obras" className="link">
          <li className="NavLink"> Portfólio</li>
        </Link>
        <a href="#service">
          <li className="NavLink">Serviços</li>
        </a>
        <a href="#contact">
          <li className="NavLink">Contato</li>
        </a>

      </nav>
    </header>
  );
}
