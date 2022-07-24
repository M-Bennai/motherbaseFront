import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailsTest = () => {
  const { id } = useParams();
  const [test, setTest] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/test/${id}`)
      .then((res) => {
        console.log("res.data :>> ", res.data.oneTest);

        setTest(res.data.oneTest);

        console.log(" VALUE PLEASE :>> ", res.data.oneTest.testTitle);
        // console.log("image article :>> ", res.data.oneArticle.image);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, []);
  return (
    <section className="test-section">
      <div className="container-test">
        <h1>{test.testTitle}</h1>
        <img className="gameImg" src={test.gameImg} alt="game-img" />
        <h2>{test.title1}</h2>
        <p>{test.block1}</p>
        <img className="gameImg1" src={test.image1} alt="game-img" />
        <h3>{test.title2}</h3>
        <p>{test.block2}</p>
        <img className="gameImg2" src={test.image2} alt="game-img" />
        <h4>{test.title3}</h4>
        <p>{test.block3}</p>
        <h5>La note</h5>
        <div className="rating-div">
          <span>{test.rating}</span>
        </div>

        <div className="conclusion">
          <h6>Conclusion</h6>
          <p>{test.conclusion}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailsTest;
