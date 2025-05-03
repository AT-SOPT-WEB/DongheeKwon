import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function PokemonDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const handelBtn = () => {
    navigate(-1);
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const img = response.data.sprites?.front_default;
        const type = response.data.types?.map((t) => t.type.name).join(", ");
        setData({
          img: img,
          type: type,
        });
      } catch (e) {
        console.log("detail 받아오기 실패");
      }
    };
    fetch();
  }, []);
  return (
    <div style={{ padding: "2rem" }}>
      <button
        onClick={handelBtn}
        style={{
          border: "none",
          background: "white",
        }}
      >
        ← 목록으로
      </button>
      <h1>{name}</h1>
      <section>
        <img src={data.img} />
        <div>{data.type}</div>
      </section>
    </div>
  );
}
