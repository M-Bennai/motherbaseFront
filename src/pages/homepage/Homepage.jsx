import React from "react";
import katana from "../../assets/fifteen-katana-zero.gif";
import banner from "../../assets/group3.svg";

const Homepage = () => {
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
        <article className="section-news">
          <h1>
            News <img src={katana} alt="dragon" />
          </h1>
        </article>
      </div>
    </section>
  );
};

export default Homepage;
