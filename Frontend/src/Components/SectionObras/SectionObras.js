import React, { useEffect, useState } from "react";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ContentCard from "../CardObra/CardObra";
import axios from "axios";


export default function SectionObras() {
  const [Content, SetContent] = useState([]);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const FecthData = async () => {
    await axios
      .get(`http://localhost:3333/obra`)
      .then(({ data }) => {
        SetContent(data);    
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FecthData();
  }, []);
  return (
    <>
      <section className="Parallax"> </section>
      <div className="Container">
        <h1 className="TitleObra" id="obras">
          Principais Obras
        </h1>
        <Carousel responsive={responsive}>
       
       {
        Content.slice(0,5).map(({ obra, resumo, images, contrato, contratante, id, status})=>{
          return(
            <ContentCard
                    obra={obra}
                    resumo={resumo}
                    imagem={images[0]?.imageUrl}
                    contrato={contrato}
                    contratante={contratante}
                    id={id}
                    status={status}
                  />
          );
        })
       }
        </Carousel>
      </div>
    </>
  );
}
