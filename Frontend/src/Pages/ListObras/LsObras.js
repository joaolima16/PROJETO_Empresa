import axios from "axios";
import React, { useEffect, useState } from "react";
import {IoArrowBackCircleOutline, IoArrowForwardCircleOutline, } from "react-icons/io5";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Footer from "../../Components/Footer/Footer";
import "./style.css";
import { changeConstruction } from "../../Redux/Slice";


export default function ListObrasPage() {
  const [Data, SetData] = useState([]);
  const dispatch = useDispatch();
  const [ImageIndex, SetImageIndex] = useState(0);

  const NextBtn = ({ onClick }) => {
    return (
      <div className="Icon_route Next" onClick={onClick}>
        <IoArrowForwardCircleOutline className="Icon" />
      </div>
    );
  };
  const PrevBtn = ({ onClick }) => {
    return (
      <div onClick={onClick} className="Icon_route Prev">
        <IoArrowBackCircleOutline className="Icon" />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    beforeChange: (current, next) => SetImageIndex(next),
  };
  const FecthDatas = async () => {
    await axios
      .get("http://localhost:3333/obra")
      .then(({ data }) => {
        SetData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FecthDatas();
  }, []);

  return (
    <>
      <div className="Container_List">
        <header className="Header_obra">
          <Link to="/" className="Link_Page_Obra">
            <IoArrowBackCircleOutline className="Link_Home" />
          </Link>
          <h3 className="Title_Header">Portfólio de Obras</h3>
        </header>
        <section className="Carrosel_Container">
          <Slider {...settings}>
            {Data.map((index, idx) => {
              return (
                <div
                  className={idx === ImageIndex ? "slide activeSlide" : "slide"}
                >
                     <Link
                  to="/obra"
                  onClick={() => {
                    dispatch(changeConstruction(index));
                  }}
                >
                  <img
                    src={`http://localhost:3333/files/${index?.images[0].imageUrl}`}
                  />
                  </Link>
                </div>
              );
            })}
          </Slider>
   
          {/* <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className="Container_Carrosel"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 450,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 0,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {Data.map((index) => {
            return (
              <Link
                to="/obra"
                onClick={() => {
                  dispatch(changeConstruction(index));
                }}
              >
                <img
                  src={`http://localhost:3333/files/${index?.images[0].imageUrl}`}
                  className="Image_Obras"
                />
                ;
              </Link>
            );
          })}
        </Carousel> */}
        </section>
        <Footer />
      </div>
    </>
  );
}
