import React, { useEffect, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import logo from "../../assets/images/logo.png";
import "./style.css";
import axios from "axios";

export default function ObrasPage() {
  const State = useSelector((state) => state?.sliceReducer.initialState);
  const [DataImage, SetDataImage] = useState([]);
  const [CurrentImage, SetCurrentImage] = useState();
  const FecthData = () => {
    axios
      .get(
        `http://localhost:3333/obra/images/${
          State[5] != undefined ? State[5] : State?.id
        }`
      )
      .then(({ data }) => {
        SetDataImage(data);
        SetCurrentImage(data[0]?.imageUrl)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    FecthData();
    console.log(CurrentImage)
  }, []);

  return (
    <div className="Container_PageObra">
      <header className="Header_Obra">
        <Link to="/">
          <img className="Logo_Obra" src={logo} />
        </Link>
        <p className="Content_Header">Detalhes da obra</p>
      </header>

      <Link to="/" className="Link_Page_Obra">
        <IoArrowBackCircleOutline className="Icon_Back" />
      </Link>
      <section className="Container_Obra">
        <div className="Image_Obra">
          <img
            src={`http://localhost:3333/files/${CurrentImage}`}
          />
        </div>
        <div className="Container_Informations">
          <h2 className="Title_Obra">
            {State[0] != undefined ? State[0] : State?.obra}
          </h2>
          <h3 className="Subtitle_Obra">
            Contrato: n{State[4] != undefined ? State[3] : State?.contrato}
          </h3>
          <p className="Content_Obra">
            <strong>Objeto Contratual:</strong>{" "}
            {State[2] != undefined ? State[2] : State?.resumo}
          </p>
          <h3 className="Subtitle_Obra">
            Contratante: {State[4] != undefined ? State[4] : State?.contratante}
          </h3>
          <h3 className="Subtitle_Obra">
            <strong>Situação:</strong>{" "}
            {State[6] != undefined ? State[6] : State?.status}
          </h3>
        </div>
      </section>
      <section className="Section_Obras">
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
              {DataImage.map(({ imageUrl }) => {
                return (
                  <img
                  onClick={()=>{SetCurrentImage(imageUrl)}}
                    src={`http://localhost:3333/files/${imageUrl}`}
                    className="ListImages"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
