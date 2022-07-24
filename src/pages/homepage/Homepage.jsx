import React, { useState, useEffect } from "react";
import katana from "../../assets/fifteen-katana-zero.gif";
import banner from "../../assets/group3.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [tests, setTests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/test/all`)
      .then((res) => {
        console.log("res.data :>> ", res.data);
        setTests(res.data.allTests);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, []);

  return (
    <section className="homepage">
      <div className="home">
        <header>
          <div className="hero-text">
            <h1>Mother Base</h1>
            <h2>Un site de gamers pour les gamers</h2>
            <p>
              Bienvenue dans la mother base. Nous sommes un groupe d’amis
              passioné de jeux videos depuis notre enfance, qui aimons partager
              notre expertise. Vous pouvez y retrouver des news, tests ainsi que
              des streams.
            </p>
          </div>
          <div className="hero-img">
            <img src={banner} alt="banner" />
          </div>
        </header>
        {/* <article className="section-news">
          <h1>
            News <img src={katana} alt="dragon" />
          </h1>
        </article> */}
        <article className="section-tests">
          <h1>
            Tests <img src={katana} alt="dragon" />
          </h1>
          <div className="grid-tests">
            {tests.map((el) => {
              const { id, testTitle, platform, gameImg } = el;
              const goToTestDetails = (id) => {
                navigate(`/test/${id}`);
              };
              return (
                <div
                  key={id}
                  onClick={() => goToTestDetails(id)}
                  className="block-test"
                >
                  <figure>
                    <img src={gameImg} alt={gameImg} />
                  </figure>
                  <h2>{testTitle}</h2>
                  <span>{platform}</span>
                </div>
              );
            })}
          </div>
        </article>
        <section className="trailer-section">
          <h1>Trailer du moment</h1>
          <div className="div-video">
            <iframe
              width="760"
              height="415"
              src="https://www.youtube.com/embed/p7gMjQsVfdY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Homepage;
