import React, { useState } from "react";
import Input from "../Input/Input";
import { BaseBallWrapper, List, ListWrapper, Message } from "./BaseBall.styles";
import useBaseBall from "../../hook/useBaseBall";
import { generateRandomNumber } from "../../utils/generateRandomNumber";
export default function BaseBall() {
  const [randomNumber, setRandomNumber] = useState(() =>
    generateRandomNumber()
  );

  const { input, handleChange, handleBaseBall, guessList, message } =
    useBaseBall({
      randomNumber,
      setRandomNumber,
    });

  return (
    <BaseBallWrapper>
      <Input
        value={input}
        placeholder={"3자리 숫자를 입력헤주세요"}
        onChange={handleChange}
        onKeyDown={handleBaseBall}
      />
      {message && <Message>{message}</Message>}
      {guessList.length > 0 && (
        <ListWrapper>
          {guessList.map((guess, idx) => {
            return <List key={idx}>{guess}</List>;
          })}
        </ListWrapper>
      )}
    </BaseBallWrapper>
  );
}
