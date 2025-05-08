import { useState } from "react";
import { generateRandomNumber } from "../utils/generateRandomNumber"; // 위치 맞춰주세요
import { BASEBALL_MAX } from "../constants/BasballCount";
const useBaseBall = ({ randomNumber, setRandomNumber }) => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [guessList, setGuessList] = useState([]);

  const handleBaseBall = (e) => {
    if (e.code !== "Enter") return;
    if (!/^\d{3}$/.test(input)) {
      setMessage("서로 다른 숫자 3자리를 입력해주세요.");
      return;
    }

    const userInput = input.split("");
    if (new Set(userInput).size !== 3) {
      setMessage("서로 다른 숫자 3자리를 입력해주세요.");
      return;
    }
    if (guessList.length >= BASEBALL_MAX) {
      setMessage(
        "🧨 게임 오버! 10번을 넘겨서 실패하였습니다. 게임이 초기화됩니다."
      );
      setTimeout(() => {
        resetGame();
      }, 5000);
      return;
    }

    let strike = 0;
    let ball = 0;

    userInput.forEach((digit, idx) => {
      if (digit === randomNumber[idx]) strike++;
      else if (randomNumber.includes(digit)) ball++;
    });

    if (strike === 3) {
      setMessage("🎉 정답입니다! 3초 뒤에 게임이 리셋됩니다!");
      setTimeout(() => {
        resetGame();
      }, 3000);
    } else {
      setMessage(`${strike}스트라이크 ${ball}볼`);
    }

    const result = `${strike}S ${ball}B`;
    setGuessList((prev) => [...prev, `${input} - ${result}`]);

    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const resetGame = () => {
    setRandomNumber(generateRandomNumber());
    setInput("");
    setMessage("");
    setGuessList([]);
  };

  return { input, setInput, handleChange, handleBaseBall, guessList, message };
};
export default useBaseBall;
