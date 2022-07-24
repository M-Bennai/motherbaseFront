import React, { useState, useEffect } from "react";
import katana from "../../assets/fifteen-katana-zero.gif";
import banner from "../../assets/group3.svg";
import axios from "axios";

const Homepage = () => {
  const [tests, setTests] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/test/all`)
      .then((res) => {
        console.log("res.data :>> ", res.data);
        setTests(res.data);
        console.log("je veux voir mon image :>> ", res.data.allArticle.image);
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
        </article>
      </div>
    </section>
  );
};

export default Homepage;
