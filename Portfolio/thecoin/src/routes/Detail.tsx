import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface IPrice {
  //받아오는 코인이 어떻게생겼는지 타입스크립트에게 말해주기
  market: string;
  trade_price: number;
}

const DetailContainer = styled.div`
  width: 520px;
  height: 400px;
  background-color: white;
  margin-right: 15px;
`;

const CoinName = styled.h1``;
const Price = styled.p``;

function Detail() {
  const { coinMarket } = useParams();
  const [price, setPrice] = useState<IPrice[]>([]);
  const getDetail = async () => {
    const res = await fetch(
      `https://api.upbit.com/v1/candles/days?market=${coinMarket}&count=1`
    );
    const json = await res.json();
    setPrice(json);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <DetailContainer>
      {price.map((p) => <Price key={p.market}>
      <p>{p.market}</p>
      <p>{p.trade_price}</p>
      </Price>
      )}
    </DetailContainer>
  );
}

export default Detail;
