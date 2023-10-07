import React, { useState } from "react";
import "./introduce.css";
import Dropdown from "../../components/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("");
  const navigate = useNavigate();
  const TOTAL_QUESTİONS = 10;
  const startQuiz = () => {
    if (difficulty) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTİONS}`);
    }
  };
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img
          src="https://media.istockphoto.com/id/1221877604/tr/vekt%C3%B6r/3d-konu%C5%9Fma-balonu-sembolleri-ile-quiz-logosu-anket-kavram%C4%B1-%C5%9Fark%C4%B1-g%C3%B6stermek-test-d%C3%BC%C4%9Fmesi.jpg?s=170667a&w=0&k=20&c=2piwLHfNIolvpHPzNqgStZVedjj6QtJBiMWIe-O9TaM="
          alt=""
        />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className="introduce-btn">
          Quiz e Başla
        </div>
      </div>
    </div>
  );
};

export default Introduce;
